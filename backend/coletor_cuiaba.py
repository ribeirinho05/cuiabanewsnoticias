"""
CUIABÁ NEWS — Coletor de Notícias de Cuiabá (Prefeitura + Câmara + ALMT)
Web scraping das fontes locais prioritárias
"""

import requests
from bs4 import BeautifulSoup
from datetime import datetime
import logging
import re
import time
from http_utils import requisicao_com_retry

logger = logging.getLogger('cuiabanews.coletor_cuiaba')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
}
TIMEOUT = 15


def _extrair_noticia_generica(url, fonte):
    """Extrai dados de uma notícia individual usando seletores genéricos com fallbacks"""
    try:
        resp = requisicao_com_retry(url, tentativas=3, timeout=TIMEOUT)
        if not resp:
            logger.warning(f"Falha ao acessar notícia: {url}")
            return None
        resp.raise_for_status()
        resp.encoding = 'utf-8'
        soup = BeautifulSoup(resp.text, 'html.parser')

        # Título — tenta múltiplos seletores
        titulo = None
        for sel in ['h1.new-title', 'h1.titulo', 'h1.noticia-titulo', 'h1.entry-title',
                     'h1.post-title', 'h1.page-title', 'div.ntc_titulo_noticia',
                     'h1.news-title', 'h2.news-title', 'h1']:
            el = soup.select_one(sel)
            if el and el.get_text(strip=True) and len(el.get_text(strip=True)) > 10:
                titulo = el.get_text(strip=True)
                break

        if not titulo:
            og = soup.find('meta', property='og:title')
            if og and og.get('content'):
                titulo = og['content']

        if not titulo:
            title_tag = soup.find('title')
            if title_tag:
                titulo = title_tag.get_text(strip=True).split('|')[0].split(' - ')[0].strip()

        if not titulo or len(titulo) < 10:
            return None

        # Texto/conteúdo
        texto = ''
        for sel in ['div.ntc_cont_descricao_noticia', 'div.ntc_descricao_noticia',
                     '.text-noticia', '.new-post', '.conteudo-noticia', '.noticia-conteudo',
                     '.entry-content', '.post-content', '.content-text', '.texto',
                     'article .content', '[itemprop="articleBody"]', 'article']:
            el = soup.select_one(sel)
            if el:
                for tag in el.find_all(['script', 'style', 'nav', 'header', 'footer']):
                    tag.decompose()
                paragrafos = el.find_all('p')
                if paragrafos:
                    texto = ' '.join(p.get_text(strip=True) for p in paragrafos if p.get_text(strip=True))
                else:
                    texto = el.get_text(strip=True)
                if len(texto) > 50:
                    break

        if len(texto) < 50:
            og_desc = soup.find('meta', property='og:description')
            if og_desc and og_desc.get('content') and len(og_desc['content']) > 50:
                texto = og_desc['content']

        if len(texto) < 50:
            all_p = soup.find_all('p')
            texto_p = ' '.join(p.get_text(strip=True) for p in all_p if p.get_text(strip=True) and len(p.get_text(strip=True)) > 20)
            if len(texto_p) > 50:
                texto = texto_p

        # Imagem
        imagem = None
        og = soup.find('meta', property='og:image')
        if og and og.get('content'):
            imagem = og['content']

        if not imagem:
            for sel in ['article img', '.conteudo img', '.noticia img', 'figure img',
                         '.post-image img', '.text-noticia img', '.new-post img']:
                el = soup.select_one(sel)
                if el and el.get('src'):
                    img_src = el['src']
                    imagem = img_src if img_src.startswith('http') else fonte['url_base'] + img_src
                    break

        # Data
        data = None
        for sel in ['div.ntc_data_noticia', '.content-noticias', '.data', 'time',
                     '.date', '.publicacao', '.noticia-data', '[datetime]']:
            el = soup.select_one(sel)
            if el:
                data_text = el.get('datetime', '') or el.get_text(strip=True)
                data = _parse_data(data_text)
                if data:
                    break

        if not data:
            data_match = re.search(r'(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})', soup.get_text())
            if data_match:
                data = _parse_data(data_match.group(0))

        return {
            'titulo': titulo[:200],
            'texto': texto[:2000],
            'imagem': imagem,
            'link': url,
            'data': data or datetime.now().isoformat(),
            'sem_data_real': data is None,
            'fonte': fonte['nome'],
            'prioridade': fonte.get('prioridade', 50)
        }

    except Exception as e:
        logger.warning(f"Erro ao extrair notícia {url}: {e}")
        return None


def _extrair_links_noticias(soup, fonte, padrao_url):
    """Extrai links de notícias de uma página de listagem"""
    links = set()

    for a in soup.find_all('a', href=True):
        href = a['href']
        if padrao_url in href:
            url_completa = href if href.startswith('http') else fonte['url_base'] + href
            links.add(url_completa)

    for item in soup.select('.noticia-item, .item-noticia, .news-item, .card-noticia, '
                            '.list-item, article, .item, .noticia, .card, .list-group-item'):
        a = item.find('a', href=True)
        if a and padrao_url in a['href']:
            url_completa = a['href'] if a['href'].startswith('http') else fonte['url_base'] + a['href']
            links.add(url_completa)

    return links


def coletar_prefeitura():
    """Coleta notícias do site da Prefeitura de Cuiabá"""
    from config import FONTES_CUIABA
    fonte = FONTES_CUIABA['prefeitura']
    noticias = []

    try:
        logger.info(f"Coletando notícias da {fonte['nome']}...")
        resp = requisicao_com_retry(fonte['url_lista'], tentativas=3, timeout=TIMEOUT)
        if not resp:
            logger.error(f"Falha ao acessar {fonte['nome']} após 3 tentativas")
            return noticias
        resp.raise_for_status()
        resp.encoding = 'utf-8'
        soup = BeautifulSoup(resp.text, 'html.parser')

        links_noticias = _extrair_links_noticias(soup, fonte, '/noticia')

        if not links_noticias:
            links_noticias = _extrair_links_noticias(soup, fonte, '/noticias/')

        logger.info(f"Encontrados {len(links_noticias)} links de notícias na Prefeitura")

        for url in list(links_noticias)[:10]:
            noticia = _extrair_noticia_generica(url, fonte)
            if noticia:
                noticias.append(noticia)
            time.sleep(0.5)

    except Exception as e:
        logger.error(f"Erro ao coletar Prefeitura: {e}")

    return noticias


def coletar_camara():
    """Coleta notícias do site da Câmara de Cuiabá"""
    from config import FONTES_CUIABA
    fonte = FONTES_CUIABA['camara']
    noticias = []

    try:
        logger.info(f"Coletando notícias da {fonte['nome']}...")
        resp = requisicao_com_retry(fonte['url_lista'], tentativas=3, timeout=TIMEOUT)
        if not resp:
            logger.error(f"Falha ao acessar {fonte['nome']} após 3 tentativas")
            return noticias
        resp.raise_for_status()
        resp.encoding = 'utf-8'
        soup = BeautifulSoup(resp.text, 'html.parser')

        links_noticias = _extrair_links_noticias(soup, fonte, '/noticia')

        if not links_noticias:
            links_noticias = _extrair_links_noticias(soup, fonte, '/noticias/')

        logger.info(f"Encontrados {len(links_noticias)} links de notícias na Câmara")

        for url in list(links_noticias)[:10]:
            noticia = _extrair_noticia_generica(url, fonte)
            if noticia:
                noticias.append(noticia)
            time.sleep(0.5)

    except Exception as e:
        logger.error(f"Erro ao coletar Câmara: {e}")

    return noticias


def coletar_almt():
    """Coleta notícias da Assembleia Legislativa de Mato Grosso"""
    from config import FONTES_CUIABA
    fonte = FONTES_CUIABA['almt']
    noticias = []

    try:
        logger.info(f"Coletando notícias da {fonte['nome']}...")
        resp = requisicao_com_retry(fonte['url_lista'], tentativas=3, timeout=TIMEOUT)
        if not resp:
            logger.error(f"Falha ao acessar {fonte['nome']} após 3 tentativas")
            return noticias
        resp.raise_for_status()
        resp.encoding = 'utf-8'
        soup = BeautifulSoup(resp.text, 'html.parser')

        links_noticias = _extrair_links_noticias(soup, fonte, '/noticia')

        if not links_noticias:
            links_noticias = _extrair_links_noticias(soup, fonte, '/noticias/')

        logger.info(f"Encontrados {len(links_noticias)} links de notícias na ALMT")

        for url in list(links_noticias)[:8]:
            noticia = _extrair_noticia_generica(url, fonte)
            if noticia:
                noticias.append(noticia)
            time.sleep(0.5)

    except Exception as e:
        logger.error(f"Erro ao coletar ALMT: {e}")

    return noticias


def coletar_todas_cuiaba():
    """Coleta notícias de todas as fontes locais de Cuiabá"""
    todas = []
    todas.extend(coletar_prefeitura())
    todas.extend(coletar_camara())
    todas.extend(coletar_almt())
    logger.info(f"Total de notícias coletadas de Cuiabá: {len(todas)}")
    return todas


def _parse_data(texto):
    """Tenta parsear uma data de diversos formatos"""
    if not texto:
        return None

    formatos = [
        '%Y-%m-%dT%H:%M:%S',
        '%Y-%m-%dT%H:%M:%S.%f',
        '%Y-%m-%dT%H:%M:%S%z',
        '%d/%m/%Y %H:%M',
        '%d/%m/%Y',
        '%d-%m-%Y',
        '%d.%m.%Y',
        '%Y-%m-%d %H:%M:%S',
        '%Y-%m-%d',
        '%d de %B de %Y',
    ]

    texto = texto.strip()

    for fmt in formatos:
        try:
            dt = datetime.strptime(texto, fmt)
            return dt.isoformat()
        except ValueError:
            continue

    match = re.search(r'(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})', texto)
    if match:
        dia, mes, ano = match.groups()
        if len(ano) == 2:
            ano = '20' + ano
        try:
            return datetime(int(ano), int(mes), int(dia)).isoformat()
        except ValueError:
            pass

    return None


MESES_PT = {
    'JAN': 1, 'FEV': 2, 'MAR': 3, 'ABR': 4, 'MAI': 5, 'JUN': 6,
    'JUL': 7, 'AGO': 8, 'SET': 9, 'OUT': 10, 'NOV': 11, 'DEZ': 12,
}


def _parse_data_prefeitura(texto):
    """Parseia data no formato '13 MAR 2026'"""
    if not texto:
        return None
    texto = texto.strip()
    match = re.match(r'(\d{1,2})\s+([A-Z]{3})\s+(\d{4})', texto.upper())
    if match:
        dia, mes_str, ano = match.groups()
        mes = MESES_PT.get(mes_str)
        if mes:
            try:
                return datetime(int(ano), mes, int(dia)).isoformat()
            except ValueError:
                pass
    return _parse_data(texto)


if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    noticias = coletar_todas_cuiaba()
    for n in noticias:
        print(f"[{n['fonte']}] {n['titulo']}")
        print(f"  Link: {n['link']}")
        print(f"  Data: {n['data']}")
        print(f"  Imagem: {n['imagem']}")
        print(f"  Texto: {n['texto'][:100]}...")
        print()
