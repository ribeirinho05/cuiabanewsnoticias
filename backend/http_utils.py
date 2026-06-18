"""
CUIABÁ NEWS — Utilitário de requisições HTTP com retry
"""

import time
import logging
import requests

logger = logging.getLogger('cuiabanews.http')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
}


def requisicao_com_retry(url, metodo='GET', tentativas=3, timeout=15, **kwargs):
    kwargs.setdefault('headers', HEADERS)
    kwargs.setdefault('timeout', timeout)

    for tentativa in range(1, tentativas + 1):
        try:
            if metodo.upper() == 'HEAD':
                resp = requests.head(url, **kwargs)
            else:
                resp = requests.get(url, **kwargs)

            if resp.status_code == 429:
                espera = min(2 ** tentativa * 5, 60)
                logger.warning(f"Rate limit (429) em {url}, aguardando {espera}s...")
                time.sleep(espera)
                continue

            if resp.status_code >= 500 and tentativa < tentativas:
                espera = 2 ** tentativa
                logger.warning(f"Erro {resp.status_code} em {url}, tentativa {tentativa}/{tentativas}, retry em {espera}s")
                time.sleep(espera)
                continue

            return resp

        except (requests.ConnectionError, requests.Timeout) as e:
            if tentativa < tentativas:
                espera = 2 ** tentativa
                logger.warning(f"Falha de conexão em {url}: {e}, retry em {espera}s ({tentativa}/{tentativas})")
                time.sleep(espera)
            else:
                logger.error(f"Falha permanente em {url} após {tentativas} tentativas: {e}")

        except requests.RequestException as e:
            logger.error(f"Erro na requisição {url}: {e}")
            return None

    return None
