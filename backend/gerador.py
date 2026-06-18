"""
CUIABÁ NEWS — Gerador do news-data.js
Gera o arquivo JavaScript com dados reais no formato exato que o frontend espera
"""

import json
import os
import logging
import random
from datetime import datetime
import re
import tempfile

logger = logging.getLogger('cuiabanews.gerador')


def gerar_news_data(noticias, videos, cotacoes, breaking_news, clima=None, trending=None):
    from config import CAMINHO_JS, CATEGORIAS

    logger.info("Gerando news-data.js...")

    js = []
    js.append('/* ============================================')
    js.append('   CUIABÁ NEWS — Base de Dados de Notícias v2.0')
    js.append(f'   Atualizado em: {datetime.now().strftime("%d/%m/%Y %H:%M")}')
    js.append('   ============================================ */')
    js.append('')

    js.append('const CATEGORIAS = {')
    for cat_id, cat_info in CATEGORIAS.items():
        js.append(f"    {cat_id}: {{ nome: '{cat_info['nome']}', cor: '{cat_info['cor']}', icone: '{cat_info['icone']}', gradient: '{cat_info['gradient']}' }},")
    js.append('};')
    js.append('')

    js.append('const noticias = [')
    for i, n in enumerate(noticias):
        destaque = 'true' if n.get('destaque') else 'false'
        titulo = _escapar_js(n.get('titulo', ''))
        resumo = _escapar_js(n.get('resumo', n.get('texto', '')[:300]))
        imagem = n.get('imagem', f'https://picsum.photos/seed/n{i}/800/500')
        autor = _escapar_js(n.get('autor', n.get('fonte', 'Redação')))
        tempo = _calcular_tempo(n.get('data'))
        categoria = n.get('categoria', 'brasil')

        destaque_str = f'\n        destaque: {destaque},' if n.get('destaque') else ''

        js.append('    {')
        js.append(f"        id: {i+1}, categoria: '{categoria}',{destaque_str}")
        js.append(f"        titulo: '{titulo}',")
        js.append(f"        resumo: '{resumo}',")
        js.append(f"        imagem: '{imagem}',")
        js.append(f"        autor: '{autor}', tempo: '{tempo}'")
        js.append('    },')

    js.append('];')
    js.append('')

    js.append('const videos = [')
    for i, v in enumerate(videos):
        titulo = _escapar_js(v.get('titulo', ''))
        thumb = v.get('thumb', f'https://picsum.photos/seed/v{i}/600/340')
        duracao = v.get('duracao', '05:00')
        video_id = v.get('video_id', '')

        js.append('    {')
        js.append(f"        id: {i+1},")
        js.append(f"        titulo: '{titulo}',")
        js.append(f"        thumb: '{thumb}',")
        js.append(f"        duracao: '{duracao}',")
        if video_id:
            js.append(f"        videoId: '{video_id}',")
            js.append(f"        embedUrl: 'https://www.youtube.com/embed/{video_id}'")
        else:
            js.append(f"        videoId: '',")
            js.append(f"        embedUrl: ''")
        js.append('    },')

    js.append('];')
    js.append('')

    enquete_data = _gerar_enquete(noticias)
    js.append('const enquete = {')
    js.append(f"    pergunta: '{_escapar_js(enquete_data['pergunta'])}',")
    js.append('    opcoes: [')
    for opcao in enquete_data['opcoes']:
        js.append(f"        {{ texto: '{_escapar_js(opcao['texto'])}', votos: {opcao['votos']} }},")
    js.append('    ]')
    js.append('};')
    js.append('')

    js.append('const breakingNews = [')
    for bn in breaking_news:
        js.append(f"    '{_escapar_js(bn)}',")
    js.append('];')
    js.append('')

    js.append('const cotacoes = [')
    for c in cotacoes:
        nome = _escapar_js(c.get('nome', ''))
        icone = c.get('icone', 'trending_up')
        valor = _escapar_js(c.get('valor', '--'))
        variacao = _escapar_js(c.get('variacao', '0.0%'))
        direcao = c.get('direcao', 'up')
        js.append(f"    {{ nome: '{nome}', icone: '{icone}', valor: '{valor}', variacao: '{variacao}', direcao: '{direcao}' }},")
    js.append('];')
    js.append('')

    if clima:
        js.append('const clima = {')
        js.append(f"    cidade: '{_escapar_js(clima.get('cidade', 'Cuiabá'))}',")
        js.append(f"    estado: '{_escapar_js(clima.get('estado', 'MT'))}',")
        js.append(f"    temperatura: {clima.get('temperatura', 0)},")
        js.append(f"    temp_min: {clima.get('temp_min', 0)},")
        js.append(f"    temp_max: {clima.get('temp_max', 0)},")
        js.append(f"    umidade: {clima.get('umidade', 0)},")
        js.append(f"    condicao: '{_escapar_js(clima.get('condicao', ''))}',")
        js.append(f"    icone: '{_escapar_js(clima.get('icone', 'cloud'))}',")
        js.append(f"    vento: {clima.get('vento', 0)}")
        js.append('};')
    else:
        js.append('const clima = null;')
    js.append('')

    if trending and isinstance(trending, list):
        js.append('const trending = [')
        for t in trending:
            js.append(f"    '{_escapar_js(t)}',")
        js.append('];')
    else:
        js.append("const trending = ['#CuiabáNews', '#MatoGrosso', '#Brasil', '#Economia'];")
    js.append('')

    conteudo = '\n'.join(js)

    os.makedirs(os.path.dirname(CAMINHO_JS), exist_ok=True)

    if os.path.exists(CAMINHO_JS):
        backup_path = CAMINHO_JS + '.backup'
        try:
            with open(CAMINHO_JS, 'r', encoding='utf-8') as f:
                with open(backup_path, 'w', encoding='utf-8') as fb:
                    fb.write(f.read())
            logger.info(f"Backup salvo em {backup_path}")
        except Exception as e:
            logger.warning(f"Erro ao fazer backup: {e}")

    dir_js = os.path.dirname(CAMINHO_JS)
    fd, tmp_path = tempfile.mkstemp(suffix='.js', dir=dir_js)
    try:
        with os.fdopen(fd, 'w', encoding='utf-8') as f:
            f.write(conteudo)
        os.replace(tmp_path, CAMINHO_JS)
    except Exception:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
        raise

    logger.info(f"news-data.js gerado com sucesso!")
    logger.info(f"  {len(noticias)} notícias, {len(videos)} vídeos, {len(cotacoes)} cotações")
    logger.info(f"  {len(breaking_news)} breaking news")
    logger.info(f"  Salvo em: {CAMINHO_JS}")

    return True


def _escapar_js(texto):
    if not texto:
        return ''
    texto = str(texto)
    texto = texto.replace('\\', '\\\\')
    texto = texto.replace("'", "\\'")
    texto = texto.replace('\n', ' ')
    texto = texto.replace('\r', '')
    texto = texto.replace('\t', ' ')
    texto = texto.replace('</', '<\\/')
    texto = re.sub(r'\s+', ' ', texto).strip()
    return texto


_ENQUETES_TEMATICAS = {
    'politica': {
        'pergunta': 'Qual tema político mais te preocupa em Cuiabá?',
        'opcoes': ['Reforma tributária', 'Segurança pública', 'Saúde', 'Educação', 'Transporte público']
    },
    'economia': {
        'pergunta': 'O que mais impacta seu bolso hoje em Cuiabá?',
        'opcoes': ['Preço dos combustíveis', 'Cesta básica', 'Juros e crédito', 'Emprego', 'Aluguel']
    },
    'cidade': {
        'pergunta': 'Qual a prioridade para Cuiabá nos próximos anos?',
        'opcoes': ['Saúde e hospitais', 'Mobilidade urbana', 'Segurança pública', 'Educação e cultura', 'Saneamento básico']
    },
    'esportes': {
        'pergunta': 'Qual esporte você mais acompanha em MT?',
        'opcoes': ['Futebol (Cuiabá EC)', 'Vôlei', 'MMA/UFC', 'Corrida de rua', 'Rodeio']
    },
    'internacional': {
        'pergunta': 'Qual assunto internacional mais te preocupa?',
        'opcoes': ['Guerra na Ucrânia', 'Tensões no Oriente Médio', 'Relações EUA-China', 'Crise climática global', 'Imigração']
    },
    'eventos': {
        'pergunta': 'Que tipo de evento você mais gosta em Cuiabá?',
        'opcoes': ['Feiras e exposições', 'Shows e festivais', 'Esportivos', 'Culturais', 'Gastronômicos']
    },
    'brasil': {
        'pergunta': 'Qual assunto nacional mais te interessa?',
        'opcoes': ['Política', 'Economia', 'Segurança', 'Saúde', 'Educação']
    },
}


def _gerar_enquete(noticias):
    contagem = {}
    for n in noticias:
        cat = n.get('categoria', 'brasil')
        contagem[cat] = contagem.get(cat, 0) + 1

    for cat in sorted(contagem, key=contagem.get, reverse=True):
        if cat in _ENQUETES_TEMATICAS:
            enquete = _ENQUETES_TEMATICAS[cat]
            seed = int(datetime.now().strftime('%Y%m%d'))
            rng = random.Random(seed)
            opcoes = [{'texto': t, 'votos': rng.randint(100, 500)} for t in enquete['opcoes']]
            return {'pergunta': enquete['pergunta'], 'opcoes': opcoes}

    enquete = _ENQUETES_TEMATICAS['cidade']
    seed = int(datetime.now().strftime('%Y%m%d'))
    rng = random.Random(seed)
    opcoes = [{'texto': t, 'votos': rng.randint(100, 500)} for t in enquete['opcoes']]
    return {'pergunta': enquete['pergunta'], 'opcoes': opcoes}


def _calcular_tempo(data_iso):
    if not data_iso:
        return 'agora'

    try:
        data_str = data_iso.replace('Z', '').split('+')[0].split('.')[0]
        data = datetime.fromisoformat(data_str)
        agora = datetime.now()
        diff = agora - data

        minutos = int(diff.total_seconds() / 60)

        if minutos < 1:
            return 'agora'
        elif minutos < 60:
            return f'{minutos} min atrás'
        elif minutos < 1440:
            horas = minutos // 60
            return f'{horas}h atrás'
        elif minutos < 10080:
            dias = minutos // 1440
            return f'{dias}d atrás'
        else:
            return data.strftime('%d/%m/%Y')

    except Exception:
        return 'recente'
