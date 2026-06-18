"""
CUIABÁ NEWS — Orquestrador Principal
Executa todo o pipeline: coleta → filtra → IA → imagens → cotações → clima → gera JS
SEM etapa de chat (diferente do Radar Nortão)
"""

import sys
import os
os.environ['PYTHONUNBUFFERED'] = '1'
import logging
import subprocess
import atexit
import json
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)
LOCK_FILE = os.path.join(BASE_DIR, 'bot.lock')

from config import CAMINHO_LOG, GEMINI_API_KEY

logger = logging.getLogger('cuiabanews')


def _git_push_automatico():
    try:
        repo_dir = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
        agora = datetime.now().strftime('%d/%m/%Y %H:%M')

        subprocess.run(['git', 'add', 'js/news-data.js'], cwd=repo_dir, check=True, capture_output=True)
        subprocess.run(
            ['git', 'commit', '-m', f'Atualização automática CUIABÁ NEWS - {agora}'],
            cwd=repo_dir, check=True, capture_output=True
        )
        subprocess.run(['git', 'push'], cwd=repo_dir, check=True, capture_output=True)
        logger.info("Git push automático realizado com sucesso!")
    except subprocess.CalledProcessError as e:
        logger.warning(f"Git push falhou (pode não ter mudanças): {e}")
    except FileNotFoundError:
        logger.warning("Git não encontrado — push automático desativado")


def configurar_logging():
    os.makedirs(CAMINHO_LOG, exist_ok=True)
    _limpar_logs_antigos(CAMINHO_LOG, dias=7)

    log_file = os.path.join(CAMINHO_LOG, f'cuiabanews_{datetime.now().strftime("%Y%m%d")}.log')

    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(name)s] %(levelname)s: %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        handlers=[
            logging.FileHandler(log_file, encoding='utf-8'),
            logging.StreamHandler()
        ]
    )


def _limpar_logs_antigos(pasta, dias=7):
    import glob
    limite = datetime.now().timestamp() - (dias * 86400)
    for arq in glob.glob(os.path.join(pasta, '*.log')):
        try:
            if os.path.getmtime(arq) < limite:
                os.remove(arq)
        except OSError:
            pass


def executar_atualizacao():
    inicio = datetime.now()
    logger.info("=" * 60)
    logger.info("CUIABÁ NEWS — Iniciando atualização")
    logger.info(f"Data/hora: {inicio.strftime('%d/%m/%Y %H:%M:%S')}")
    logger.info("=" * 60)

    try:
        # === ETAPA 1: COLETA DE NOTÍCIAS ===
        logger.info("\n ETAPA 1: Coletando notícias...")

        from coletor_cuiaba import coletar_todas_cuiaba
        noticias_cuiaba = coletar_todas_cuiaba()
        logger.info(f"  Cuiabá: {len(noticias_cuiaba)} notícias")

        from coletor import coletar_todas_externas
        noticias_externas = coletar_todas_externas()
        logger.info(f"  Externas: {len(noticias_externas)} notícias")

        todas_noticias = noticias_cuiaba + noticias_externas
        logger.info(f"  TOTAL COLECIONADO: {len(todas_noticias)} notícias")

        if not todas_noticias:
            logger.error("Nenhuma notícia coletada! Abortando.")
            return False

        MIN_NOTICIAS = 10
        if len(todas_noticias) < MIN_NOTICIAS:
            logger.warning(f"Apenas {len(todas_noticias)} notícias coletadas (mínimo: {MIN_NOTICIAS}). "
                           "Mantendo news-data.js anterior para não empobrecer o site.")
            return False

        # === ETAPA 2: FILTRAGEM E CLASSIFICAÇÃO ===
        logger.info("\n ETAPA 2: Filtrando e classificando...")

        from filtro import selecionar_para_publicacao
        from config import QUANTIDADE_NOTICIAS
        noticias_selecionadas = selecionar_para_publicacao(todas_noticias, QUANTIDADE_NOTICIAS)
        logger.info(f"  Selecionadas: {len(noticias_selecionadas)} notícias")

        # === ETAPA 3: PROCESSAMENTO IA ===
        logger.info("\n ETAPA 3: Processando com IA (Gemini 2.5 Flash)...")

        from cache_noticias import separar_novas_e_cached, atualizar_cache
        novas, cached, cache_dict = separar_novas_e_cached(noticias_selecionadas)

        if GEMINI_API_KEY:
            from processador_ia import processar_lote, gerar_breaking_news, gerar_trending_topics

            if novas:
                novas = processar_lote(novas)
                atualizar_cache(novas, cache_dict)
            else:
                logger.info("  Todas as notícias já estavam no cache — IA não chamada!")

            noticias_selecionadas = cached + novas

            breaking_news = gerar_breaking_news(noticias_selecionadas)
            trending = gerar_trending_topics(noticias_selecionadas)
        else:
            logger.warning("  GEMINI_API_KEY não configurada! Usando textos originais.")
            for n in noticias_selecionadas:
                if not n.get('resumo'):
                    n['resumo'] = n.get('texto', n.get('titulo', ''))[:300]

            breaking_news = []
            prefixos = ['URGENTE:', 'AGORA:', 'ÚLTIMA HORA:']
            for i, n in enumerate(noticias_selecionadas[:3]):
                breaking_news.append(f"{prefixos[i]} {n.get('titulo', '')[:100]}")

            trending = ['#CuiabáNews', '#MatoGrosso', '#Brasil', '#Economia', '#Política', '#Esportes']

        # === ETAPA 4: IMAGENS ===
        logger.info("\n ETAPA 4: Processando imagens...")
        try:
            from buscador_imagens import processar_imagens
            noticias_selecionadas = processar_imagens(noticias_selecionadas)
        except Exception as e:
            logger.error(f"Erro na etapa de imagens (continuando): {e}")

        # === ETAPA 5: VÍDEOS ===
        logger.info("\n ETAPA 5: Coletando vídeos...")
        videos = []
        try:
            from coletor_videos import coletar_todos_videos
            videos = coletar_todos_videos()
            logger.info(f"  Vídeos coletados: {len(videos)}")
        except Exception as e:
            logger.error(f"Erro na etapa de vídeos (continuando): {e}")

        # === ETAPA 6: COTAÇÕES ===
        logger.info("\n ETAPA 6: Buscando cotações...")
        cotacoes_data = []
        try:
            from cotacoes import buscar_cotacoes
            cotacoes_data = buscar_cotacoes()
            logger.info(f"  Cotações: {len(cotacoes_data)}")
        except Exception as e:
            logger.error(f"Erro na etapa de cotações (continuando): {e}")

        # === ETAPA 7: CLIMA ===
        logger.info("\n ETAPA 7: Buscando clima...")
        clima_data = None
        try:
            from clima import buscar_clima
            clima_data = buscar_clima()
            logger.info(f"  Clima: {clima_data.get('temperatura')}°C, {clima_data.get('condicao')}")
        except Exception as e:
            logger.error(f"Erro na etapa de clima (continuando): {e}")

        # === ETAPA 8: GERAÇÃO DO ARQUIVO ===
        logger.info("\n ETAPA 8: Gerando news-data.js...")

        from gerador import gerar_news_data
        sucesso = gerar_news_data(
            noticias=noticias_selecionadas,
            videos=videos,
            cotacoes=cotacoes_data,
            breaking_news=breaking_news,
            clima=clima_data,
            trending=trending
        )

        # === SEM ETAPA 9 DE CHAT (diferente do Radar Nortão) ===

        # === RESULTADO FINAL ===
        fim = datetime.now()
        duracao = (fim - inicio).total_seconds()

        logger.info("\n" + "=" * 60)
        if sucesso:
            logger.info("ATUALIZAÇÃO CONCLUÍDA COM SUCESSO!")
            _git_push_automatico()
            _gravar_healthcheck(len(noticias_selecionadas), duracao)
        else:
            logger.error("ATUALIZAÇÃO FALHOU!")

        logger.info(f"Duração: {duracao:.1f} segundos")
        logger.info(f"Notícias: {len(noticias_selecionadas)}")
        logger.info(f"Vídeos: {len(videos)}")
        logger.info(f"Cotações: {len(cotacoes_data)}")
        logger.info(f"Breaking News: {len(breaking_news)}")
        logger.info("=" * 60)

        return sucesso

    except Exception as e:
        logger.error(f"ERRO CRÍTICO na atualização: {e}", exc_info=True)
        return False


def _gravar_healthcheck(qtd_noticias, duracao):
    hc_path = os.path.join(BASE_DIR, 'healthcheck.json')
    try:
        dados = {
            'ultima_execucao': datetime.now().isoformat(),
            'noticias': qtd_noticias,
            'duracao_s': round(duracao, 1),
            'status': 'ok'
        }
        with open(hc_path, 'w', encoding='utf-8') as f:
            json.dump(dados, f, ensure_ascii=False)
    except Exception:
        pass


def _adquirir_lock():
    if os.path.exists(LOCK_FILE):
        try:
            with open(LOCK_FILE, 'r') as f:
                pid = int(f.read().strip())
            import psutil
            if psutil.pid_exists(pid):
                return False
        except Exception:
            pass
    with open(LOCK_FILE, 'w') as f:
        f.write(str(os.getpid()))
    return True


def _liberar_lock():
    if os.path.exists(LOCK_FILE):
        try:
            os.remove(LOCK_FILE)
        except OSError:
            pass


if __name__ == '__main__':
    configurar_logging()

    if not _adquirir_lock():
        logger.error('Outra instância já está rodando. Abortando.')
        sys.exit(1)

    atexit.register(_liberar_lock)

    if '--teste' in sys.argv:
        logger.info("Modo de teste - executando com dados limitados")

    sucesso = executar_atualizacao()
    _liberar_lock()
    sys.exit(0 if sucesso else 1)
