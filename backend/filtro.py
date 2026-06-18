"""
CUIABÁ NEWS — Filtro e Classificador de Notícias
Remove duplicatas, classifica por categoria, calcula relevância
Cuiabá tem PRIORIDADE mas notícias de todo Brasil são incluídas
"""

import re
from datetime import datetime
import logging
from difflib import SequenceMatcher

logger = logging.getLogger('cuiabanews.filtro')

FONTE_CATEGORIA_FORCADA = {
    'ge (globo esporte)': 'esportes',
    'cnn international': 'internacional',
    'fox news': 'internacional',
    'new york times world': 'internacional',
    'g1 mundo': 'internacional',
    'agfeed': 'economia',
    'valor econômico': 'economia',
    'bloomberg': 'economia',
    'brazil economy': 'economia',
    'agência brasil economia': 'economia',
    'mt econômico': 'economia',
}

FONTE_CATEGORIA_BOOST = {
    'jornal nacional': 'brasil',
    'g1 mato grosso': 'cidade',
    'cnn brasil': 'brasil',
    'o antagonista': 'brasil',
    'g1': 'brasil',
    'uol notícias': 'brasil',
    'folha de s.paulo': 'brasil',
    'cenáriomt esportes': 'esportes',
    'só notícias esportes': 'cidade',
}

ANTI_ESPORTES = [
    'preso', 'presa', 'detido', 'detida', 'suspeito', 'suspeita',
    'feminicídio', 'homicídio', 'estupro', 'assassin', 'assassinato',
    'tráfico', 'droga', 'colisão', 'acidente fatal', 'morrem', 'morre',
    'incêndio', 'desabamento', 'roubo', 'furto', 'assalto', 'delegacia',
    'policial', 'polícia', 'crime', 'violência doméstica', 'agressão',
    'latrocínio', 'sequestro', 'cesta básica', 'diesel', 'gasolina',
    'preço', 'inflação', 'selic', 'câmbio', 'PIB', 'dólar',
    'senador', 'deputado', 'vereador', 'ministro', 'governador',
]


def filtrar_e_classificar(noticias):
    logger.info(f"Filtrando {len(noticias)} notícias...")

    validas = [n for n in noticias if _noticia_valida(n)]
    logger.info(f"  Válidas: {len(validas)}")

    unicas = _remover_duplicatas(validas)
    logger.info(f"  Sem duplicatas: {len(unicas)}")

    for n in unicas:
        if not n.get('categoria'):
            n['categoria'] = _classificar_categoria(n)

    for n in unicas:
        n['score'] = _calcular_score(n)

    unicas.sort(key=lambda n: n['score'], reverse=True)

    logger.info(f"Filtragem concluída: {len(unicas)} notícias")
    return unicas


def _noticia_valida(noticia):
    titulo = noticia.get('titulo', '').strip()
    if not titulo or len(titulo) < 15:
        return False

    titulos_invalidos = [
        'notícias', 'página inicial', 'home', 'erro', '404',
        'acesso negado', 'login', 'cadastre-se'
    ]
    if titulo.lower() in titulos_invalidos:
        return False

    if _conteudo_institucional(noticia):
        logger.info(f"  Removida (institucional): {titulo[:60]}")
        return False

    if noticia.get('sem_data_real'):
        logger.info(f"  Removida (sem data real): {titulo[:60]}")
        return False

    from datetime import timedelta
    try:
        data_str = noticia.get('data', '')
        if data_str:
            data_str_clean = data_str.replace('Z', '+00:00').split('+')[0].split('.')[0]
            data = datetime.fromisoformat(data_str_clean)
            limite = datetime.now() - timedelta(days=7)
            if data < limite:
                logger.info(f"  Removida (>7 dias): {titulo[:60]}")
                return False
    except Exception:
        pass

    if _parece_ingles(titulo):
        noticia['idioma'] = 'en'

    return True


_FRASES_INSTITUCIONAIS = [
    'é o órgão', 'é o poder', 'é a instituição', 'é responsável pela',
    'tem como missão', 'tem como objetivo', 'foi criado em', 'foi fundad',
    'é composta por', 'é composto por', 'é formada por', 'é formado por',
    'compete ao', 'compete à', 'cabe ao', 'cabe à',
    'são atribuições', 'suas atribuições', 'tem a função de',
    'é o centro do poder', 'poder legislativo local',
    'representação popular', 'criação de leis e fiscalização',
    'órgão legislativo fundamental', 'casa do povo',
    'conheça a câmara', 'conheça a prefeitura', 'quem somos',
    'nossa história', 'sobre a câmara', 'sobre a prefeitura',
    'estrutura organizacional', 'organograma',
]


def _conteudo_institucional(noticia):
    titulo = noticia.get('titulo', '').lower()
    texto = noticia.get('texto', '').lower()
    conteudo = f"{titulo} {texto}"

    matches = sum(1 for frase in _FRASES_INSTITUCIONAIS if frase in conteudo)
    if matches >= 2:
        return True

    frases_titulo_forte = [
        'é o órgão', 'é o poder', 'centro do poder', 'poder legislativo local',
        'conheça a câmara', 'conheça a prefeitura', 'quem somos', 'nossa história',
        'sobre a câmara', 'sobre a prefeitura', 'estrutura organizacional',
    ]
    if any(f in titulo for f in frases_titulo_forte):
        return True

    return False


_PALAVRAS_INGLES = {
    'the', 'and', 'with', 'for', 'from', 'that', 'this', 'have', 'has',
    'are', 'was', 'were', 'will', 'been', 'their', 'which', 'would', 'could',
    'should', 'about', 'after', 'before', 'between', 'says', 'said', 'into',
}


def _parece_ingles(texto):
    palavras = re.findall(r'[a-záàâãéêíóôõúç]+', texto.lower())
    if len(palavras) < 5:
        return False
    qtd_ingles = sum(1 for p in palavras if p in _PALAVRAS_INGLES)
    return qtd_ingles >= 4 and qtd_ingles / len(palavras) >= 0.4


def _remover_duplicatas(noticias):
    vistos = {}
    sem_exatas = []
    for n in noticias:
        chave = re.sub(r'[^a-záàâãéêíóôõúç0-9]', '', n['titulo'].lower())
        if chave not in vistos:
            vistos[chave] = True
            sem_exatas.append(n)

    unicas = []
    prefixos = {}

    for n in sem_exatas:
        titulo = n['titulo'].lower().strip()
        prefixo = re.sub(r'[^a-záàâãéêíóôõúç]', '', titulo[:30])
        is_duplicata = False

        for titulo_visto in prefixos.get(prefixo, []):
            if SequenceMatcher(None, titulo, titulo_visto).ratio() > 0.7:
                is_duplicata = True
                break

        if not is_duplicata:
            unicas.append(n)
            if prefixo not in prefixos:
                prefixos[prefixo] = []
            prefixos[prefixo].append(titulo)

    return unicas


def _match_palavra(palavra, texto):
    try:
        return bool(re.search(r'\b' + re.escape(palavra) + r'\b', texto, re.IGNORECASE))
    except re.error:
        return palavra.lower() in texto.lower()


def _classificar_categoria(noticia):
    from config import CATEGORIAS

    titulo = noticia.get('titulo', '')
    texto = noticia.get('texto', '')
    fonte = noticia.get('fonte', '').lower()
    conteudo = f"{titulo} {texto}"

    fonte_forcada = FONTE_CATEGORIA_FORCADA.get(fonte, None)
    if fonte_forcada:
        return fonte_forcada

    scores = {}
    for cat_id, cat_info in CATEGORIAS.items():
        score = 0
        for palavra in cat_info['palavras_chave']:
            if _match_palavra(palavra, titulo):
                score += 3
            if _match_palavra(palavra, conteudo):
                score += 1
        scores[cat_id] = score

    fonte_boost = FONTE_CATEGORIA_BOOST.get(fonte, None)
    if fonte_boost and fonte_boost in scores:
        scores[fonte_boost] += 3

    titulo_lower = titulo.lower()
    for anti in ANTI_ESPORTES:
        if anti in titulo_lower:
            scores['esportes'] = 0
            break

    crime_words = ['preso', 'presa', 'detido', 'detida', 'delegacia', 'polícia', 'policial',
                   'homicídio', 'feminicídio', 'crime', 'droga', 'tráfico', 'roubo', 'furto',
                   'assassinato', 'estupro', 'apreendido', 'apreende', 'apreensão',
                   'acidente', 'colisão', 'morrem', 'morre', 'fatal', 'tragédia', 'morte',
                   'prisão', 'operação policial', 'mandado', 'flagrante', 'denúncia',
                   'importunação', 'abuso', 'ameaça', 'invasão', 'invad', 'desaparecido',
                   'suspeito', 'suspeita', 'incêndio', 'desabamento', 'socorro',
                   'sequestro', 'latrocínio', 'acidente fatal', 'desacordado']
    if any(w in titulo_lower for w in crime_words):
        scores['esportes'] = 0
        scores['economia'] = max(0, scores.get('economia', 0) - 3)
        scores['internacional'] = max(0, scores.get('internacional', 0) - 3)
        mt_words = ['cuiabá', 'várzea grande', 'mt', 'mato grosso', 'rondonópolis',
                    'sinop', 'lucas', 'sorriso', 'tangará', 'cáceres', 'chapada',
                    'barra do garças', 'primavera do leste', 'alta floresta',
                    'santo antônio do leverger', 'pantanal', 'nortão', 'nova mutum']
        if any(w in titulo_lower for w in mt_words):
            scores['cidade'] += 8
        else:
            scores['brasil'] += 3

    brasil_markers = ['brasil', 'brasília', 'são paulo', 'rio de janeiro', 'mato grosso', 'cuiabá']
    titulo_low = titulo.lower()
    if any(m in titulo_low for m in brasil_markers):
        scores['internacional'] = max(0, scores.get('internacional', 0) - 3)

    if scores:
        melhor = max(scores, key=scores.get)
        if scores[melhor] > 0:
            return melhor

    return 'brasil'


def _calcular_score(noticia):
    score = 0

    score += noticia.get('prioridade', 30)

    try:
        data_str = noticia.get('data', '')
        if data_str:
            data_str = data_str.replace('Z', '+00:00')
            data = datetime.fromisoformat(data_str)
            if data.tzinfo is not None:
                from datetime import timezone
                agora = datetime.now(timezone.utc)
            else:
                agora = datetime.now()
            horas_atras = (agora - data).total_seconds() / 3600
            if horas_atras < 1:
                score += 50
            elif horas_atras < 3:
                score += 40
            elif horas_atras < 6:
                score += 30
            elif horas_atras < 12:
                score += 20
            elif horas_atras < 24:
                score += 10
    except Exception:
        pass

    conteudo = f"{noticia.get('titulo', '')} {noticia.get('texto', '')}".lower()
    if 'cuiabá' in conteudo:
        score += 30
    if 'mato grosso' in conteudo or 'mato-grossense' in conteudo:
        score += 15

    if noticia.get('imagem'):
        score += 10

    if len(noticia.get('texto', '')) > 100:
        score += 10

    titulo_lower = noticia.get('titulo', '').lower()
    impacto = ['urgente', 'breaking', 'exclusivo', 'recorde', 'histórico', 'inédito', 'aprovado', 'anuncia']
    if any(p in titulo_lower for p in impacto):
        score += 15

    noticia['destaque'] = False

    return score


def selecionar_para_publicacao(noticias, quantidade=56):
    from config import CATEGORIAS, QUANTIDADE_NOTICIAS

    quantidade = quantidade or QUANTIDADE_NOTICIAS
    min_por_categoria = max(5, quantidade // len(CATEGORIAS))

    filtradas = filtrar_e_classificar(noticias)

    por_categoria = {}
    for n in filtradas:
        cat = n['categoria']
        if cat not in por_categoria:
            por_categoria[cat] = []
        por_categoria[cat].append(n)

    selecionadas = []

    for cat_id in CATEGORIAS:
        cat_noticias = por_categoria.get(cat_id, [])
        selecionadas.extend(cat_noticias[:min_por_categoria])

    ids_ja_selecionados = {id(n) for n in selecionadas}
    restantes = [n for n in filtradas if id(n) not in ids_ja_selecionados]
    faltam = quantidade - len(selecionadas)
    if faltam > 0:
        selecionadas.extend(restantes[:faltam])

    selecionadas.sort(key=lambda n: n['score'], reverse=True)

    for i, n in enumerate(selecionadas[:4]):
        n['destaque'] = True

    logger.info(f"Selecionadas {len(selecionadas)} notícias para publicação")

    for cat_id in CATEGORIAS:
        qtd = sum(1 for n in selecionadas if n['categoria'] == cat_id)
        logger.info(f"  {cat_id}: {qtd} notícias")

    return selecionadas
