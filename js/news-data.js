/* ============================================
   CUIABÁ NEWS — Base de Dados de Notícias v2.0
   Atualizado em: 17/06/2026 22:21
   ============================================ */

const CATEGORIAS = {
    politica: { nome: 'Política', cor: '#e63946', icone: 'account_balance', gradient: 'linear-gradient(135deg, #e63946, #c0392b)' },
    cidade: { nome: 'Cidade', cor: '#22c55e', icone: 'location_city', gradient: 'linear-gradient(135deg, #22c55e, #16a34a)' },
    eventos: { nome: 'Eventos', cor: '#f59e0b', icone: 'event', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    brasil: { nome: 'Brasil', cor: '#3b82f6', icone: 'flag', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
    esportes: { nome: 'Esportes', cor: '#06b6d4', icone: 'sports_soccer', gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
    economia: { nome: 'Economia', cor: '#a855f7', icone: 'trending_up', gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)' },
    internacional: { nome: 'Internacional', cor: '#ef4444', icone: 'public', gradient: 'linear-gradient(135deg, #ef4444, #b91c1c)' },
};

const noticias = [
    {
        id: 1, categoria: 'cidade',
        destaque: true,
        titulo: 'Justiça de Cuiabá condena rede de fast-food a indenizar atendente por assédio sexual',
        resumo: 'Uma rede de fast-food foi condenada pela 9ª Vara do Trabalho de Cuiabá a pagar R$ 20 mil por danos morais a uma atendente. A sentença resulta de assédio sexual praticado por um segurança da mesma loja em Mato Grosso. A empresa, responsável pelas franquias na América Latina, terá que indenizar a víti',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2024/03/04-forum-de-cuiaba-scaled.jpeg',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 2, categoria: 'cidade',
        destaque: true,
        titulo: 'Mirassol D\'Oeste (MT) é Pré-Selecionada para Receber R$ 32,5 Milhões em Melhorias Viárias',
        resumo: 'O Ministério das Cidades incluiu Mirassol D\'Oeste (MT), a 300 km de Cuiabá, na 43ª lista atualizada de propostas do Programa Avançar Cidades Mobilidade Urbana. A pré-seleção, divulgada recentemente, garante ao município o potencial acesso a até R$ 32,5 milhões para projetos de qualificação viária e',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2026/06/Mirassol-cidade-MT-junho-2026-assessoria.jpg',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 3, categoria: 'cidade',
        destaque: true,
        titulo: 'CGE multa Consórcio Rio Verde em R$ 489,6 mil por fraudes no Ganha Tempo de Cuiabá',
        resumo: 'A Controladoria-Geral do Estado de Mato Grosso (CGE-MT) multou o Consórcio Rio Verde em R$ 489,6 mil por irregularidades na gestão das unidades do Ganha Tempo, incluindo a de Cuiabá. A decisão, publicada nesta terça (16), revela fraudes entre 2019 e 2020, com registro de atendimentos fictícios e CPF',
        imagem: 'https://s2-g1.glbimg.com/T8OW223Z1LIAoE9t1rsQ8Tmqa54=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/C/z/2MMOKeQzORWP2J1XslYQ/ganha-tempo.jpg',
        autor: 'G1 Mato Grosso', tempo: 'agora'
    },
    {
        id: 4, categoria: 'cidade',
        destaque: true,
        titulo: 'Alerta Nacional: Metanol em Bebidas Causa 13 Intoxicações e Morte em Querência/MT',
        resumo: 'O Brasil registra 13 casos confirmados de intoxicação por metanol em bebidas e outros 22 estão sob investigação, com dados consolidados até 9 de junho. O Ministério da Saúde aponta que, em 2025, houve 76 casos e 25 óbitos no país. Recentemente, Guilherme Torres da Silva, 22, morreu em São Paulo, e u',
        imagem: 'https://s2-g1.glbimg.com/HmaMI_qw63lkpiTMQM2eBHM-LnU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/e/4/3kZVBRTnSq5s90CXTi9Q/1781566261494520.jpg',
        autor: 'G1 Mato Grosso', tempo: '2h atrás'
    },
    {
        id: 5, categoria: 'cidade',
        titulo: 'Cantinas escolares de MT: Nova regra proíbe ultraprocessados e exige cardápio inclusivo',
        resumo: 'A Secretaria de Estado de Educação (Seduc) de Mato Grosso, via Coordenadoria de Alimentação Escolar, publicou nesta segunda-feira (15) um novo guia para cantinas das escolas estaduais. A medida, que segue a Resolução CD/FNDE nº 4/2026 do PNAE, proíbe a venda de ultraprocessados como refrigerantes e',
        imagem: 'https://s2-g1.glbimg.com/AtFCIUCl8eN9rE-TQYbuaJZIZ6I=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/e/d/wTBCtVRtCmqjB0xijgdw/177687969199745.jpg',
        autor: 'G1 Mato Grosso', tempo: '2h atrás'
    },
    {
        id: 6, categoria: 'cidade',
        titulo: 'Cuiabá: Justiça ordena retorno de descontos de consignados para servidores municipais',
        resumo: 'A partir deste mês, servidores municipais de Cuiabá terão os descontos de empréstimos consignados retomados em suas folhas de pagamento. A medida, referente a contratos de cartão de crédito consignado e cartão de benefício vinculados ao Banco Taormina, cumpre uma determinação judicial. A Prefeitura',
        imagem: 'https://images.pexels.com/photos/12497049/pexels-photo-12497049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'G1 Mato Grosso', tempo: 'agora'
    },
    {
        id: 7, categoria: 'cidade',
        titulo: 'Cuiabá: Qualidade de Vida Redefine o Luxo no Mercado Imobiliário, Aponta Plaenge',
        resumo: 'O mercado imobiliário em Cuiabá e globalmente redefine o conceito de luxo, com consumidores priorizando qualidade de vida, bem-estar, iluminação natural e integração com áreas verdes sobre metragem. Impulsionada pela economia do wellness, que movimentará US$ 8,5 trilhões até 2027 segundo o Global We',
        imagem: 'https://s2-g1.glbimg.com/GvzgcqfOaOe3Daq8iz24Lv-mKrc=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/x/Y/JoAkhtTcSyBce1WboCAw/release-02-arbo.2-dentro-da-materia-tamanho-original.jpeg',
        autor: 'G1 Mato Grosso', tempo: '26 min atrás'
    },
    {
        id: 8, categoria: 'cidade',
        titulo: 'Sapezal: Sete Crianças Abandonadas Resgatadas em Casa Insalubre Estão Há 13 Dias Sob Guarda',
        resumo: 'Sete crianças, com idades entre 10 meses e 11 anos, foram resgatadas de abandono em Sapezal (473 km de Cuiabá) no dia 4 de junho, e seguem há 13 dias sob guarda do Conselho Tutelar. Os pais, um casal de 32 e 35 anos, foram presos em flagrante por abandono de incapaz, mas liberados. A residência esta',
        imagem: 'https://s2-g1.glbimg.com/np-_tkro4qHT8T_LsvrxnX71zTk=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/v/j/ku4z5aRv2l9RqKdccexg/copia-de-videos-g1-65-.jpg',
        autor: 'G1 Mato Grosso', tempo: '31 min atrás'
    },
    {
        id: 9, categoria: 'cidade',
        titulo: 'Tragédia em Cuiabá: Servidor da Sefaz de 72 anos morre atropelado na Av. do CPA',
        resumo: 'José Gilmário Oliveira, servidor da Secretaria de Estado de Fazenda (Sefaz-MT) de 72 anos, faleceu na manhã de sexta-feira (12) após ser atropelado por uma motocicleta na Avenida do CPA, em Cuiabá. Imagens de câmera de segurança, divulgadas nesta terça (17), confirmaram o acidente que tirou a vida d',
        imagem: 'https://s2-g1.glbimg.com/jDOlVJGXSms48y9II_VrDvJs17g=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/i/5/k3RTXrTU2aNjBBf8YE8g/jose-gilmario.png',
        autor: 'G1 Mato Grosso', tempo: '42 min atrás'
    },
    {
        id: 10, categoria: 'economia',
        titulo: 'Marco Histórico: Costa Marques Traz Primeiro Automóvel a Cuiabá em 1911',
        resumo: 'Em 1911, a capital mato-grossense, Cuiabá, testemunhou um avanço tecnológico sem precedentes com a introdução do primeiro automóvel no estado. O visionário Costa Marques foi o responsável por essa façanha, que não apenas marcou a chegada do veículo motorizado a Mato Grosso, mas também impulsionou um',
        imagem: 'https://matogrossoeconomico.com.br/wp-content/uploads/2025/10/ricardo-loub-artigo.jpg',
        autor: 'Artigo', tempo: '6h atrás'
    },
    {
        id: 11, categoria: 'cidade',
        titulo: 'IFMT Várzea Grande abre 17 vagas para cursos técnicos; inscrições até 28 de junho',
        resumo: 'O IFMT Campus Várzea Grande, na região metropolitana de Cuiabá, abriu processo seletivo para 17 vagas remanescentes em cursos técnicos integrados ao ensino médio. São 9 para Edificações e 8 para Logística. As inscrições vão de 17 a 28 de junho pelo site seletivo.ifmt.edu.br, com taxa de R$ 50 e sele',
        imagem: 'https://s2-g1.glbimg.com/KS9XiZypnaGEosub_OOFh6kwH1w=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/I/7/jAlfhKSfuYnxiuvaDdpg/ifmt.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 12, categoria: 'politica',
        titulo: 'Governo de MT nomeia 49 profissionais para reforçar saúde e social em presídios',
        resumo: 'O Governo de Mato Grosso nomeou 49 profissionais de nível superior, sendo 15 assistentes sociais, 4 enfermeiros e 30 psicólogos, para atuar no Sistema Penitenciário estadual. Vinculados à Secretaria de Estado de Justiça (Sejus), os novos servidores reforçarão os atendimentos sociais, psicológicos e',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2025/02/Cadeia-publica-Peixot-de-Azevedo-fevereiro-2025-assessoria.jpg',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 13, categoria: 'politica',
        titulo: 'TJMT derruba lei de Sinop que proibia concursos só para cadastro de reserva',
        resumo: 'O Tribunal de Justiça de Mato Grosso (TJMT) declarou inconstitucional a Lei nº 3.644/2026, de Sinop, que proibia concursos públicos exclusivamente para formação de cadastro reserva. A norma, aprovada pela Câmara e promulgada pelo então presidente Remídio Kuntz, foi invalidada após ação do Ministério',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2025/08/fachada-tjmt.jpg',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 14, categoria: 'cidade',
        titulo: 'TCE-MT Inicia Auditoria em Sorriso para Avaliar Atenção à Criança com Deficiência em MT',
        resumo: 'O Tribunal de Contas de Mato Grosso (TCE-MT) iniciou esta semana inspeções in loco da auditoria operacional para avaliar a Atenção à Criança com Deficiência e neurodivergentes no estado. A primeira visita ocorreu em Sorriso, integrando o trabalho demandado pelo presidente conselheiro Sérgio Ricardo,',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2026/06/15d967241c2379db0d3a9d2cc421de05.jpeg',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 15, categoria: 'cidade',
        titulo: 'TCE-MT de Cuiabá apura descarte irregular de livros didáticos em Mato Grosso',
        resumo: 'Nesta quarta-feira, o Tribunal de Contas de Mato Grosso (TCE-MT), com sede em Cuiabá, recebeu uma nova denúncia sobre a aquisição e descarte irregular de materiais didáticos. A vereadora Josi Koch, de Água Boa, procurou o conselheiro presidente Sérgio Ricardo para relatar o achado de grande quantida',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2022/02/Tribunal-de-Contas-de-Mato-Grosso-TCE-8-fevereiro-2022-assessoria.jpg',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 16, categoria: 'cidade',
        titulo: 'Legislação de MT põe 2,3 milhões de hectares de áreas úmidas sob risco, aponta estudo',
        resumo: 'Um estudo publicado na revista Environmental Research Letters alerta que recentes alterações na legislação de Mato Grosso podem expor até 2,3 milhões de hectares de áreas úmidas ao risco de degradação. A pesquisa indica que ecossistemas nas bacias do Araguaia e Guaporé podem se tornar suscetíveis à',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2026/06/image-558-6851f45e396102812ab9b0bb11d80c10.jpeg',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 17, categoria: 'cidade',
        titulo: 'Brasnorte: Homem é condenado a 14 anos por matar mulher que interveio em briga de casal',
        resumo: 'Lucas dos Santos Miranda foi condenado a 14 anos de reclusão, em regime fechado, pela morte de Ana Kelly Carvalho de Oliveira. O crime ocorreu em outubro de 2020, na Rua Mato Grosso, em Brasnorte (MT), a 400 km de Sinop. A vítima foi assassinada após intervir em uma briga de casal, conforme denúncia',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2020/06/Forúm-de-Brasnorte-junho-2020-reprodução.jpg',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 18, categoria: 'economia',
        titulo: 'MT Impulsiona: Porto de Itaqui Consolida Rota de Grãos para Ásia e Europa',
        resumo: 'Mato Grosso, o maior produtor de grãos do Brasil, está consolidando suas exportações de soja e milho para os mercados da Ásia e Europa através do Porto de Itaqui, no Maranhão, utilizando a rota logística do Arco Norte. Essa estratégia otimiza o transporte e encurta o caminho, aproveitando a logístic',
        imagem: 'https://matogrossoeconomico.com.br/wp-content/uploads/2026/06/PORTO-DE-ITAQUI-ASSESSORIA-DO-PORTO.jpg',
        autor: 'Redação MT Econômico', tempo: '1h atrás'
    },
    {
        id: 19, categoria: 'cidade',
        titulo: 'Cuiabá: UFMT abre 1.803 vagas de graduação; inscrições de 20 a 25 de junho',
        resumo: 'A Universidade Federal de Mato Grosso (UFMT) abriu inscrições, entre 20 e 25 de junho, para preencher 1.803 vagas remanescentes em cursos de graduação. O processo seletivo, destinado a candidatos que fizeram o Enem de 2016 a 2025, oferece oportunidades nos campi de Cuiabá, Araguaia, Sinop e Várzea G',
        imagem: 'https://s2-g1.glbimg.com/qAa6Vt90l4b4PUF4JKPkWzfk-hU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/W/p/HRe2meSXqqCNQKyb0u8Q/81e1c90729061556db0d08f7eab8b6017ecea051.jpg',
        autor: 'G1 Mato Grosso', tempo: '7h atrás'
    },
    {
        id: 20, categoria: 'cidade',
        titulo: 'Mulher morre em Querência após ingerir bebida adulterada com metanol; 2ª vítima em MT',
        resumo: 'Uma mulher de 37 anos faleceu em Querência (a 900 km de Cuiabá) após intoxicação severa por metanol, encontrado em bebida alcoólica adulterada. Ela buscou atendimento no Hospital Municipal em 6 de junho com sintomas graves, vindo a óbito. Esta é a segunda morte por metanol no município. A Politec co',
        imagem: 'https://s2-g1.glbimg.com/by5OH7xyzIsKKxTx1bhZjM_jal0=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/d/X/audl4VQPqTZivOHzBIrQ/istockphoto-1291354853-612x612.jpg',
        autor: 'G1 Mato Grosso', tempo: '7h atrás'
    },
    {
        id: 21, categoria: 'cidade',
        titulo: 'Manicure Michelly Ferraz denuncia assédio de ciclista em Rondonópolis',
        resumo: 'A manicure Michelly Karina Ferraz denunciou ter sido vítima de importunação sexual na Avenida dos Estudantes, em Rondonópolis (a 212 km de Cuiabá), nesta terça-feira (16), por volta das 5h30. Um ciclista se aproximou e a assediou, ação flagrada por câmeras de segurança. O episódio, que deixou Michel',
        imagem: 'https://s2-g1.glbimg.com/Wg-WUnpxRzdUkwHBr6UHaF8X-yo=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/E/5/8U5WX9QP6UMvp7xzpgFQ/whatsapp-image-2026-06-17-at-10.17.24.jpeg',
        autor: 'G1 Mato Grosso', tempo: '7h atrás'
    },
    {
        id: 22, categoria: 'cidade',
        titulo: 'Lucas do Rio Verde: Trabalhador morre em queda de torre de 19 metros na BR-163',
        resumo: 'Adriano Cunha Barroso, de 29 anos, natural do Pará, morreu nessa terça-feira (16) após cair de uma torre de telefonia de aproximadamente 19 metros de altura no km 644 da BR-163, em Lucas do Rio Verde, a 330 km de Cuiabá. Ele realizava um procedimento padrão de aperto de parafusos. A Polícia Civil e',
        imagem: 'https://s2-g1.glbimg.com/5pgpriZCZBv4hWAWmAxmMt0TSJg=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/W/e/EHh24mSN2004ox5VJhSg/foto-g1-55-.jpg',
        autor: 'G1 Mato Grosso', tempo: '9h atrás'
    },
    {
        id: 23, categoria: 'economia',
        titulo: 'Procon-MT Fiscaliza Shoppings de Cuiabá e Várzea Grande por Denúncias de Preço Abusivo',
        resumo: 'O Procon Estadual iniciou fiscalização em shoppings de Cuiabá e Várzea Grande após denúncias de consumidores sobre o aumento nos preços dos estacionamentos. Os estabelecimentos estão sendo notificados e têm prazo de até 15 dias para apresentar a documentação que justifique os valores cobrados. A med',
        imagem: 'https://matogrossoeconomico.com.br/wp-content/uploads/2026/06/estacionamento-de-shopping-em-cuiaba.jpeg',
        autor: 'Redação MT Econômico', tempo: '3h atrás'
    },
    {
        id: 24, categoria: 'cidade',
        titulo: 'Gigante de Curvelândia: MT produz maior queijo frescal do Brasil com 3.247 kg',
        resumo: 'Curvelândia, a 311 km de Cuiabá, produziu o maior queijo frescal do Brasil, com 3.247 quilos. A peça, que superou o recorde de 2025 (3.005 kg), utilizou 28,6 mil litros de leite e mobilizou 30 pessoas na fabricação, iniciada no sábado (13). Cortado no domingo (14) na 16ª Festa do Queijo, o produto f',
        imagem: 'https://s2-g1.glbimg.com/qlbLbOLlJ0QM81gqVyovBGqk_BY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/6/C/uJJPoCQvADnB8kgg0NPQ/whatsapp-image-2026-06-16-at-16.02.09.jpeg',
        autor: 'G1 Mato Grosso', tempo: '1d atrás'
    },
    {
        id: 25, categoria: 'politica',
        titulo: 'Desembargador José Zuquim Nogueira assume Governo de MT interinamente em Cuiabá',
        resumo: 'Em Cuiabá, o governador em exercício Otaviano Pivetta (Republicanos) transferiu, nesta terça-feira (16), o comando do Executivo estadual ao presidente do Tribunal de Justiça de Mato Grosso, desembargador José Zuquim Nogueira. A posse interina, realizada no Palácio Paiaguás, será válida até sexta-fei',
        imagem: 'https://s2-g1.glbimg.com/cnPXBg32kuS7N8qp5N_sa1HggRs=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/2/2/rw0iMdQwG6kxmWwwrsoA/whatsapp-image-2026-06-16-at-16.21.39.jpg',
        autor: 'G1 Mato Grosso', tempo: '22h atrás'
    },
    {
        id: 26, categoria: 'cidade',
        titulo: 'Desembargador Dirceu dos Santos (TJMT) se aposenta com salário integral sob investigação do CNJ',
        resumo: 'O Tribunal de Justiça de Mato Grosso (TJMT) concedeu aposentadoria ao desembargador Dirceu dos Santos, conforme decisão publicada nesta quarta-feira (17) no Diário da Justiça Eletrônico. Afastado desde março por determinação da Corregedoria do CNJ, ele é investigado por suposta venda de sentenças. A',
        imagem: 'https://s2-g1.glbimg.com/cDu2h2yZzf3O9JzM0tLt_H5xaD8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/4/h/tERU50T52ai8zV2zQyyQ/foto-g1-2026-03-02t113420.797.png',
        autor: 'G1 Mato Grosso', tempo: '3h atrás'
    },
    {
        id: 27, categoria: 'economia',
        titulo: 'Cerradinho Bio quase dobra lucro na safra 25/26 com estratégia açucareira e etanol de milho',
        resumo: 'A Cerradinho Bio, operando em Goiás e Mato Grosso do Sul, anunciou que seu lucro quase dobrou na safra 25/26. Este resultado robusto, impulsionado por um mix de produção mais açucareiro e a contribuição do etanol de milho, destaca-se frente aos desafios enfrentados por concorrentes como Jalles, Raíz',
        imagem: 'https://agfeed.com.br/wp-content/uploads/2025/02/Cerradinho.jpg',
        autor: 'Gustavo Lustosa', tempo: 'agora'
    },
    {
        id: 28, categoria: 'economia',
        titulo: 'Cuiabá: VLI Bate Recorde Histórico de Cargas em Maio e Impulsiona Agronegócio do Centro-Oeste',
        resumo: 'A VLI, empresa de logística, registrou em maio a maior movimentação mensal de cargas de sua história no Corredor Sudeste. Transportando 1,14 bilhão de toneladas por quilômetro útil (TKU) pela Ferrovia Centro-Atlântica (FCA), que conecta o Centro-Oeste, incluindo Mato Grosso, ao Porto de Santos, o fe',
        imagem: 'https://agfeed.com.br/wp-content/uploads/2024/06/locomotivavli-1.jpg',
        autor: 'Gustavo Lustosa', tempo: '1h atrás'
    },
    {
        id: 29, categoria: 'cidade',
        titulo: 'MPMT Investiga Contratação de Professores em Cuiabá e Acorizal; Aumento de Temporários Preocupa',
        resumo: 'O Ministério Público de Mato Grosso (MPMT) instaurou três inquéritos civis para investigar a contratação de professores na rede estadual e nas redes municipais de Cuiabá e Acorizal. A medida, impulsionada por dados do Censo Escolar que apontam aumento de temporários, visa apurar concursos, processos',
        imagem: 'https://s2-g1.glbimg.com/nYkqQiw-pI91F0EJJ-bHnT5kt4w=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/e/6/OLEyPAQKCPeu1LPSqMAg/sede-das-promotorias.png',
        autor: 'G1 Mato Grosso', tempo: '21h atrás'
    },
    {
        id: 30, categoria: 'cidade',
        titulo: 'Dia do Rock em Nova Mutum terá música, carros antigos e praça de alimentação',
        resumo: 'A prefeitura confirmou que o Dia do Rock Mutum será realizado no próximo dia 27, a partir das 19h, em frente ao Ginásio Lauro Immich. O evento gratuito celebra a cultura rock e visa promover a música local, reunir famílias e gerar oportunidades de visibilidade para artistas e empreendedores da cidad',
        imagem: 'https://www.sonoticias.com.br/wp-content/uploads/2026/06/Captura-de-Tela-2026-06-17-as-17.22.11.png',
        autor: 'Kelvin Ramirez', tempo: 'agora'
    },
    {
        id: 31, categoria: 'economia',
        titulo: 'MT Bate Recorde em Abate de Gado Jovem, Atingindo 44% e Ampliando Exportações',
        resumo: 'O estado de Mato Grosso, um dos pilares da agropecuária nacional, alcançou um recorde histórico no abate de gado, onde 44% dos animais tinham até 24 meses de idade. Este índice representa um salto notável em comparação aos 2% registrados no início da série, consolidando a modernização da pecuária lo',
        imagem: 'https://images.pexels.com/photos/10531120/pexels-photo-10531120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação MT Econômico', tempo: '5h atrás'
    },
    {
        id: 32, categoria: 'cidade',
        titulo: 'Cuiabá: Telões para o jogo do Brasil; inscrições de ruas decoradas encerram quarta (17)',
        resumo: 'Moradores de Cuiabá têm até esta quarta-feira (17), às 11h, para inscrever suas ruas decoradas em concurso da prefeitura. Quatro vias mais votadas receberão telões para transmitir o segundo jogo do Brasil na Copa, contra o Haiti, nesta sexta (19). A votação ocorre no Instagram da prefeitura entre 17',
        imagem: 'https://s2-g1.glbimg.com/enbMqeISYpNDcs20ADLHVn_3P2Y=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/p/c/hXB2hxS7KnsAxWTUENBA/2026-06-14-11-42-a48a1609-6a2ecc03d7cee.jpg',
        autor: 'G1 Mato Grosso', tempo: '9h atrás'
    },
    {
        id: 33, categoria: 'cidade',
        titulo: 'Cuiabá: Operação Throw mira 18 em rede de tráfico interestadual de drogas',
        resumo: 'A Operação Throw, deflagrada na manhã desta quarta-feira (17) em Cuiabá e Várzea Grande, cumpriu mandados de prisão preventiva contra 18 pessoas por tráfico interestadual de drogas ligado a uma facção criminosa. A ação, iniciada em julho de 2023, resultou também em 16 buscas, bloqueio de contas de 8',
        imagem: 'https://s2-g1.glbimg.com/mmmz_ftS_8GlbABcKbUmgPnnM_Y=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/Q/m/DSBl81SJG5hBcEoYAASw/foto-g1-54-.jpg',
        autor: 'G1 Mato Grosso', tempo: '10h atrás'
    },
    {
        id: 34, categoria: 'eventos',
        titulo: 'Caprichoso Anuncia Lup Moara, 1ª Mulher Trans Tuxaua do Festival de Parintins 2026',
        resumo: 'O Boi-Bumbá Caprichoso anunciou Lup Moara como a primeira mulher trans a assumir o item tuxaua no Festival de Parintins. A artista visual e performática estreará em 2026 no Bumbódromo, marcando um momento histórico para a representatividade LGBTQIAPN+ e a cultura amazônica. A escolha reforça o compr',
        imagem: 'https://s2-g1.glbimg.com/6QSUwOR7E6JqDlXv4bJJxDuI6Z0=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/J/l/xAHGCMQGiXKsIpBPNT0Q/whatsapp-image-2026-06-17-at-19.02.28.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 35, categoria: 'brasil',
        titulo: 'Rádio Nacional estreia \'Batalhas na Copa\' com duelos esportivos e culturais diários',
        resumo: 'A Rádio Nacional lançou o programa especial "Batalhas na Copa", exibido de segunda a sexta-feira, das 13h às 13h30 (horário de Brasília), dentro da programação "Nacional na Copa". A atração convida os ouvintes a acompanhar disputas inspiradas nos confrontos diários da Copa do Mundo, explorando aspec',
        imagem: 'https://cenariomt.com.br/wp-content/uploads/2026/06/0b9d65d975_Batalhas_na_Copa_Nacional_apresenta_duelos_dentro_e_fora_de_campo.webp',
        autor: 'Marcos Eduardo Carvalho', tempo: 'agora'
    },
    {
        id: 36, categoria: 'esportes',
        titulo: 'Copa 2026: Jogo da Colômbia no México antecipa novela das nove da Globo nesta quarta (17)',
        resumo: 'A estreia da Colômbia contra o Uzbequistão na Copa do Mundo 2026, marcada para esta quarta-feira (17) às 23h (de Brasília) no Estádio Azteca, Cidade do México, levará a Rede Globo a antecipar sua novela das nove. A emissora ajusta a grade para transmitir o jogo, impactando o horário tradicional da t',
        imagem: 'https://cenariomt.com.br/wp-content/uploads/2026/06/3352f0660c_Estreia_da_Colombia_na_Copa_do_Mundo_2026_antecipa_novela_da_Globo.webp',
        autor: 'Rafael', tempo: '15 min atrás'
    },
    {
        id: 37, categoria: 'economia',
        titulo: 'Indústria de Materiais de Construção Retoma Crescimento e Projeta Expansão até 2026',
        resumo: 'A indústria brasileira de materiais de construção registrou nova alta, revertendo a retração observada em abril. Impulsionada pelos materiais básicos, essa recuperação leva a Abramat a manter a projeção de expansão moderada para o setor no ano e uma expectativa positiva de crescimento contínuo até 2',
        imagem: 'https://matogrossoeconomico.com.br/wp-content/uploads/2024/07/construcao-civil-assessoria-1-scaled.jpg',
        autor: 'Redação MT Econômico', tempo: '1h atrás'
    },
    {
        id: 38, categoria: 'economia',
        titulo: 'Mato Grosso: Deputados aprovam adequação legal para regularizar divisas municipais',
        resumo: 'Deputados estaduais de Mato Grosso aprovaram a adequação da legislação estadual para a regularização dos limites entre os municípios. A nova norma, que segue os moldes da Lei Complementar Federal 230/2026, estabelece diretrizes gerais para o desmembramento de parte de um município e sua incorporação',
        imagem: 'https://matogrossoeconomico.com.br/wp-content/uploads/2026/06/deputado-nininho-comissao.webp',
        autor: 'Redação MT Econômico', tempo: '2h atrás'
    },
    {
        id: 39, categoria: 'cidade',
        titulo: 'Casal de 25 Anos é Preso em Várzea Grande com R$ 38 Mil em Produtos Estéticos de Fraude',
        resumo: 'Um casal de 25 anos foi preso em flagrante nesta terça-feira (16) em Várzea Grande, região metropolitana de Cuiabá, por receptação de produtos para harmonização orofacial avaliados em R$ 38 mil. As mercadorias, enviadas em 29 de maio para o bairro Construmat, foram obtidas por fraude contra uma dist',
        imagem: 'https://s2-g1.glbimg.com/aqdJaZXEbmbImYXtWQ7FA7NN9pU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/D/A/oJpmqwTPGYODaHa5wO5g/videos-g1-3-.jpg',
        autor: 'G1 Mato Grosso', tempo: '1d atrás'
    },
    {
        id: 40, categoria: 'cidade',
        titulo: 'Cuiabá: Senai Abre 260 Vagas em Curso Gratuito e Oferece Emprego com Salários de Até R$6 Mil',
        resumo: 'O Serviço Nacional de Aprendizagem Industrial de Mato Grosso (Senai-MT) abriu 260 vagas para o curso gratuito de Assistente de Controle de Qualidade em Cuiabá, com inscrições para maiores de 16 anos e ensino fundamental completo. A instituição também oferece 36 vagas de emprego na área, sendo 10 par',
        imagem: 'https://s2-g1.glbimg.com/g5JnkRtzhEbL966x4zIhC4ZckeY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/o/1/Hl7698RveSKhKnvlmb1g/dsc03123-hdr.jpg',
        autor: 'G1 Mato Grosso', tempo: '1d atrás'
    },
    {
        id: 41, categoria: 'cidade',
        titulo: 'Cuiabá é destaque em campanha da Sicoob Credisul por doação de sangue em MT, AC e RO',
        resumo: 'A Sicoob Credisul promove de 8 a 14 de junho a campanha \'Cooperar Corre em Nossas Veias\', incentivando a doação de sangue no Acre, Rondônia e Mato Grosso. Em Cuiabá, a mobilização ocorre no dia 11 de junho, das 7h30 às 18h, no MT Hemocentro. A iniciativa, que visa conscientizar colaboradores, cooper',
        imagem: 'https://s2-g1.glbimg.com/HmoVg7MZiLJpjauWjnVGos8zVPU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/f/q/q6ZOBIScOJzTDPBNziLw/campanha-cooperar-corre-em-nossas-veias-incentiva-doacao-de-sangue.jpg',
        autor: 'G1 Mato Grosso', tempo: '1d atrás'
    },
    {
        id: 42, categoria: 'cidade',
        titulo: 'SNE: Motoristas de Cuiabá e MT podem obter 40% de desconto em multas',
        resumo: 'Motoristas de Mato Grosso, incluindo os de Cuiabá e outras cidades como Rondonópolis e Sinop, podem conseguir até 40% de desconto em multas de trânsito ao aderir ao Sistema de Notificação Eletrônica (SNE). A ferramenta, que já registrou 289.228 adesões no estado, permite o acompanhamento e consulta',
        imagem: 'https://s2-g1.glbimg.com/wb2MG-uk9_TpxARwWTZ5JQguIVg=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/N/P/HhhT4CSHWOwLPFAxcGVA/img-5434.jpg.jpeg',
        autor: 'G1 Mato Grosso', tempo: '1d atrás'
    },
    {
        id: 43, categoria: 'politica',
        titulo: 'Presidente da Câmara admite jatinho e hotel de luxo pago por banqueiro em Lisboa',
        resumo: 'Hugo Motta, presidente da Câmara, admitiu nesta quarta (17) ter viajado em jatinho do banqueiro Daniel Vorcaro e tido hotel pago em Lisboa. A PF revelou 7 diárias (US$ 211 mil) em hotel de luxo para Motta e senador Ciro Nogueira entre 24 e 29 de junho de 2024, e diálogos sobre empréstimo do Master à',
        imagem: 'https://s2-g1.glbimg.com/IH7G8FkJJcfcgLrmZ9jJyKt4IA8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/H/F/PQQHoGQBec7UW0LfsNvQ/globo-canal-4-20260617-2000-frame-30730.jpeg',
        autor: 'Jornal Nacional', tempo: 'agora'
    },
    {
        id: 44, categoria: 'esportes',
        titulo: 'Copa do Mundo: Líder Escócia celebra vitória e mascote Roary encontra ícones da NFL e MLS em Boston',
        resumo: 'A seleção da Escócia, líder do grupo do Brasil na Copa do Mundo, celebrou sua vitória sobre o Haiti e o bom momento com um encontro inusitado de seu mascote, o leão Roary, com o soldado Pat Patriot (New England Patriots, NFL) e a raposa Slyde the Fox (New England Revolution, MLS), nesta quarta-feira',
        imagem: 'https://s2-ge.glbimg.com/D0joTpoETxlETNhz5cg9avjp9o4=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/x/9/OrXgAOQESfoiOQXh1ONA/hlc3ydzweaabsgj.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 45, categoria: 'esportes',
        titulo: 'Recorde na Copa: Aos 73, Carlos Queiroz de Gana é o técnico mais velho a vencer um jogo',
        resumo: 'Carlos Queiroz, técnico de Gana, fez história ao se tornar o mais velho a vencer um jogo de Copa do Mundo. Aos 73 anos e 108 dias, ele conduziu sua equipe à vitória por 1 a 0 sobre o Panamá, com gol de Yirenkyi aos 49\' do 2º tempo. O feito, em uma partida do Mundial, superou o recorde anterior de Ot',
        imagem: 'https://s2-ge.glbimg.com/znWxZUNGKF-XtmCProzCQnTM3Kw=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/v/t/Zb5w4YRlaSNL63aPiw5A/gettyimages-2282121392.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 46, categoria: 'esportes',
        titulo: 'Copa do Mundo: Estreia Morna de Gana Gera Memes e Críticas nas Redes Sociais',
        resumo: 'A estreia de Gana na Copa do Mundo, contra o Panamá, decepcionou torcedores e gerou ampla repercussão negativa nas redes sociais. O confronto, de baixa intensidade e poucas emoções, teve um gol de Gana aos quatro minutos dos acréscimos, mas não impediu que fosse classificado como o "pior jogo" da fa',
        imagem: 'https://s2-ge.glbimg.com/gHLNZHvDN6u01ITPSIozUM7qWvo=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/o/e/cKifHARu6YeBvzLSndhg/2026-06-18t003203z-1412306742-up1em6i01hdrc-rtrmadp-3-soccer-worldcup-gha-pan.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 47, categoria: 'esportes',
        titulo: 'Copa 2026: Rotina de Sono Rígida Impulsiona Herói de Gana em Vitória Histórica',
        resumo: 'Caleb Yirenkyi, atacante ganês de 20 anos do Nordsjælland, foi o herói da primeira vitória de Gana na Copa do Mundo de 2026, marcando o gol decisivo contra o Panamá no último minuto. Sua performance excepcional é creditada a uma rotina de sono rigorosa, dormindo diariamente das 21h às 5h, e intensa',
        imagem: 'https://s2-ge.glbimg.com/xcNAolSaF8qUj1rb9QrEd6Qm9i0=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/W/q/Vcix7jR0GUKK4C66KLQg/2026-06-18t010432z-335884255-up1em6i02zju2-rtrmadp-3-soccer-worldcup-gha-pan.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 48, categoria: 'esportes',
        titulo: 'Yirenkyi Garante Vitória de Gana sobre Panamá na Estreia com Gol nos Acréscimos',
        resumo: 'A seleção de Gana garantiu uma vitória dramática sobre o Panamá em sua partida de estreia. O confronto, que registrou poucas emoções, foi decidido apenas aos 49 minutos do segundo tempo, quando o volante Yirenkyi marcou o gol decisivo nos acréscimos. O resultado permite que a equipe africana inicie',
        imagem: 'https://s3.glbimg.com/v1/AUTH_378ee63fe83141e69caddd838034e850/static/preview-share-min.png',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 49, categoria: 'esportes',
        titulo: 'Copa 2026: Gana Supera Panamá com Força do Banco e Gol Decisivo de Yierenkyi',
        resumo: 'Gana iniciou sua jornada na Copa do Mundo 2026 com uma vitória crucial por 1 a 0 sobre o Panamá, na primeira rodada do Grupo L. O gol do triunfo foi marcado pelo jovem Yierenkyi aos 49 minutos do segundo tempo. Apesar de desfalques e um primeiro tempo dominado pelos panamenhos, a equipe treinada por',
        imagem: 'https://s2-ge.glbimg.com/L3WMIi2xoVZ4fRgFx0GnGMf4iqQ=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/e/B/NBWwTjSuiYAnyJSiVteg/2026-06-18t003133z-153841060-up1em6i01gjrb-rtrmadp-3-soccer-worldcup-gha-pan.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 50, categoria: 'esportes',
        titulo: 'Módulo 2 do Mineiro: Caldense e Guarani-MG ficam no 0 a 0 em Poços de Caldas',
        resumo: 'Caldense e Guarani-MG empataram em 0 a 0 nesta quarta-feira (17), em Poços de Caldas (MG), pela 4ª rodada do Módulo 2 do Campeonato Mineiro. A partida de baixo nível técnico, presenciada por 902 torcedores, levou a Caldense a 5 pontos (4ª no Grupo A) e o Guarani-MG a 4 pontos (5ª, deixando a lantern',
        imagem: 'https://s2-ge.glbimg.com/CUJs-3D4zbiLtQCxeTIY0hDe1HA=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/h/m/I1EAxBSBAddzhYcyAlHA/whatsapp-image-2026-06-17-at-20.01.16.jpeg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 51, categoria: 'esportes',
        titulo: 'Neymar Intensifica Treinos nos EUA de Olho em Retorno Gradual à Seleção Brasileira',
        resumo: 'Neymar realizou dupla jornada de treinos nesta quarta-feira nos EUA: campo pela manhã e individual na academia, com Cristiano Nunes e Mino Fulco. Sem jogar há um mês, o atleta está em transição para readquirir condicionamento. Ele desfalca o Brasil contra o Haiti nesta sexta (21h30 de Brasília) e é',
        imagem: 'https://s2-ge.glbimg.com/dNSuJhAZMjRhytCRsEz5qzmHMPk=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/h/A/5u2jWqT9SG27jgpTpLEg/whatsapp-image-2026-06-17-at-21.34.51-1-.jpeg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 52, categoria: 'esportes',
        titulo: 'WSL Sunset 2026: Saquarema abre etapa mundial de surfe com shows gratuitos',
        resumo: 'A Praia de Itaúna, em Saquarema (RJ), será palco do WSL Sunset 2026, evento que marca a abertura da sexta etapa do Circuito Mundial de Surfe. Com shows gratuitos de Cidade Negra, Veigh e Buchecha na quinta-feira, 18 de junho, das 17h às 23h, o festival celebra os 50 anos do surfe competitivo. As com',
        imagem: 'https://s2-ge.glbimg.com/suZhDrY5KA2bJ-w73IhAt8eqEAE=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/l/c/CGTUXARi29v5gG8LpdNw/dur-3838.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 53, categoria: 'esportes',
        titulo: 'Módulo 2 Mineiro: Valério e Aymorés ficam no 0 a 0 e alteram classificação do Grupo B',
        resumo: 'Valério e Aymorés empataram em 0 a 0 na noite desta quarta-feira, pela 4ª rodada do Grupo B do Módulo 2 do Campeonato Mineiro. O confronto, disputado no estádio Israel Pinheiro, em Itabira, resultou em movimentação na tabela: o Aymorés alcançou 7 pontos, garantindo a segunda posição, enquanto o Valé',
        imagem: 'https://images.pexels.com/photos/35142168/pexels-photo-35142168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 54, categoria: 'esportes',
        titulo: 'Copa 2026: Brasil, Portugal e Espanha decepcionam com empates na estreia',
        resumo: 'A primeira rodada da Copa do Mundo FIFA™ de 2026 foi marcada pela decepção de seleções favoritas. Brasil, Portugal e Espanha amargaram apenas empates em suas estreias, gerando dúvidas sobre a continuidade na competição. O Brasil, em especial, exibiu grande desorganização tática no 1 a 1 contra Marro',
        imagem: 'https://s2-ge.glbimg.com/B0VZ8Ahsz8S3Sk63P4rCw6wQg8Q=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/w/F/MsBkeAQles34N89B9LKw/2026-06-15t161823z-924299842-up1em6f19al37-rtrmadp-3-soccer-worldcup-esp-cpv.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 55, categoria: 'esportes',
        titulo: 'Goleiro de Gana, Benjamin Asare, Brilha na Copa 2026 e Ganha Carro e Ferro Elétrico',
        resumo: 'O goleiro ghanense Benjamin Asare, de 33 anos, do Hearts of Oak, marcou a Copa do Mundo 2026 ao ser o primeiro a entrar em campo por substituição, na primeira rodada. Sua trajetória inclui ter viralizado ao ser flagrado usando transporte público, o que levou um empresário torcedor a presenteá-lo com',
        imagem: 'https://s2-ge.glbimg.com/FMkmP_U6AdN1GgxIBa0Ju7XrtSs=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/5/O/nBTBjASseflmbIwrEYLg/495303884-1211066474013129-6252699102103861241-n.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 56, categoria: 'esportes',
        titulo: 'Módulo 2 Mineiro: Uberaba e Patrocinense Empatam em 1 a 1; Colorado Perde 100% em Casa',
        resumo: 'Na noite desta quarta-feira, Uberaba Sport Club e Patrocinense empataram em 1 a 1 no Estádio Uberabão, pela quarta rodada do Grupo A do Módulo 2 do Campeonato Mineiro. Zé Lucas abriu o placar para o Patrocinense no primeiro tempo, e Bruno Henrique igualou para o Uberaba na segunda etapa. O resultado',
        imagem: 'https://s2-ge.glbimg.com/bHzsT2jRoTTmx8dEaOYh7HorSYc=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/5/K/nYGHWiTXmqth9csTxvVw/whatsapp-image-2026-06-17-at-21.04.07.jpeg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 57, categoria: 'esportes',
        titulo: 'Declan Rice sente desconforto na coxa em estreia da Inglaterra na Copa do Mundo 2026',
        resumo: 'O meio-campista Declan Rice, da seleção da Inglaterra, precisou ser substituído nesta quarta-feira durante a vitória por 4 a 2 sobre a Croácia, na estreia do Grupo L da Copa do Mundo Fifa 2026. O jogador do Arsenal sentiu um desconforto na coxa e será avaliado. O técnico Thomas Tuchel optou por não',
        imagem: 'https://s2-ge.glbimg.com/hOjwO6OxZFunP-yQFyK9S5_StsU=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/w/i/8CRyqnS9eU2aLDlPgqaQ/2026-06-17t204239z-934035090-up1em6h1lj16h-rtrmadp-3-soccer-worldcup-eng-cro.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 58, categoria: 'esportes',
        titulo: 'CR7 "Não é o Mesmo": Jogador da RD Congo Minimiza Marcação Após Empate em Copa do Mundo',
        resumo: 'Nesta quinta-feira, em Houston, EUA, Portugal estreou na Copa do Mundo com um empate em 1 a 1 contra a RD Congo. A partida gerou grande expectativa pela atuação de Cristiano Ronaldo, que não brilhou. Após o jogo, o meia congolês Ngal’ayel Mukau, de 21 anos, declarou à TNT Sports que não houve marcaç',
        imagem: 'https://s2-ge.glbimg.com/rXSO9d70o7yuQlwQWHHO_uUCkgo=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/g/O/ZOEwvPTvAxmUbpRWqCgQ/cristiano-reu.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 59, categoria: 'esportes',
        titulo: 'Seleção Brasileira: Dúvidas Táticas de Ancelotti Preocupam Comentaristas na Copa',
        resumo: 'A Seleção Brasileira chega à segunda partida da Copa do Mundo com indefinição tática, gerando preocupação entre comentaristas como Eric Faria, Rizek e Felipe Melo, do programa "Seleção Copa". Após 13 jogos e um empate de 1 a 1 com Marrocos, o técnico Carlo Ancelotti é criticado por ainda não ter um',
        imagem: 'https://s2-ge.glbimg.com/waSBY2O0TrXmOdFXf9SOEg4vMqA=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/m/d/P36AbARaeOlCQeqUzPBA/17junho26-treino-55.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 60, categoria: 'esportes',
        titulo: 'Torcida de Gana Incendeia Ruas de Toronto em Festa Vibrante Antes da Estreia na Copa 2026',
        resumo: 'Torcedores de Gana transformaram as ruas de Toronto, Canadá, em um palco de festa vibrante, com danças e músicas tradicionais, antes da estreia da seleção na Copa do Mundo de 2026. A euforia da torcida contrasta com a preparação turbulenta da equipe, que incluiu a troca do técnico Otto Addo por Carl',
        imagem: 'https://s2-ge.glbimg.com/x51izAe-2KQaYnkswm6SjzYyokg=/1280x0/filters:format(jpeg)/https://thumbor.globoi.com/unsafe/fit-in/1280x720/s03.video.glbimg.com/deo/vi/34/01/14710134',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 61, categoria: 'esportes',
        titulo: 'Vazam fotos da nova chuteira dourada de Cristiano Ronaldo antes de lançamento oficial',
        resumo: 'Imagens da nova chuteira dourada de Cristiano Ronaldo, assinada pela Nike, vazaram na internet através do site especializado Footy Headlines. O lançamento oficial do calçado está previsto para esta quinta-feira, um dia após o empate de Portugal em 1 a 1 com a República Democrática do Congo na Copa d',
        imagem: 'https://s2-ge.glbimg.com/xggplQBuAYzrdi0-P38DBoSoyT8=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/c/Y/lcZLgSSTyIZBNFCPpB5A/gold-cr7-boots-2-.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 62, categoria: 'economia',
        titulo: 'Mato Grosso Registra Pior Desempenho em Vendas no Centro-Oeste no 1º Quadrimestre',
        resumo: 'Mato Grosso encerrou o primeiro quadrimestre com o menor crescimento nas vendas entre os estados do Centro-Oeste, indicando um cenário de menor dinamismo econômico regional. Enquanto o Distrito Federal liderou com alta anual de 7,3%, seguido por Goiás (4,3%) e Mato Grosso do Sul (3%), o desempenho m',
        imagem: 'https://matogrossoeconomico.com.br/wp-content/uploads/2025/12/comercio-centro-de-cuiaba-cdl-cuiabe.jpeg',
        autor: 'Redação MT Econômico', tempo: '8h atrás'
    },
    {
        id: 63, categoria: 'economia',
        titulo: 'Presidente do TJMT assume Governo de Mato Grosso em sucessão constitucional',
        resumo: 'O Presidente do Tribunal de Justiça de Mato Grosso (TJMT) assumiu interinamente a chefia do Poder Executivo estadual, após a saída de Pivetta. A medida, conforme a Constituição de Mato Grosso, assegura a continuidade administrativa, prevendo que a sucessão do governo ocorre, nesta ordem, pelo presid',
        imagem: 'https://matogrossoeconomico.com.br/wp-content/uploads/2026/06/PIVETTA-E-ZUQUIM.jpg',
        autor: 'Redação MT Econômico', tempo: '9h atrás'
    },
    {
        id: 64, categoria: 'economia',
        titulo: 'Brasil diverge do G7 e rejeita seis de nove declarações aprovadas pelo grupo',
        resumo: 'O Brasil rejeitou recentemente seis das nove declarações aprovadas pelo G7, marcando uma significativa divergência em seu posicionamento diplomático. A decisão do país em relação à maioria dos textos do grupo de nações desenvolvidas aponta para diferenças importantes na agenda internacional, refleti',
        imagem: 'https://s2-valor.glbimg.com/lhpwAe2vwzK_H78Z39JvzfNzmp0=/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2026/L/d/gCsCl2R5y52fnvabz88w/2026-06-17t082206z-1648057790-rc2kvlanee2z-rtrmadp-3-g7-summit.jpg',
        autor: 'Valor Econômico', tempo: 'agora'
    },
    {
        id: 65, categoria: 'economia',
        titulo: 'Mobili e ídolo Hulk firmam parceria estratégica em proteção veicular',
        resumo: 'A empresa Mobili anunciou uma parceria estratégica com o renomado jogador de futebol Hulk. Conhecido por sua força e gols nos gramados, o atleta agora atuará como parceiro da Mobili no segmento de proteção veicular. A colaboração visa impulsionar a marca da companhia e expandir sua atuação no mercad',
        imagem: 'https://s2-valor.glbimg.com/TWDvhZ1ztQrUc42U7sCs-Q8dFqA=/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2026/b/j/O5DN0YQUKl36y2z89qrw/publicador-api-valor-dino-100-47cfff85-9eb9-4d38-a658-5fa4bf744cdd.jpeg-20260617180526',
        autor: 'Valor Econômico', tempo: '1h atrás'
    },
    {
        id: 66, categoria: 'cidade',
        titulo: 'Porco-espinho preso em poste de 15m mobiliza Bombeiros em Lucas do Rio Verde',
        resumo: 'Nesta segunda-feira (15), um porco-espinho mobilizou o Corpo de Bombeiros Militar de Mato Grosso (CBMMT) em Lucas do Rio Verde, a 332 km de Cuiabá. O animal ficou preso no topo de um poste de energia de aproximadamente 15 metros no bairro Alvorada. Alertados por moradores, os bombeiros realizaram um',
        imagem: 'https://s2-g1.glbimg.com/JDYCwrrMY3LxmVPGyc3W-G27L4c=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/9/U/Htp9VqSqiXV6BMuECfTQ/copia-de-videos-g1-64-.jpg',
        autor: 'G1 Mato Grosso', tempo: '23h atrás'
    },
    {
        id: 67, categoria: 'cidade',
        titulo: 'Incêndio por carregador devasta sacristia de igreja em MT e causa R$ 500 mil de prejuízo',
        resumo: 'Um incêndio de grandes proporções destruiu a sacristia da Igreja Matriz da Paróquia Senhor Bom Jesus, em Pontes e Lacerda (a 450 km de Cuiabá), nesta segunda-feira (15). O fogo, supostamente iniciado por um carregador de pilhas, causou prejuízo superior a R$ 500 mil, devastando itens religiosos e el',
        imagem: 'https://s2-g1.glbimg.com/G30wJnjCRRJjiQBb-oPUAy8uTrY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/S/4/LEOVW9Q4u83NneBoCLhA/videos-g1-4-.jpg',
        autor: 'G1 Mato Grosso', tempo: '23h atrás'
    },
    {
        id: 68, categoria: 'esportes',
        titulo: 'Copa ES 2026: Vilavelhense e Vitória-ES empatam em 2 a 2 na semifinal',
        resumo: 'Na noite desta quarta-feira, Vilavelhense e Vitória-ES empataram em 2 a 2 no jogo de ida das semifinais da Copa Espírito Santo 2026, disputado no Estádio Kleber Andrade, em Cariacica. Jarles Baiano marcou duas vezes para o Vilavelhense, enquanto Canário e Thiago Ramos fizeram os gols do Vitória-ES,',
        imagem: 'https://s2-ge.glbimg.com/JhBkgRDabYhJb5swYU9MiJ4Uv8s=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/Y/L/bxEBrpQgeCWURPBcd1yg/img-0300.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 69, categoria: 'esportes',
        titulo: 'Boa Esporte Vence Mamoré Fora, Lidera Grupo e Embala no Módulo 2 Mineiro',
        resumo: 'O Boa Esporte, equipe de Ituiutaba, conquistou sua segunda vitória consecutiva ao derrotar o Mamoré por 1 a 0 na noite desta quarta-feira, no Estádio Bernardo Rubinger de Queiroz, em Patos de Minas. O gol de Lucas Lotto, aos 46 minutos do primeiro tempo, garantiu os três pontos pela 4ª rodada do Gru',
        imagem: 'https://s2-ge.glbimg.com/kmqwcil5_nE89k1zSf0BitvW4YE=/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/y/R/mygaPiRXeNnRuAJPf9Ew/mamore-boa.jpg',
        autor: 'GE (Globo Esporte)', tempo: 'agora'
    },
    {
        id: 70, categoria: 'brasil',
        titulo: 'Menudo: Grupo Anuncia Turnê Histórica \'Menudo 50\' Após Mais de 15 Anos',
        resumo: 'O icônico grupo Menudo confirmou seu retorno aos palcos após um hiato de mais de 15 anos. A reunião, divulgada recentemente nas redes sociais pelos próprios integrantes, marca a celebração dos 50 anos de história da banda. A turnê comemorativa, intitulada \'Menudo 50\', trará os artistas de volta para',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/17/17817418476a333917154f4_1781741847_3x2_lg.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 71, categoria: 'brasil',
        titulo: 'PRF faz apreensão recorde: 26 fuzis, incluindo AK-47 russos, interceptados',
        resumo: 'A Polícia Rodoviária Federal (PRF) realizou uma apreensão recorde de armamentos, interceptando 26 fuzis de alto poder bélico, incluindo modelos AK-47 de origem russa. A ação ocorreu após a abordagem de um motorista que seguia da Argentina rumo a Minas Gerais. O condutor poderá enfrentar pena de até',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/01/x-26.jpg?w=200',
        autor: 'thiagofelix', tempo: 'agora'
    },
    {
        id: 72, categoria: 'economia',
        titulo: 'Corte da Selic para 14,25% é insuficiente, alertam CNI e CUT',
        resumo: 'O Comitê de Política Monetária (Copom) do Banco Central reduziu a taxa Selic em 0,25 ponto percentual, para 14,25% ao ano, nesta quarta-feira (17). Contudo, a Confederação Nacional da Indústria (CNI), com seu presidente Ricardo Alban, e a Central Única dos Trabalhadores (CUT) consideraram o corte in',
        imagem: 'https://images.pexels.com/photos/10531120/pexels-photo-10531120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Luciano Nascimento - Repórter da Agência Brasil', tempo: 'agora'
    },
    {
        id: 73, categoria: 'economia',
        titulo: 'Selic cai para 14,25%: Copom promove 3º corte seguido em meio a desafios',
        resumo: 'O Comitê de Política Monetária (Copom) do Banco Central (BC) reduziu a Taxa Selic nesta quarta-feira (17) em 0,25 p.p., de 14,50% para 14,25% ao ano. Este é o terceiro corte consecutivo, visando estimular a economia e controlar a inflação através do barateamento do crédito. A decisão ocorre em meio',
        imagem: 'https://images.pexels.com/photos/10531120/pexels-photo-10531120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Luciano Nascimento - Repórter da Agência Brasil', tempo: '1 min atrás'
    },
    {
        id: 74, categoria: 'internacional',
        titulo: 'Acordo de Paz EUA-Irã em Vigor: 60 Dias para Solução Definitiva no Oriente Médio',
        resumo: 'Os presidentes dos EUA, Donald Trump, e do Irã, Masoud Pezeshkian, assinaram nesta quarta-feira (17) um acordo de paz preliminar que já está em vigor. O pacto, mediado pelo Paquistão, visa encerrar a guerra no Oriente Médio e acelerar a reabertura do Estreito de Ormuz. Inicia-se um período de 60 dia',
        imagem: 'https://s2-g1.glbimg.com/VvIZSA4jc0Z1ME34g4V4_jsF1CU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/Q/K/IxGX2BSrGvePTZ6cAdfQ/2026-06-17t161216z-1947210395-rc2svla73zfz-rtrmadp-3-g7-summit-trump.jpg',
        autor: 'G1 Mundo', tempo: 'agora'
    },
    {
        id: 75, categoria: 'internacional',
        titulo: 'Acordo de paz: EUA e Irã encerram operações militares no Oriente Médio',
        resumo: 'Os presidentes Donald Trump (EUA) e Masoud Pezeshkian (Irã) assinaram nesta quarta-feira (17) um acordo de paz histórico, revelando os termos que estabelecem o encerramento imediato e permanente das operações militares entre os países e seus aliados no Oriente Médio, incluindo o Líbano. O documento',
        imagem: 'https://s2-g1.glbimg.com/oJmUTixK_B_Qiv5ocq6PRtALm3k=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/d/q/jB8SVpRKSh1BQB0l1FZQ/fotojet-2026-06-17t194008.597.jpg',
        autor: 'G1 Mundo', tempo: '24 min atrás'
    },
    {
        id: 76, categoria: 'politica',
        titulo: 'Acre: Segurança para Eleições 2026 avança com plano integrado de autoridades',
        resumo: 'Autoridades da segurança pública e da Justiça Eleitoral do Acre se reuniram nesta terça-feira (17) no prédio do TRE-AC, em Rio Branco, para debater o plano integrado de segurança das Eleições de 2026. O planejamento abrange a proteção no transporte das urnas, comunicação integrada, identificação de',
        imagem: 'https://s2-g1.glbimg.com/CJlC-KI-aq7FPpBov2NqaOhN2C0=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/A/P/CfH2INTbyWeLst1XbGCg/midia-de-distribuicao-g1-2026-06-17t184312.172.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 77, categoria: 'politica',
        titulo: 'SP: Câmara adia decisão sobre Psiu e horário de bares para quinta-feira',
        resumo: 'A Câmara Municipal de São Paulo adiou para quinta-feira, dia 18, a votação de duas propostas que alteram a rotina noturna da capital. Os projetos visam abrandar penalidades do Psiu (Programa Silêncio Urbano) e cortar três horas do período de comercialização de bebidas em bares. O adiamento prolonga',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/Ricardo-Nunes-Carnaval-2-e1770637933809-628x353-1.jpg',
        autor: 'Gustavo Nogy', tempo: 'agora'
    },
    {
        id: 78, categoria: 'politica',
        titulo: 'Lula repreende equipe após chegar cedo a reunião do G7 na França',
        resumo: 'O presidente Lula (PT) foi flagrado em áudio, captado durante a cúpula do G7 em Évian, França, nesta quarta-feira, 17, repreendendo sua equipe. A insatisfação de Lula decorreu da chegada antecipada a uma das reuniões de líderes. Ele expressou irritação, afirmando: "Essas coisas que eu fico puto. Só',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/55339414940_191b9a123b_k.jpg',
        autor: 'João Pedro Farah', tempo: 'agora'
    },
    {
        id: 79, categoria: 'politica',
        titulo: 'Tarcísio de Freitas defende Eduardo Bolsonaro após condenação do STF por coação',
        resumo: 'O governador de São Paulo, Tarcísio de Freitas (Republicanos), declarou nesta quarta-feira, 17, que a condenação do ex-deputado federal Eduardo Bolsonaro (PL) por coação, proferida pela Primeira Turma do Supremo Tribunal Federal (STF), é "injusta". A manifestação ocorreu durante um evento de Seguran',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/03/55153332905_72aaf0a20e_k.jpg',
        autor: 'João Pedro Farah', tempo: 'agora'
    },
    {
        id: 80, categoria: 'eventos',
        titulo: 'Saquarema: Shows de Cidade Negra, Veigh e Buchecha abrem etapa mundial de surfe',
        resumo: 'A sexta etapa do Circuito Mundial de Surfe, WSL Sunset 2026, terá sua abertura oficial na Praia de Itaúna, Saquarema (RJ), nesta quinta-feira (18). O evento gratuito, que celebra 50 anos de surfe competitivo, contará com shows de Cidade Negra, Veigh e Buchecha, das 17h às 23h, marcando o início da e',
        imagem: 'https://s2-g1.glbimg.com/yurOb2DZ-yAgQD4pbqdrKjhhdyI=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/r/0/Lkm8DCQaK4JIrkRRfM4A/saquarema-se-prepara-para-receber-o-mundial-de-surfe-com-100-de-ocupacao-hoteleira.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 81, categoria: 'eventos',
        titulo: 'Sorocaba: Encontro da Lua com Mercúrio, Vênus e Júpiter Gera Espetáculo Celeste',
        resumo: 'Na última quarta-feira (17), moradores de Sorocaba (SP) e região, como Tiago Bilar, foram encantados por um espetáculo celeste: o encontro da Lua com Mercúrio, Vênus e Júpiter. Visível a olho nu, o fenômeno, que incluiu a possível ocultação de Vênus pela Lua em algumas áreas, foi registrado em bairr',
        imagem: 'https://s2-g1.glbimg.com/Y5Z1c7TaAoZ76YGpdg5zgCaD2Cg=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/m/m/7WHsgHSCKmcBBf6MlpMg/lua.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 82, categoria: 'eventos',
        titulo: 'Palmeirense de 99 anos ganha festa da Mancha Verde em Marília e revela segredo da longevidade',
        resumo: 'Seu Luiz Gonzaga, um palmeirense apaixonado de 99 anos, foi surpreendido com uma festa de aniversário organizada pela torcida Mancha Verde em Marília (SP) na última sexta-feira (12). A celebração ocorreu no Centro Dia do Idoso (CDI) Anos Dourados, onde ele é atendido há cerca de um ano e meio. Emoci',
        imagem: 'https://s2-g1.glbimg.com/8Hqkz9mpeWT9asWxnIjB7e5HqYo=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/D/V/uc78RyRhyXKBy9rNt3Lw/idoso.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 83, categoria: 'brasil',
        titulo: 'Jovens da Amazônia Legal na reta final de concurso que une contos e Agenda 2030',
        resumo: 'A edição 2026 do concurso cultural \'Conta Um Conto\', promovido pela Fundação Rede Amazônica (FRAM) com apoio do Colégio Lato Sensu, chega à reta final. O projeto mobilizou estudantes de 11 a 17 anos da Amazônia Legal a criarem narrativas inspiradas no tema \'O Conto, a Amazônia e a Agenda 2030\'. A in',
        imagem: 'https://s2-g1.glbimg.com/yl025YKM_grIBanu149Z2s03bRk=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/G/R/H2NjgFRrKY2Mqp03kD3w/whatsapp-image-2026-06-17-at-15.06.24.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 84, categoria: 'brasil',
        titulo: 'Manaus em Foco: Bioeconomy Amazon Summit 2027 Inicia Articulação com Fundação Rede Amazônica',
        resumo: 'A Fundação Rede Amazônica e o Bioeconomy Amazon Summit (BAS) iniciaram, na quarta-feira (17), articulações para a edição de 2027 do evento em Manaus. O encontro, com Mariane Cavalcante (FRA), Matheus Aquino (FRA) e Guilherme Manechini (BAS), discutiu cooperação e locais como o Mercado de Origem. O o',
        imagem: 'https://s2-g1.glbimg.com/NvFN5NvzDPOPZIjpxQ7WOd8M870=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/q/D/pfhfOBTcmbcAsDYyPHpA/whatsapp-image-2026-06-17-at-14.56.06.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 85, categoria: 'brasil',
        titulo: 'Jornalista e radialista Wander Santos morre aos 75 anos em Ipatinga',
        resumo: 'O jornalista e radialista Dilson Francisco Wander Santos, de 75 anos, faleceu na tarde desta quarta-feira (17) em Ipatinga. Fundador do Jornal Classivale, estava internado desde 5 de abril no Hospital Márcio Cunha após infarto grave e parada cardiorrespiratória, enfrentando complicações. Nascido em',
        imagem: 'https://s2-g1.glbimg.com/_MrGFGI_KWAPm-WZlNXXnT9zac4=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/4/v/iNABMfSb6pjiwcmSMfNA/1200x675-81-.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 86, categoria: 'brasil',
        titulo: 'STF Define 60 Dias para Big Techs Assumirem Responsabilidade por Conteúdo no Brasil',
        resumo: 'O STF deu 60 dias para big techs, incluindo Meta e Google, se adequarem às novas regras de responsabilização por conteúdo criminoso no Brasil. A decisão, consolidada nesta quarta (17), torna as plataformas solidariamente responsáveis pela remoção de postagens criminosas graves (ex: terrorismo, racis',
        imagem: 'https://s2-g1.glbimg.com/O7bzOIBMXr5-pD7IiJrXELQW3Mg=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/c/L/YIkBZDT32l9HLqXba1TA/globo-canal-4-20260617-2000-frame-73081.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 87, categoria: 'brasil',
        titulo: '+Milionária 364: Ninguém acerta 6 dezenas e prêmio acumula para R$ 65 milhões',
        resumo: 'O sorteio 364 da +Milionária, realizado nesta quarta-feira (17), não teve ganhador na faixa principal de 6 acertos, acumulando o prêmio para R$ 65 milhões. As dezenas sorteadas foram 12-20-23-29-32-48 e trevos 3-5. Apesar disso, 122.042 apostas foram contempladas em outras categorias, com o maior pr',
        imagem: 'https://s2-g1.glbimg.com/3eHNVM-WGrQ0x2vV3hE0AuZW2xM=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/2/C/HemDcDRHaK2Svsqt1UXw/maismilionaria-364-dkfbz.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 88, categoria: 'brasil',
        titulo: 'Super Sete 861: Ninguém Acerta 7 Números e Prêmio Acumula para R$ 1,9 Milhão',
        resumo: 'O sorteio do concurso 861 da Super Sete, realizado nesta quarta-feira (17), não teve ganhadores na faixa principal de 7 acertos. Com isso, o prêmio acumulou para R$ 1,9 milhão para o próximo sorteio, que ocorrerá na sexta-feira (19). Apesar da ausência de um vencedor máximo, 2 apostas acertaram 6 nú',
        imagem: 'https://s2-g1.glbimg.com/uN8lM0XE_G7JCmwjkZzKMu11yjI=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/t/V/nfrCrFSkulRGSTBiykAg/volantes-super-sete.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 89, categoria: 'brasil',
        titulo: 'Dupla Sena 2971: Ninguém acerta 6 números; prêmio principal acumula para R$ 4,3 milhões',
        resumo: 'O concurso 2971 da Dupla Sena, sorteado nesta quarta-feira (17), não registrou vencedores na faixa principal de 6 acertos em nenhum dos dois sorteios. Com isso, o prêmio maior do 1º sorteio acumulou para R$ 4,3 milhões. Milhares de apostadores em todo o país foram contemplados com prêmios menores, v',
        imagem: 'https://s2-g1.glbimg.com/Zj8ibw_9ha4mtXZ1EJeLvFK66r4=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/5/d/6JyVFkSbOUt6NWn6BIOw/duplasena-2971-eypna.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 90, categoria: 'brasil',
        titulo: 'Lotomania 2938: Ninguém acerta 20 dezenas e prêmio acumula para R$ 3,3 milhões',
        resumo: 'O concurso 2938 da Lotomania, sorteado nesta quarta-feira (17), não teve apostas vencedoras na faixa principal de 20 acertos, resultando no acúmulo do prêmio para R$ 3,3 milhões, a ser disputado no próximo sorteio, na sexta-feira (19). Apesar disso, 8 apostas foram premiadas com R$ 26.486,51 por 19',
        imagem: 'https://s2-g1.glbimg.com/wT6aFv1uGnzXId8Z5q2jYi0IWUI=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/A/Q/MkZYiCRIADqusUBNNs8Q/lotomania-2938-pjlmm.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 91, categoria: 'brasil',
        titulo: 'Loterias Caixa: Resultados e Sorteios Diários Disponíveis para Consulta Online',
        resumo: 'Os resultados dos sorteios das Loterias Caixa, incluindo números e valores dos prêmios, estão acessíveis para consulta. Acompanhe as transmissões ao vivo realizadas pelo portal g1, tanto em sua página oficial quanto no canal do YouTube. Os sorteios ocorrem regularmente de segunda a sábado, com exceç',
        imagem: 'https://s2-g1.glbimg.com/jSxj3I3l-_9A_yX-C63zoFS7EfI=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/B/e/HOxCZpTEOcnOumJ4V1RQ/captura-de-tela-2026-04-30-205329.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 92, categoria: 'brasil',
        titulo: 'Resultado Lotofácil 3713: Prêmio Principal Acumula para R$ 11 Milhões',
        resumo: 'O concurso 3713 da Lotofácil, sorteado nesta quarta-feira (17), não teve apostas com 15 acertos, resultando no acúmulo do prêmio principal para R$ 11 milhões, a serem disputados na próxima quinta-feira (18). Apesar disso, 288 apostas foram premiadas com 14 acertos, recebendo R$ 2.263,28 cada. Houve',
        imagem: 'https://s2-g1.glbimg.com/YYrKweDW2NPndDZrXD_jUVud0zE=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/2/7/n1ANUmSBaUW6TV2TXrqQ/lotofacil-3713-kssbe.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 93, categoria: 'brasil',
        titulo: 'Celina Leão, governadora do DF, é diagnosticada com sinusite após novas dores no peito',
        resumo: 'A governadora do Distrito Federal, Celina Leão (PP), foi internada na tarde desta quarta-feira (17) no Hospital Santa Lúcia, em Brasília, após sentir dores no peito. Exames identificaram sinusite, e ela foi medicada e teve alta no mesmo dia, cancelando agenda oficial. É a segunda internação em menos',
        imagem: 'https://s2-g1.glbimg.com/Aby4pOOWmMKgpDA7NkPk1G1voRY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/p/M/od8Nc4RPaD67XdR9K52g/c0754-lu-saida-celina-01062026-frame-122820.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 94, categoria: 'brasil',
        titulo: 'PM apreende cocaína, crack e maconha em Volta Redonda; suspeitos fogem',
        resumo: 'A Polícia Militar de Volta Redonda (RJ) apreendeu 156 pinos de cocaína, 82 pedras de crack e 31 trouxinhas de maconha na quarta-feira (17), no bairro Vila Americana. Agentes do CPROEIS, com apoio da Secretaria de Ordem Pública, localizaram as drogas após dois suspeitos fugirem pela linha férrea na R',
        imagem: 'https://s2-g1.glbimg.com/q-GJ37JOmsG9rnjRL6oufEcAvtE=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/D/S/W2dxANRKiVIyoxCpmGQA/whatsapp-image-2026-06-17-at-20.51.45-1-.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 95, categoria: 'brasil',
        titulo: 'João Gomes agita Recife em arraial gigante e emociona público com filho de 2 anos no palco',
        resumo: 'O cantor João Gomes transformou o Bairro do Recife em um arraial gigante na quarta-feira (17) com seu projeto \'São João Gomes\'. A apresentação, que iniciou às 20h40, foi marcada pela surpresa do filho Jorge, de 2 anos, no palco, emocionando a multidão. O evento, que incluiu Mestrinho e grupos de art',
        imagem: 'https://s2-g1.glbimg.com/hItrulKq7g8k57Dh3B579eC2K64=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/0/6/smXTwVRQOnykVxRtr1sw/capa-agenda-g1-2026-06-17t221441.464.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 96, categoria: 'brasil',
        titulo: 'Bahia: Homem é Condenado a 15 Anos por Matar Cantor Jô Xavier em Itabela',
        resumo: 'Paulo César Santos, ex-guarda municipal, foi condenado a 15 anos de prisão (regime fechado) nesta quarta (17) pelo assassinato do cantor de arrocha Josemar Xavier Pereira, o Jô Xavier (38). O crime, ocorrido em 27 de abril do ano passado em Itabela (BA) por desentendimento, gerou julgamento de 10h n',
        imagem: 'https://s2-g1.glbimg.com/gCh0XuwjV60nKh7v94KXRde00Kw=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/N/X/LwJ7YMTHOF80Lbg6iPxg/thumb-fotos-2025-05-21t091415.139.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 97, categoria: 'brasil',
        titulo: 'Poço Artesiano: Lei Exige Autorização e Alerta para Multas em 2026',
        resumo: 'A legislação brasileira exige autorização para a perfuração de poços artesianos em quintais, tema relevante para quem busca reduzir a conta de água em 2026. A ação sem permissão pode acarretar multas severas, interdição da estrutura e até a obrigação de seu fechamento. É crucial que moradores, inclu',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/04/Essa-historia-de-fazer-poco-artesiano-no-quintal-de-casa-pode-mesmo.jpeg',
        autor: 'Pedro Myth', tempo: 'agora'
    },
    {
        id: 98, categoria: 'brasil',
        titulo: 'Povo Bajau: Nômades do Mar do Sudeste Asiático com mutação genética para mergulho profundo',
        resumo: 'Os Bajau, conhecidos como Nômades do Mar, são um povo do Sudeste Asiático que, após séculos vivendo sobre o oceano, desenvolveram uma mutação genética. Essa adaptação corporal permite que mergulhem a profundidades de até 60 metros sem equipamento, caçando peixes e construindo suas casas em meio aquá',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/18-Antagonista-7.jpg',
        autor: 'Gabriel Correa', tempo: 'agora'
    },
    {
        id: 99, categoria: 'brasil',
        titulo: 'Tecnologia a Laser Revela Megalópole de 2.500 Anos com 6 Mil Plataformas no Equador',
        resumo: 'Uma megalópole de 2.500 anos foi revelada por tecnologia a laser sob a floresta amazônica no Equador. A descoberta, que inclui cerca de 6 mil plataformas, praças, canais agrícolas e estradas perfeitamente planejadas, desafia séculos de crenças arqueológicas sobre a incapacidade da região de sustenta',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/ea3d5653-f9b2-4c54-9e57-a19a626aa6f9.jpg',
        autor: 'José Dantas', tempo: 'agora'
    },
    {
        id: 100, categoria: 'economia',
        titulo: 'Banco Central corta Selic para 14,25% pela 3ª vez; Fed mantém juros e dólar sobe',
        resumo: 'O Comitê de Política Monetária (Copom) do Banco Central do Brasil reduziu a taxa Selic para 14,25% ao ano nesta quarta-feira, no terceiro corte consecutivo de 0,25 ponto percentual. A decisão ocorre em meio à piora do quadro inflacionário no país e incertezas externas. Nos Estados Unidos, o Fed, sob',
        imagem: 'https://s2-g1.glbimg.com/QuS9KCxLHAxicbSHLaPgHPkegiw=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/q/9/HXqsSQQCAWASfRnlSmFQ/globo-canal-4-20260617-2000-frame-39263.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 101, categoria: 'economia',
        titulo: 'NASA: Sonda em Missão a Asteroide de Metal com Estimativa de US$ 10 Quatrilhões',
        resumo: 'Uma sonda da NASA atravessa o Sistema Solar em missão a um asteroide de metal maciço. Popularmente estimado em US$ 10 mil quatrilhões, um valor que excede amplamente a economia mundial, o corpo celeste levanta discussões sobre um potencial impacto econômico global. A agência ressalta que essa cifra',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/81394842-6c02-4751-98a1-d3b48df5a58f.jpg',
        autor: 'José Dantas', tempo: 'agora'
    },
    {
        id: 102, categoria: 'economia',
        titulo: 'Colheita na Austrália Atrai Milhares de Jovens Estrangeiros Anualmente',
        resumo: 'A colheita sazonal na Austrália atrai milhares de jovens operários estrangeiros anualmente para suas extensas plantações continentais. Esse intenso fluxo migratório sustenta o forte agronegócio local, mas exige dos trabalhadores preparo físico e rigoroso cumprimento de regras imigratórias específica',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/Man_picking_oranges_in_orchard_202606160855.jpeg',
        autor: 'Sabrina Campos', tempo: 'agora'
    },
    {
        id: 103, categoria: 'economia',
        titulo: 'Empresário Paulo Mattos Manifesta Interesse em Comprar a Raízen',
        resumo: 'O empresário Paulo Mattos revelou seu desejo de adquirir a Raízen, gigante do setor de energia e biocombustíveis. A notícia, originalmente publicada pelo portal AgFeed, indica um potencial impacto no mercado corporativo. Detalhes sobre a proposta de compra, valores envolvidos ou o cronograma da poss',
        imagem: 'https://agfeed.com.br/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-17-at-18.39.53.jpeg',
        autor: 'Gustavo Lustosa', tempo: 'agora'
    },
    {
        id: 104, categoria: 'internacional',
        titulo: 'Líder de facção \'Las Águilas\' é morto em ataque a tiros no Aeroporto de Guayaquil',
        resumo: 'Um ataque a tiros nesta quarta-feira (17) no estacionamento do desembarque internacional do Aeroporto José Joaquín de Olmedo, em Guayaquil, Equador, resultou na morte de Carlos Alberto Suástegui Villanueva, líder da facção criminosa \'Las Águilas\'. Dois menores de 15 e 16 anos foram apreendidos com d',
        imagem: 'https://s2-g1.glbimg.com/dvjyu0ol59Rg40O-lHTr0xobzMs=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/1/B/6N0zB3SFCC8VJlp0N9Ig/design-sem-nome-12-.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 105, categoria: 'internacional',
        titulo: 'Trump detalha acordo com Irã no G7, mas adverte: trégua não é definitiva e ameaça ataques',
        resumo: 'Durante a Cúpula do G7, o presidente Donald Trump anunciou detalhes de um acordo de trégua com o Irã, mas alertou que o pacto não é definitivo e ameaçou novos ataques caso o \'regime não se comporte\'. Confirmado por autoridades americanas nesta quarta-feira (17), o documento de 14 pontos prevê um fun',
        imagem: 'https://s2-g1.glbimg.com/hbFUfH8YXcoLtQsiTuQcX0CzKWY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/z/o/LtUBOiQVGe0Sl4kyKSew/globo-canal-4-20260617-2000-frame-64851.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 106, categoria: 'internacional',
        titulo: 'Acordo EUA-Irã, Juros e Copa: Destaques do Cenário Nacional e Internacional',
        resumo: 'Um acordo de paz entre Estados Unidos e Irã prevê ajuda bilionária e renúncia iraniana a armas nucleares. No cenário político nacional, o presidente da Câmara admitiu ter viajado em jato particular de Daniel Vorcaro, a convite de Ciro Nogueira. O Banco Central, pela terceira vez consecutiva, reduziu',
        imagem: 'https://s2-g1.glbimg.com/TdgdJdEM3JRrBbaV1hw7IRhavzk=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/g/K/veduPgSMS9lmE0MbwC1Q/resumao-jn-capa.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 107, categoria: 'internacional',
        titulo: 'EUA Detalham Acordo Preliminar com Irã: US$ 300 Bi e Negociações Nucleares',
        resumo: 'Um oficial dos EUA revelou o texto de um acordo preliminar com o Irã, prevendo um plano de US$ 300 bilhões para a reconstrução iraniana e 60 dias de conversas sobre seu programa nuclear. A divulgação ocorreu enquanto o então presidente Donald Trump deixava a Cúpula do G7, indicando um avanço nas com',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17g7-promo-345EST-kbcf/17g7-promo-345EST-kbcf-mediumSquareAt3X.jpg',
        autor: 'The New York Times', tempo: 'agora'
    },
    {
        id: 108, categoria: 'internacional',
        titulo: 'Trump nega fundo de US$ 300 bilhões para Irã e defende seu acordo em crítica a Obama',
        resumo: 'O ex-presidente Donald Trump negou que os Estados Unidos integrarão um fundo de US$ 300 bilhões para a reconstrução do Irã. Ele defendeu seu próprio acordo com o país, afirmando ser superior ao pacto firmado por Barack Obama em 2015. A declaração reforça a constante disputa política sobre a abordage',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17trump-iran-deal-jtqc/17trump-iran-deal-jtqc-mediumSquareAt3X.jpg',
        autor: 'Erica L. Green and Zolan Kanno-Youngs', tempo: 'agora'
    },
    {
        id: 109, categoria: 'internacional',
        titulo: 'Finlândia Revoga Proibição de Armas Nucleares para Fortalecer OTAN',
        resumo: 'A Finlândia, país nórdico que compartilha uma fronteira de 830 milhas com a Rússia, anunciou a revogação da proibição de armas nucleares em seu território. A medida, que ocorre três anos após sua adesão à Organização do Tratado do Atlântico Norte (OTAN), tem como objetivo declarado fortalecer a alia',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17int-finland-nuclear-vkjl/17int-finland-nuclear-vkjl-mediumSquareAt3X.jpg',
        autor: 'Amelia Nierenberg and Johanna Lemola', tempo: '1h atrás'
    },
    {
        id: 110, categoria: 'internacional',
        titulo: 'Irã Surpreende Trump: Caos Econômico é Arma Após Exigência de Rendição',
        resumo: 'O Irã, apesar de perdas significativas em um confronto com a mais poderosa força militar do mundo, surpreendeu ao demonstrar sua capacidade de usar o caos econômico como arma. A nação emergiu da confrontação provando a eficácia dessa tática, desafiando a exigência de rendição feita por Trump e impac',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17DC-PREXY-mvqj/17DC-PREXY-mvqj-mediumSquareAt3X.jpg',
        autor: 'David E. Sanger', tempo: 'agora'
    },
    {
        id: 111, categoria: 'internacional',
        titulo: 'Acordos EUA-Irã: Comparação Entre Gestões Trump e Obama é Complexa',
        resumo: 'A análise comparativa entre os acordos firmados com o Irã pelas administrações de Donald Trump e Barack Obama apresenta desafios significativos. A dificuldade reside no fato de que o arranjo atual, proposto sob a gestão Trump, consiste em um memorando de entendimento provisório. Este documento tem c',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17int-jcpoa-trump1-kcpq/17int-jcpoa-trump1-kcpq-mediumSquareAt3X.jpg',
        autor: 'Ephrat Livni', tempo: 'agora'
    },
    {
        id: 112, categoria: 'internacional',
        titulo: 'França, \'Time dos Sonhos Africanos\', Bate Senegal em Confronto Simbólico',
        resumo: 'A seleção francesa, descrita como um \'time dos sonhos africanos\' pela forte presença de jogadores com raízes no continente, superou Senegal em um recente confronto. O embate, visto por muitos como um reflexo da herança colonial entre as nações, destaca a crescente africanização das equipes europeias',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17int-senegal-france-new1-wfjp/17int-senegal-france-new1-wfjp-mediumSquareAt3X.jpg',
        autor: 'Saikou Jammeh', tempo: 'agora'
    },
    {
        id: 113, categoria: 'internacional',
        titulo: 'Trump Defende Acordo Iraniano, Critica Opositores e Reacende Ameaças',
        resumo: 'O Presidente Trump defendeu veementemente um novo acordo para encerrar a guerra com o Irã, rebatendo críticos que o consideram menos eficaz que o assinado pelo então Presidente Barack Obama em 2015. Em meio à emergência dos detalhes do pacto, Trump ameaçou retomar os bombardeios ao país persa caso h',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17int-iran-ledeall-1-qzcl/17int-iran-ledeall-1-qzcl-mediumSquareAt3X.jpg',
        autor: 'Erica L. Green, Zolan Kanno-Youngs, Farnaz Fassihi and Michael Levenson', tempo: 'agora'
    },
    {
        id: 114, categoria: 'internacional',
        titulo: 'Novo Acordo com Irã: Plano de US$300 Bilhões e Alívio de Sanções no Horizonte',
        resumo: 'Um novo acordo internacional com o Irã delineia um plano ambicioso de US$ 300 bilhões para a reconstrução do país. A proposta prevê o futuro levantamento de sanções econômicas, oferecendo significativo alívio a Teerã. O pacto, que surge em meio a debates sobre políticas anteriores, como as do govern',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17g7-iran-payouts-trump/17g7-school-strike-1-tbpz-mediumSquareAt3X.jpg',
        autor: 'Pranav Baskar', tempo: '1h atrás'
    },
    {
        id: 115, categoria: 'internacional',
        titulo: 'Microfones \'Quentes\' Flagraram Líderes Como Trump e Carney no G7 na França',
        resumo: 'Durante a cúpula anual do Grupo dos Sete (G7), realizada na França, microfones inesperadamente ativos capturaram trechos de conversas informais entre líderes globais, incluindo Donald Trump e Mark Carney. O incidente proporcionou um raro vislumbre dos bastidores das discussões diplomáticas, reveland',
        imagem: 'https://static01.nyt.com/images/2026/06/17/multimedia/17g7-header-wvjt/17g7-header-wvjt-mediumSquareAt3X.jpg',
        autor: 'Mark Landler', tempo: 'agora'
    },
    {
        id: 116, categoria: 'politica',
        titulo: 'PV oficializa apoio a Marina Silva na corrida pelo Senado por SP',
        resumo: 'Em 17 de junho de 2026, o Partido Verde (PV) oficializou seu apoio à candidatura de Marina Silva (Rede), ex-ministra do Meio Ambiente, ao Senado pelo estado de São Paulo. A decisão agrega um importante respaldo político à campanha de Silva, visando fortalecer sua chapa e consolidar forças para a dis',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Gabriela Echenique', tempo: 'agora'
    },
    {
        id: 117, categoria: 'economia',
        titulo: 'Fed \'Hawkish\' Derruba Iene; Mercado Antecipa Intervenção no Japão',
        resumo: 'Estrategistas globais monitoram de perto uma possível intervenção no iene japonês, após o Federal Reserve adotar uma postura \'hawkish\' na reunião de estreia do governador Kevin Warsh. A decisão provocou uma queda acentuada na moeda japonesa, atingindo patamares que historicamente levaram o Ministéri',
        imagem: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iW3H.7Q_TG6s/v0/1200x-1.jpg',
        autor: 'Matthew Burgess, Carmeli Argana', tempo: 'agora'
    },
    {
        id: 118, categoria: 'economia',
        titulo: 'Ouro Sobe com Otimismo de Acordo EUA-Irã, Desafiando Sinais do Fed',
        resumo: 'O preço do ouro registrou uma valorização, impulsionado pela recente assinatura de um acordo de paz provisório entre os Estados Unidos e o Irã. Esse otimismo no mercado prevaleceu mesmo com o Federal Reserve (Fed) sinalizando um possível aumento da taxa de juros ainda este ano, um movimento que gera',
        imagem: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i6lfn9uk.36o/v0/1200x-1.jpg',
        autor: 'Yihui Xie', tempo: 'agora'
    },
    {
        id: 119, categoria: 'internacional',
        titulo: 'Finlândia revoga proibição de armas nucleares em alinhamento estratégico com OTAN',
        resumo: 'O parlamento da Finlândia aprovou a revogação de uma proibição de décadas sobre armas nucleares. A decisão, tomada no país nórdico, marca uma histórica guinada na política de defesa finlandesa, buscando um alinhamento mais estreito com a estratégia de dissuasão da OTAN. A medida tem como impacto a r',
        imagem: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/06/931/523/Finnish-Soldiers.jpeg?ve=1&tl=1',
        autor: 'Fox News', tempo: 'agora'
    },
    {
        id: 120, categoria: 'internacional',
        titulo: 'Macron e Trump Jantam em Versalhes para Celebrar 250 Anos da Independência dos EUA',
        resumo: 'O presidente dos EUA, Donald Trump, foi recebido por Emmanuel e Brigitte Macron no Palácio de Versalhes, França, na noite de quarta-feira (17), 17 de junho de 2026, para um jantar de gala. O evento celebrou o 250º aniversário da independência americana, após a cúpula do G7. A programação incluiu tou',
        imagem: 'https://s2-g1.glbimg.com/926ViIKvIYkWB97ZWOzpn-kc9zU=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/8/L/HMFVghQ3OG6eoB60AaqQ/2026-06-17t200825z-212293027-rc2wvlac3pgu-rtrmadp-3-g7-summit-versailles.jpg',
        autor: 'G1 Mundo', tempo: '2h atrás'
    },
    {
        id: 121, categoria: 'internacional',
        titulo: 'EUA e Irã Assinam Acordo de Paz de 14 Pontos para o Oriente Médio',
        resumo: 'Estados Unidos e Irã assinaram um acordo de paz de 14 pontos, divulgado oficialmente nesta quarta-feira (17), com o objetivo de pôr fim à guerra no Oriente Médio. O documento prevê o fim imediato do conflito, garantias de que Teerã jamais terá armas nucleares, suspensão de sanções americanas e compe',
        imagem: 'https://s2-g1.glbimg.com/y7pvYM-73WKqvNoNfCWGh2skj9Y=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/Q/T/KbQ9pmR8CydBahmF6EzQ/2026-06-16t180449z-731274368-rc2eulap3g9q-rtrmadp-3-iran-crisis-investment-fund.jpg',
        autor: 'G1 Mundo', tempo: '2h atrás'
    },
    {
        id: 122, categoria: 'politica',
        titulo: 'Crise de Confiança na América Latina: Lições de Messi para a Política?',
        resumo: 'A América Latina vive um momento desafiador, com problemas econômicos, sociais e de segurança, culminando em uma crescente crise de confiança na política. Cidadãos de diversos países sentem-se distantes de seus dirigentes e questionam a capacidade da política em oferecer soluções duradouras. A análi',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/17/17816704126a32220c3befa_1781670412_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 123, categoria: 'politica',
        titulo: 'Câmara de SP adia votação sobre vida noturna; multas e bares após 23h em pauta',
        resumo: 'A Câmara Municipal de São Paulo adiou, nesta quarta-feira (17), a votação de dois projetos de lei que podem remodelar a vida noturna paulistana. As propostas em análise incluem a redução de multas por barulho excessivo e a restrição de funcionamento para bares após as 23h, gerando expectativa sobre',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/17/17817266076a32fd8f6a7bb_1781726607_3x2_rt.jpg',
        autor: 'Priscila Mengue', tempo: 'agora'
    },
    {
        id: 124, categoria: 'politica',
        titulo: 'Lindbergh pede retorno de Bolsonaro à prisão após Glock ser encontrada em blitz no DF',
        resumo: 'O deputado Lindbergh Farias (PT) solicitou o retorno do ex-presidente Jair Bolsonaro à prisão da Papuda, em Brasília, após a Polícia do Distrito Federal encontrar uma pistola Glock registrada em seu nome. A arma foi localizada durante uma blitz na capital federal. Para o parlamentar, o episódio just',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/ministro-alexandre-de-moraes-stf.jpg?w=200',
        autor: 'lorenzosantiago', tempo: 'agora'
    },
    {
        id: 125, categoria: 'politica',
        titulo: 'Lula sela apoio a Laurez Moreira no Tocantins e amplia palanques do PSD em 5 estados',
        resumo: 'O Presidente Lula confirmou seu apoio à pré-candidatura de Laurez Moreira (PSD) ao governo do Tocantins. Esta decisão, tomada para as eleições deste ano, consolida uma aliança estratégica que levará o petista a apoiar candidatos do PSD em um total de cinco estados. Caso o cenário se confirme, o PSD',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/LulaG7.png?w=200',
        autor: 'leonardoribeiro', tempo: 'agora'
    },
    {
        id: 126, categoria: 'politica',
        titulo: 'STF ajusta regras para big techs: responsabilidade solidária com exceção em \'dúvida razoável\'',
        resumo: 'O Supremo Tribunal Federal (STF) fixou uma nova tese jurídica que estabelece a responsabilidade solidária de plataformas digitais, as chamadas big techs, por conteúdos de terceiros no Brasil. A decisão ajusta a punição, abrindo uma exceção para empresas que comprovem ter realizado uma "análise dilig',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/ministro-alexandre-de-moraes-stf.jpg?w=200',
        autor: 'fernandafonseca', tempo: 'agora'
    },
    {
        id: 127, categoria: 'politica',
        titulo: 'Alckmin sanciona Lei Complementar que destrava R$ 3 bilhões para cooperativas',
        resumo: 'O vice-presidente Geraldo Alckmin sancionou recentemente uma Lei Complementar crucial que habilita cooperativas a serem beneficiárias de recursos de fundos regionais, como o FDNE, FDA e FDCO. A medida tem o potencial de destravar até R$ 3 bilhões, impulsionando o desenvolvimento e a capacidade de in',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/WhatsApp-Image-2026-06-16-at-07.36.54.jpeg?w=200',
        autor: 'Arthur Bambini', tempo: 'agora'
    },
    {
        id: 128, categoria: 'internacional',
        titulo: 'Árbitro Somali Eleito Melhor da África é Deportado dos EUA Após Interrogatório',
        resumo: 'O árbitro somali Omar Artan, eleito o melhor da África em 2025, foi deportado do aeroporto de Miami, nos Estados Unidos, após um exaustivo interrogatório de 11 horas. O incidente, noticiado em 17 de junho de 2026, levanta sérios questionamentos sobre a declaração do presidente da FIFA, Gianni Infant',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/17/17817247486a32f64d00029_1781724748_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 129, categoria: 'internacional',
        titulo: 'EUA e Irã Assinam Acordo de Paz de 14 Pontos para o Oriente Médio',
        resumo: 'Nesta quarta-feira, 17 de junho de 2026, Irã e Estados Unidos confirmaram a assinatura de um acordo de paz com 14 pontos, visando o fim do conflito no Oriente Médio, incluindo o Líbano, e a reabertura completa do Estreito de Hormuz. O pacto também estabelece os próximos passos de negociação para um',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/17/17817398506a33314acfb8b_1781739850_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 130, categoria: 'internacional',
        titulo: 'Acordo EUA-Irã assinado por Trump e Pezeshkian entra em vigor imediatamente',
        resumo: 'Um acordo bilateral significativo entre os Estados Unidos e o Irã foi formalizado hoje com a assinatura do documento pelo ex-presidente americano Donald Trump e pelo presidente iraniano Masoud Pezeshkian. O pacto, que entra em vigor imediatamente após sua oficialização pelos líderes, representa um p',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/04/GettyImages-2250797720.jpg?w=200',
        autor: 'jessicapetrovna1', tempo: 'agora'
    },
    {
        id: 131, categoria: 'politica',
        titulo: 'Nunes Marques é Relator de Notícia-Crime de Flávio Bolsonaro Contra Lula no STF',
        resumo: 'O ministro Kassio Nunes Marques, do Supremo Tribunal Federal (STF), foi sorteado nesta quarta-feira, 17, para relatar a notícia-crime apresentada pelo senador e pré-candidato Flávio Bolsonaro (PL-RJ). A ação acusa o presidente Luiz Inácio Lula da Silva (PT) de ameaça e incitação ao crime, dando iníc',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'UOL Notícias', tempo: 'recente'
    },
    {
        id: 132, categoria: 'politica',
        titulo: 'Análise: Pré-Candidatos à Presidência em \'Deserto de Ideias\' e Propostas Superficiais',
        resumo: 'A disputa presidencial brasileira é marcada por um \'deserto de ideias\', com pré-candidatos carecendo de propostas concretas. Nomes como Ratinho Jr, inspirado em Dom Pedro II, Ronaldo Caiado (PSD), focado em dois mandatos em Goiás, Romeu Zema, sem articulação, e Flávio Bolsonaro, com pautas pessoais',
        imagem: 'https://f.i.uol.com.br/fotografia/2024/10/07/17283146526703fd1ce1fc2_1728314652_3x2_xl.jpg',
        autor: 'UOL Notícias', tempo: 'recente'
    },
    {
        id: 133, categoria: 'politica',
        titulo: 'TCE-SP aprova contas de 2025 de Tarcísio, mas relator vê \'orçamento paralelo\'',
        resumo: 'O Tribunal de Contas do Estado de São Paulo (TCE-SP) aprovou nesta quarta-feira, 17 de junho de 2026, as contas referentes ao ano de 2025 do governo Tarcísio de Freitas (Republicanos). A decisão, embora favorável, veio acompanhada de um relatório que apontou a existência de um "orçamento paralelo da',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Bruno Ribeiro', tempo: 'agora'
    },
    {
        id: 134, categoria: 'politica',
        titulo: 'PEC dos Agentes: Alcolumbre pauta flexibilização de aposentadoria no Senado',
        resumo: 'O presidente do Senado, Davi Alcolumbre (União-AP), confirmou nesta quarta-feira, 17 de junho de 2026, que a polêmica Proposta de Emenda à Constituição (PEC) sobre aposentadoria de agentes comunitários de saúde e combate às endemias será votada em plenário na próxima semana. A medida visa flexibiliz',
        imagem: 'https://images.pexels.com/photos/30256874/pexels-photo-30256874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Isadora Albernaz', tempo: 'agora'
    },
    {
        id: 135, categoria: 'politica',
        titulo: 'Câmara aprova MP do Frete com anistia a caminhoneiros que bloquearam rodovias em 2022',
        resumo: 'A Câmara dos Deputados aprovou, em votação simbólica nesta quarta-feira (17 de junho de 2026), a Medida Provisória (MP) do Frete. O texto, que busca endurecer as regras do transporte de cargas e reforçar o cumprimento do piso da categoria, foi significativamente alterado em relação à proposta origin',
        imagem: 'https://images.pexels.com/photos/31283302/pexels-photo-31283302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Augusto Tenório', tempo: 'agora'
    },
    {
        id: 136, categoria: 'eventos',
        titulo: 'Show de Kane: Inglaterra 4 x 2 Croácia eleito o melhor jogo da Copa 2026',
        resumo: 'A Copa do Mundo 2026 reacendeu o entusiasmo dos internautas nesta segunda-feira (17 de junho de 2026), após o confronto entre Inglaterra e Croácia ser aclamado nas redes sociais como o melhor jogo do torneio até o momento. A partida, que terminou com a vitória inglesa por 4 a 2, teve como grande pro',
        imagem: 'https://images.pexels.com/photos/30354454/pexels-photo-30354454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Lívia Lemos, Natalie Cwikler', tempo: 'agora'
    },
    {
        id: 137, categoria: 'eventos',
        titulo: 'Enquete "Casa do Patrão": Parcial revela disputa acirrada com menos de 2% para eliminação',
        resumo: 'A enquete parcial da "Casa do Patrão" indica uma disputa extremamente acirrada para a eliminação, com uma dupla de participantes separados por menos de 2% dos votos. Enquanto a briga pela permanência se intensifica entre esses dois, um terceiro concorrente mantém uma confortável e larga vantagem, as',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/05/a-casa-do-patrao-1.png?w=200',
        autor: 'larissasantos', tempo: 'agora'
    },
    {
        id: 138, categoria: 'eventos',
        titulo: '“Minha Rua Show de Bola” em Cuiabá: 56 Ruas e 300 Vídeos na Disputa por Telões',
        resumo: 'A Prefeitura de Cuiabá lançou o programa “Minha Rua Show de Bola”, que já mobilizou 56 ruas da capital mato-grossense. Moradores enviaram cerca de 300 vídeos, concorrendo à instalação de telões em suas comunidades. A iniciativa, que ocorre em Cuiabá, visa promover a integração e o engajamento comuni',
        imagem: 'https://images.pexels.com/photos/30354454/pexels-photo-30354454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '3h atrás'
    },
];

const videos = [
    {
        id: 1,
        titulo: 'Natureza de Trump mostra que acordo provisório com Irã é uma “aposta”, diz professor | WW',
        thumb: 'https://img.youtube.com/vi/hu1yUoqmWBU/hqdefault.jpg',
        duracao: '08:00',
        videoId: 'hu1yUoqmWBU',
        embedUrl: 'https://www.youtube.com/embed/hu1yUoqmWBU'
    },
    {
        id: 2,
        titulo: 'Análise: Lula usa críticas a Trump como capital político | WW',
        thumb: 'https://img.youtube.com/vi/GhW3w2_Ex6Y/hqdefault.jpg',
        duracao: '08:00',
        videoId: 'GhW3w2_Ex6Y',
        embedUrl: 'https://www.youtube.com/embed/GhW3w2_Ex6Y'
    },
    {
        id: 3,
        titulo: 'STF define ajustes e mantém responsabilização das plataformas | #NewsNoite',
        thumb: 'https://img.youtube.com/vi/k3xyiWYqw7Y/hqdefault.jpg',
        duracao: '08:00',
        videoId: 'k3xyiWYqw7Y',
        embedUrl: 'https://www.youtube.com/embed/k3xyiWYqw7Y'
    },
    {
        id: 4,
        titulo: 'Lula rebate Trump e defende eleições brasileiras | #NewsNoite',
        thumb: 'https://img.youtube.com/vi/_W2joVMw4RI/hqdefault.jpg',
        duracao: '08:00',
        videoId: '_W2joVMw4RI',
        embedUrl: 'https://www.youtube.com/embed/_W2joVMw4RI'
    },
    {
        id: 5,
        titulo: 'Banco Central reduz a taxa básica de juros para 14,25% ao ano; Fed mantém juros nos EUA',
        thumb: 'https://img.youtube.com/vi/QfPv2xJ7rd0/hqdefault.jpg',
        duracao: '08:00',
        videoId: 'QfPv2xJ7rd0',
        embedUrl: 'https://www.youtube.com/embed/QfPv2xJ7rd0'
    },
    {
        id: 6,
        titulo: 'Acesso à Ponte do Esqueleto é fechado após morte de jovem em salto de rope jump',
        thumb: 'https://img.youtube.com/vi/PbOPGD15LtQ/hqdefault.jpg',
        duracao: '08:00',
        videoId: 'PbOPGD15LtQ',
        embedUrl: 'https://www.youtube.com/embed/PbOPGD15LtQ'
    },
];

const enquete = {
    pergunta: 'Qual a prioridade para Cuiabá nos próximos anos?',
    opcoes: [
        { texto: 'Saúde e hospitais', votos: 135 },
        { texto: 'Mobilidade urbana', votos: 199 },
        { texto: 'Segurança pública', votos: 110 },
        { texto: 'Educação e cultura', votos: 187 },
        { texto: 'Saneamento básico', votos: 329 },
    ]
};

const breakingNews = [
    'URGENTE: Alerta Metanol! 13 intoxicações e 1 morte por bebida adulterada em Querência/MT.',
    'AGORA: CGE multa Consórcio Rio Verde em R$ 489,6 mil por fraudes no Ganha Tempo de Cuiabá.',
    'ÚLTIMA HORA: Justiça ordena retorno de descontos de consignados para servidores municipais de Cuiabá.',
];

const cotacoes = [
    { nome: 'Dólar', icone: 'attach_money', valor: 'R$ 5.12', variacao: '+0.4%', direcao: 'up' },
    { nome: 'Euro', icone: 'euro', valor: 'R$ 5.89', variacao: '-0.5%', direcao: 'down' },
    { nome: 'Ibovespa', icone: 'show_chart', valor: '168.454', variacao: '-0.7%', direcao: 'down' },
    { nome: 'Soja (sc)', icone: 'eco', valor: 'R$ 129.26', variacao: '+1.6%', direcao: 'up' },
    { nome: 'Milho (sc)', icone: 'grass', valor: 'R$ 50.70', variacao: '+1.6%', direcao: 'up' },
    { nome: 'Café (sc)', icone: 'coffee', valor: 'R$ 1839', variacao: '-1.8%', direcao: 'down' },
    { nome: 'Algodão (@)', icone: 'agriculture', valor: 'R$ 134.60', variacao: '+6.3%', direcao: 'up' },
    { nome: 'Trigo (sc)', icone: 'bakery_dining', valor: 'R$ 70', variacao: '+4.2%', direcao: 'up' },
    { nome: 'Ouro (g)', icone: 'diamond', valor: 'R$ 713.31', variacao: '+0.4%', direcao: 'up' },
    { nome: 'Petrobras', icone: 'oil_barrel', valor: 'R$ 38.57', variacao: '+0.1%', direcao: 'up' },
    { nome: 'Vale', icone: 'landscape', valor: 'R$ 79.78', variacao: '-2.0%', direcao: 'down' },
    { nome: 'Itaú', icone: 'account_balance', valor: 'R$ 40.80', variacao: '+0.9%', direcao: 'up' },
    { nome: 'Bradesco', icone: 'account_balance', valor: 'R$ 17.55', variacao: '-0.6%', direcao: 'down' },
    { nome: 'Banco do Brasil', icone: 'account_balance', valor: 'R$ 19.41', variacao: '+0.1%', direcao: 'up' },
    { nome: 'S&P 500', icone: 'public', valor: '7420', variacao: '-1.2%', direcao: 'down' },
    { nome: 'Dow Jones', icone: 'public', valor: '51.493', variacao: '-1.0%', direcao: 'down' },
    { nome: 'Boi Gordo (@)', icone: 'pets', valor: 'R$ --', variacao: '0.0%', direcao: 'up' },
    { nome: 'Arroz (sc)', icone: 'rice_bowl', valor: 'R$ 83.97', variacao: '+5.0%', direcao: 'up' },
    { nome: 'Bitcoin', icone: 'currency_bitcoin', valor: 'R$ 329.641', variacao: '-1.6%', direcao: 'down' },
];

const clima = null;

const trending = [
    '#AssedioNaoCuiaba',
    '#AlertaMetanolMT',
    '#CantinaSaudavelMT',
    '#FraudeGanhaTempo',
    '#ServidorConsignado',
    '#CriancasResgatadas',
];
