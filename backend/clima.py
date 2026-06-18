"""
CUIABÁ NEWS — Clima em Tempo Real
Busca dados climáticos via OpenWeatherMap para Cuiabá-MT
"""

import requests
import logging
from http_utils import requisicao_com_retry

logger = logging.getLogger('cuiabanews.clima')

TRADUCAO_CONDICAO = {
    'clear sky': 'Céu Limpo',
    'few clouds': 'Poucas Nuvens',
    'scattered clouds': 'Nuvens Dispersas',
    'broken clouds': 'Nublado',
    'overcast clouds': 'Encoberto',
    'shower rain': 'Chuva Forte',
    'rain': 'Chuva',
    'light rain': 'Chuva Leve',
    'moderate rain': 'Chuva Moderada',
    'heavy intensity rain': 'Chuva Intensa',
    'thunderstorm': 'Tempestade',
    'thunderstorm with rain': 'Tempestade com Chuva',
    'thunderstorm with light rain': 'Tempestade Leve',
    'thunderstorm with heavy rain': 'Tempestade Forte',
    'snow': 'Neve',
    'mist': 'Névoa',
    'fog': 'Neblina',
    'haze': 'Bruma',
    'smoke': 'Fumaça',
    'dust': 'Poeira',
    'drizzle': 'Garoa',
    'light drizzle': 'Garoa Leve',
}

ICONE_CONDICAO = {
    'céu limpo': 'wb_sunny',
    'poucas nuvens': 'partly_cloudy_day',
    'nuvens dispersas': 'cloud',
    'nublado': 'cloud',
    'encoberto': 'cloud',
    'chuva forte': 'rainy',
    'chuva': 'rainy',
    'chuva leve': 'grain',
    'chuva moderada': 'rainy',
    'chuva intensa': 'thunderstorm',
    'tempestade': 'thunderstorm',
    'tempestade com chuva': 'thunderstorm',
    'tempestade leve': 'thunderstorm',
    'tempestade forte': 'thunderstorm',
    'neve': 'ac_unit',
    'névoa': 'foggy',
    'neblina': 'foggy',
    'bruma': 'foggy',
    'fumaça': 'foggy',
    'poeira': 'foggy',
    'garoa': 'grain',
    'garoa leve': 'grain',
}


def buscar_clima():
    from config import OPENWEATHERMAP_KEY, CIDADE_COORDS

    lat = CIDADE_COORDS['lat']
    lon = CIDADE_COORDS['lon']

    if not OPENWEATHERMAP_KEY:
        logger.warning("OPENWEATHERMAP_KEY não configurada")
        return _clima_fallback()

    try:
        url = (
            f'https://api.openweathermap.org/data/2.5/weather'
            f'?lat={lat}&lon={lon}&units=metric&lang=pt_br&appid={OPENWEATHERMAP_KEY}'
        )

        resp = requisicao_com_retry(url, timeout=10)
        if not resp:
            return _clima_fallback()
        resp.raise_for_status()
        data = resp.json()

        temp = round(data.get('main', {}).get('temp', 34))
        temp_min = round(data.get('main', {}).get('temp_min', temp - 3))
        temp_max = round(data.get('main', {}).get('temp_max', temp + 3))
        umidade = data.get('main', {}).get('humidity', 60)

        descricao_en = data.get('weather', [{}])[0].get('description', 'clear sky')
        descricao_pt = data.get('weather', [{}])[0].get('description', '')

        if not descricao_pt or descricao_pt == descricao_en:
            descricao_pt = TRADUCAO_CONDICAO.get(descricao_en.lower(), descricao_en.title())

        descricao_pt = descricao_pt.title()
        icone = ICONE_CONDICAO.get(descricao_pt.lower(), 'wb_sunny')

        vento = data.get('wind', {}).get('speed', 0)
        vento_kmh = round(vento * 3.6, 1)

        clima = {
            'cidade': 'Cuiabá',
            'estado': 'MT',
            'temperatura': temp,
            'temp_min': temp_min,
            'temp_max': temp_max,
            'umidade': umidade,
            'condicao': descricao_pt,
            'icone': icone,
            'vento': vento_kmh,
        }

        logger.info(f"Clima Cuiabá: {temp}°C, {descricao_pt}, umidade {umidade}%")
        return clima

    except Exception as e:
        logger.error(f"Erro ao buscar clima: {e}")
        return _clima_fallback()


def _clima_fallback():
    logger.info("Usando clima fallback para Cuiabá (34°C)")
    return {
        'cidade': 'Cuiabá',
        'estado': 'MT',
        'temperatura': 34,
        'temp_min': 24,
        'temp_max': 37,
        'umidade': 55,
        'condicao': 'Parcialmente Nublado',
        'icone': 'partly_cloudy_day',
        'vento': 8.0,
    }
