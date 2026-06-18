"""
CUIABÁ NEWS — Configuração Central do Backend
"""

import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

# === CHAVES DE API ===
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', '')
NEWSAPI_KEY = os.getenv('NEWSAPI_KEY', '')
PEXELS_API_KEY = os.getenv('PEXELS_API_KEY', '')
OPENWEATHERMAP_KEY = os.getenv('OPENWEATHERMAP_KEY', '')

# === MODELO IA ===
GEMINI_MODEL = 'gemini-2.5-flash'

# === FONTES LOCAIS (PRIORIDADE) ===
FONTES_CUIABA = {
    'prefeitura': {
        'nome': 'Prefeitura de Cuiabá',
        'url_lista': 'https://www.cuiaba.mt.gov.br/noticias',
        'url_base': 'https://www.cuiaba.mt.gov.br',
        'prioridade': 100
    },
    'camara': {
        'nome': 'Câmara Municipal de Cuiabá',
        'url_lista': 'https://www.camaracuiaba.mt.gov.br/noticias',
        'url_base': 'https://www.camaracuiaba.mt.gov.br',
        'prioridade': 100
    },
    'almt': {
        'nome': 'Assembleia Legislativa MT',
        'url_lista': 'https://www.al.mt.gov.br/noticias',
        'url_base': 'https://www.al.mt.gov.br',
        'prioridade': 90
    }
}

# === FONTES RSS (NACIONAIS E REGIONAIS) ===
FONTES_RSS = [
    {
        'nome': 'G1',
        'url': 'https://g1.globo.com/rss/g1/',
        'prioridade': 60
    },
    {
        'nome': 'G1 Mato Grosso',
        'url': 'https://g1.globo.com/rss/g1/mt/mato-grosso/',
        'prioridade': 80
    },
    {
        'nome': 'UOL Notícias',
        'url': 'https://rss.uol.com.br/feed/noticias.xml',
        'prioridade': 50
    },
    {
        'nome': 'Folha de S.Paulo',
        'url': 'https://feeds.folha.uol.com.br/emcimadahora/rss091.xml',
        'prioridade': 50
    },
    {
        'nome': 'Jornal Nacional',
        'url': 'https://g1.globo.com/rss/g1/jornal-nacional/',
        'prioridade': 70
    },
    {
        'nome': 'CNN Brasil',
        'url': 'https://www.cnnbrasil.com.br/feed/',
        'prioridade': 50
    },
    {
        'nome': 'CNN International',
        'url': 'http://rss.cnn.com/rss/edition_world.rss',
        'prioridade': 60
    },
    {
        'nome': 'Fox News',
        'url': 'https://moxie.foxnews.com/google-publisher/world.xml',
        'prioridade': 55
    },
    {
        'nome': 'New York Times World',
        'url': 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
        'prioridade': 60
    },
    {
        'nome': 'G1 Mundo',
        'url': 'https://g1.globo.com/rss/g1/mundo/',
        'prioridade': 65
    },
    {
        'nome': 'O Antagonista',
        'url': 'https://oantagonista.com.br/feed/',
        'prioridade': 60
    },
    {
        'nome': 'Bloomberg',
        'url': 'https://feeds.bloomberg.com/markets/news.rss',
        'prioridade': 55
    },
    {
        'nome': 'GE (Globo Esporte)',
        'url': 'https://ge.globo.com/rss/ge/',
        'prioridade': 70
    },
    {
        'nome': 'Só Notícias Esportes',
        'url': 'https://www.sonoticias.com.br/feed/',
        'prioridade': 85
    },
    {
        'nome': 'CenárioMT Esportes',
        'url': 'https://www.cenariomt.com.br/esportes/feed/',
        'prioridade': 75
    },
    {
        'nome': 'MT Econômico',
        'url': 'https://matogrossoeconomico.com.br/feed/',
        'prioridade': 85
    },
    {
        'nome': 'AgFeed',
        'url': 'https://agfeed.com.br/feed/',
        'prioridade': 70
    },
    {
        'nome': 'Agência Brasil Economia',
        'url': 'https://agenciabrasil.ebc.com.br/rss/economia/feed.xml',
        'prioridade': 65
    },
    {
        'nome': 'Valor Econômico',
        'url': 'https://pox.globo.com/rss/valor/',
        'prioridade': 65
    },
    {
        'nome': 'Brazil Economy',
        'url': 'https://brazileconomy.com.br/feed/',
        'prioridade': 55
    }
]

# === NEWSAPI ===
NEWSAPI_QUERIES = [
    'Cuiabá MT Mato Grosso',
    'Brasil política governo Lula Brasília congresso',
    'economia agronegócio soja milho Petrobras bolsa Ibovespa',
    'esportes futebol Brasileirão Cuiabá Série A',
    'guerra conflito internacional Trump EUA Rússia Ucrânia',
    'inflação Selic dólar câmbio cesta básica combustível',
    'evento festival feira cultura inauguração',
    'Copa do Mundo 2026 FIFA China Europa OTAN',
]

# === CATEGORIAS ===
CATEGORIAS = {
    'politica': {
        'nome': 'Política',
        'cor': '#e63946',
        'icone': 'account_balance',
        'gradient': 'linear-gradient(135deg, #e63946, #c0392b)',
        'palavras_chave': [
            'câmara', 'vereador', 'prefeito', 'governador', 'presidente', 'senador',
            'deputado', 'eleição', 'votação', 'projeto de lei', 'PL', 'legislativo',
            'executivo', 'sessão', 'plenário', 'política', 'governo', 'STF', 'congresso',
            'ministro', 'secretário', 'decreto', 'medida provisória', 'reforma',
            'orçamento', 'CPI', 'tribunal', 'justiça', 'Alckmin', 'Lula', 'Bolsonaro',
            'impeachment', 'parlamento', 'senado', 'assembleia', 'constituição',
            'ALMT', 'assembleia legislativa'
        ]
    },
    'cidade': {
        'nome': 'Cidade',
        'cor': '#22c55e',
        'icone': 'location_city',
        'gradient': 'linear-gradient(135deg, #22c55e, #16a34a)',
        'palavras_chave': [
            'Cuiabá', 'Várzea Grande', 'município', 'bairro', 'obra', 'infraestrutura',
            'trânsito', 'saneamento', 'iluminação', 'escola', 'saúde', 'hospital', 'UPA',
            'transporte', 'asfalto', 'pavimentação', 'rotatória', 'semáforo',
            'parque', 'praça', 'segurança', 'policial', 'bombeiro', 'defesa civil',
            'educação', 'universidade', 'UFMT', 'IFMT',
            'preso', 'presa', 'detido', 'detida', 'suspeito', 'suspeita',
            'homicídio', 'feminicídio', 'estupro', 'assassinato', 'crime',
            'acidente', 'colisão', 'roubo', 'furto', 'assalto', 'delegacia',
            'ocorrência', 'incêndio', 'desabamento', 'PM', 'SAMU',
            'atropelamento', 'embriaguez', 'alcoolizado', 'moradores',
            'violência doméstica', 'agressão', 'latrocínio', 'fuga', 'tornozeleira',
            'Chapada dos Guimarães', 'Santo Antônio do Leverger', 'Pantanal'
        ]
    },
    'eventos': {
        'nome': 'Eventos',
        'cor': '#f59e0b',
        'icone': 'event',
        'gradient': 'linear-gradient(135deg, #f59e0b, #d97706)',
        'palavras_chave': [
            'festival', 'evento', 'show', 'feira', 'exposição', 'inauguração',
            'abertura', 'mostra', 'cultural', 'teatro', 'cinema', 'musical',
            'expo', 'leilão', 'encontro', 'seminário', 'congresso', 'workshop',
            'palestra', 'carnaval', 'festa', 'celebração', 'comemoração'
        ]
    },
    'brasil': {
        'nome': 'Brasil',
        'cor': '#3b82f6',
        'icone': 'flag',
        'gradient': 'linear-gradient(135deg, #3b82f6, #2563eb)',
        'palavras_chave': [
            'Brasil', 'federal', 'Brasília', 'nacional', 'país', 'república',
            'São Paulo', 'Rio de Janeiro', 'Amazônia', 'nordeste', 'sul',
            'sudeste'
        ]
    },
    'esportes': {
        'nome': 'Esportes',
        'cor': '#06b6d4',
        'icone': 'sports_soccer',
        'gradient': 'linear-gradient(135deg, #06b6d4, #0891b2)',
        'palavras_chave': [
            'esporte', 'futebol', 'vôlei', 'basquete', 'natação', 'atletismo',
            'ciclismo', 'campeonato', 'torneio', 'competição', 'atleta', 'jogador',
            'técnico de futebol', 'gol', 'partida', 'time', 'equipe', 'seleção',
            'olimpíada', 'copa do mundo', 'liga', 'pódio', 'medalha',
            'Cuiabá EC', 'Cuiabá Esporte', 'Mixto', 'Luverdense', 'Operário VG',
            'Série A', 'Série B', 'Brasileirão', 'Libertadores', 'Copa do Brasil',
            'MMA', 'UFC', 'artes marciais', 'corrida', 'maratona',
            'placar', 'escalação', 'transferência', 'contratação',
            'futsal', 'rodada', 'artilheiro', 'classificação', 'rebaixamento',
            'Champions League', 'Premier League', 'La Liga', 'Ancelotti',
            'goleiro', 'zagueiro', 'atacante', 'meia', 'lateral',
            'estádio', 'arena', 'Arena Pantanal', 'torcida', 'torcedor',
            'Copa América', 'Sul-Americana', 'Supercopa'
        ]
    },
    'economia': {
        'nome': 'Economia',
        'cor': '#a855f7',
        'icone': 'trending_up',
        'gradient': 'linear-gradient(135deg, #a855f7, #7c3aed)',
        'palavras_chave': [
            'economia', 'mercado', 'dólar', 'Selic', 'inflação', 'PIB',
            'exportação', 'importação', 'agronegócio', 'soja', 'milho',
            'boi gordo', 'safra', 'produtividade', 'investimento', 'emprego',
            'desemprego', 'indústria', 'comércio', 'IBGE', 'banco central',
            'juros', 'crédito', 'financiamento', 'cooperativa', 'bolsa de valores',
            'Petrobras', 'Vale', 'Itaú', 'Bradesco', 'ações', 'B3',
            'commodities', 'agro', 'pecuária', 'arroba', 'câmbio',
            'varejo', 'atacado', 'recessão', 'crescimento econômico', 'fiscal',
            'dívida pública', 'tesouro', 'CDB', 'poupança', 'IPCA', 'fundo',
            'cesta básica', 'preço', 'diesel', 'gasolina', 'combustível',
            'custo de vida', 'alimento', 'ANP', 'Procon', 'abastecimento',
            'imposto', 'tributo', 'ICMS', 'Ibovespa', 'cotação',
            'fertilizante', 'colheita', 'plantio', 'hectare', 'tonelada'
        ]
    },
    'internacional': {
        'nome': 'Internacional',
        'cor': '#ef4444',
        'icone': 'public',
        'gradient': 'linear-gradient(135deg, #ef4444, #b91c1c)',
        'palavras_chave': [
            'EUA', 'Estados Unidos', 'Trump', 'Biden', 'Europa', 'China',
            'Rússia', 'Ucrânia', 'guerra', 'OTAN', 'ONU', 'mundial',
            'global', 'internacional', 'exterior', 'diplomacia', 'Oriente Médio',
            'Irã', 'Israel', 'Gaza', 'Palestina', 'África', 'Ásia',
            'Washington', 'Moscou', 'Pequim', 'Londres', 'Paris',
            'geopolítica', 'sanções', 'tratado', 'embaixada',
            'conflito', 'ataque', 'míssil', 'aliança', 'fronteira',
            'imigrante', 'refugiado', 'deportação', 'visto',
            'Iraque', 'Síria', 'Coreia do Norte', 'Japão', 'Índia',
            'União Europeia', 'Brexit', 'BRICS', 'G7', 'G20',
            'Pentágono', 'Casa Branca', 'Kremlin', 'terrorismo',
            'Cuba', 'Venezuela', 'Argentina', 'México', 'Colômbia',
            'apagão', 'bloqueio', 'embargo', 'cúpula'
        ]
    }
}

# === VÍDEOS — CANAIS YOUTUBE ===
CANAIS_YOUTUBE = [
    {'nome': 'CNN Brasil', 'channel_id': 'UCgthdFksl15kCjVaA_VqBcA', 'url': 'https://www.youtube.com/@CNNbrasil/videos', 'prioridade': 80},
    {'nome': 'Jornal da Band', 'channel_id': 'UCa2JAFBkFBgpMJqmysMhEYg', 'url': 'https://www.youtube.com/@bandnewstv/videos', 'prioridade': 70},
    {'nome': 'SBT News', 'channel_id': 'UClG5ReyMgxBJsIGP7lkPaQg', 'url': 'https://www.youtube.com/@sbtnews/videos', 'prioridade': 70},
    {'nome': 'Record News', 'channel_id': 'UCuME1Yq1Cjl1TcOft61HXgQ', 'url': 'https://www.youtube.com/@RecordNews/videos', 'prioridade': 60},
    {'nome': 'Jovem Pan News', 'channel_id': 'UCGhSrzMOQKh_JRDQSA7j2Zw', 'url': 'https://www.youtube.com/@JovemPanNews/videos', 'prioridade': 60},
    {'nome': 'UOL', 'channel_id': 'UC46exri-jrKXdW7BZpNTGig', 'url': 'https://www.youtube.com/@UOL/videos', 'prioridade': 50},
]

# === PROMPT DA IA PARA REESCREVER NOTÍCIAS ===
PROMPT_REESCRITA = """Você é um jornalista profissional do portal CUIABÁ NEWS, de Cuiabá/MT.
Reescreva a notícia abaixo de forma jornalística, clara e objetiva.

Regras:
- Crie um TÍTULO chamativo, direto e informativo (máx 100 caracteres)
- Crie um RESUMO rico e completo (máx 300 caracteres) que responda: O QUE aconteceu, QUEM está envolvido, ONDE, QUANDO e QUAL o impacto/consequência
- Inclua dados concretos: números, valores, nomes, datas, porcentagens — tudo que estiver no texto original
- Use linguagem formal mas acessível, como um portal de notícias profissional
- Mantenha os fatos e dados originais — NÃO invente informações
- Se a notícia for de Cuiabá/MT, dê destaque à cidade
- NÃO copie o texto original, reescreva com suas palavras
- SOMENTE rejeite se o texto for claramente NÃO-notícia: descrição institucional, página "sobre nós", placar ao vivo sem contexto, galeria de fotos sem texto, ou quiz/enquete. Notícias sobre política, esportes, economia, ciência, cultura, Oscar, eventos etc. são VÁLIDAS e devem ser reescritas normalmente. Na dúvida, REESCREVA em vez de rejeitar.
- Retorne {{"rejeitar": true}} APENAS nos casos acima

Responda SOMENTE em JSON:
{{
    "titulo": "...",
    "resumo": "..."
}}

Ou, se NÃO for notícia:
{{
    "rejeitar": true
}}

Notícia original:
TÍTULO: {titulo}
TEXTO: {texto}
"""

PROMPT_BREAKING = """Você é o editor-chefe do portal CUIABÁ NEWS.
Com base nas notícias mais recentes, crie 3 chamadas URGENTES curtas (máx 120 caracteres cada) para a barra de breaking news.
Use o formato: URGENTE: ... • AGORA: ... • ÚLTIMA HORA: ...

Responda SOMENTE em JSON:
{{
    "breaking": ["...", "...", "..."]
}}

Notícias recentes:
{noticias}
"""

PROMPT_TRENDING = """Você é o editor de redes sociais do portal CUIABÁ NEWS.
Com base nas notícias mais recentes, crie 6 trending topics no formato hashtag.
Devem ser relevantes, curtos e chamativos.

Responda SOMENTE em JSON:
{{
    "trending": ["#Topic1", "#Topic2", "#Topic3", "#Topic4", "#Topic5", "#Topic6"]
}}

Notícias recentes:
{noticias}
"""

# === CONFIGURAÇÃO GERAL ===
QUANTIDADE_NOTICIAS = 140
QUANTIDADE_VIDEOS = 6
QUANTIDADE_BREAKING = 3

# === LOCALIZAÇÃO ===
CIDADE = 'Cuiabá'
ESTADO = 'MT'
LATITUDE = -15.6014
LONGITUDE = -56.0979

# === CAMINHOS ===
CAMINHO_JS = os.path.join(os.path.dirname(__file__), '..', 'js', 'news-data.js')
CAMINHO_LOG = os.path.join(os.path.dirname(__file__), 'logs')

# === HORÁRIOS DE ATUALIZAÇÃO ===
HORARIOS_ATUALIZACAO = ['07:00']
DIAS_ATUALIZACAO = ['monday', 'thursday']
