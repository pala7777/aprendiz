/* ============================================================
   CONTEÚDO — Curso #1: Metodologia do Treino de Trail
   Texto original pt-BR (ciência de domínio público).
   ============================================================ */
window.COURSE_TRAIL = {
  id: "trail",
  title: "Metodologia do Treino de Trail",
  subtitle: "Como treinar corrida de montanha de verdade — do plano ao cume, com base na ciência.",
  heroImg: "assets/img/hero.jpg",
  level: "Do zero ao avançado",
  duration: "6 módulos · ~3 h",
  rating: "5.0",
  tracks: [
    { id: "atleta",    icon: "run",   label: "Sou atleta / praticante", desc: "Foco no 'como treinar': sessões prontas, decisões práticas, menos teoria." },
    { id: "treinador", icon: "book",  label: "Sou treinador / estudante", desc: "Fundo técnico completo: fisiologia, estudos, prescrição e periodização." }
  ],

  /* ---------- GLOSSÁRIO (também vira tooltip nos termos do texto) ---------- */
  glossary: [
    ["lactato","Substância produzida quando o corpo gera energia sem oxigênio suficiente. Não é 'vilão' — é combustível e um marcador de intensidade: quanto mais rápido acumula, mais forte está o esforço."],
    ["limiar ventilatório","Ponto em que a respiração 'muda de marcha'. O 1º (VT1) marca o fim do esforço fácil; o 2º (VT2), o fim do esforço sustentável. Delimitam os três domínios de intensidade."],
    ["VT1","Primeiro limiar ventilatório — fronteira entre o domínio moderado (fácil) e o pesado. Abaixo dele você conversa em frases inteiras."],
    ["VT2","Segundo limiar ventilatório — fronteira entre o pesado e o severo. Acima dele o lactato acumula sem parar e o esforço dura pouco."],
    ["carga interna","O custo fisiológico do treino: frequência cardíaca, esforço percebido, lactato. Quanto o treino 'custa' por dentro."],
    ["carga externa","O que você faz, medido fora do corpo: velocidade, potência (watts), desnível, distância."],
    ["fartlek","Treino contínuo com mudanças de ritmo em que a recuperação é feita em ritmo de corrida, não parada. Palavra sueca: 'jogo de ritmo'."],
    ["interval training","Treino fracionado com recuperações curtas e incompletas, acumulando fadiga de propósito."],
    ["método de repetições","Treino fracionado com recuperação ampla, para fazer cada repetição perto da velocidade máxima."],
    ["rodagem","Corrida contínua de volume, base do treino. Na montanha, é o treino 'estrela' do corredor de trail."],
    ["VO2máx","Volume máximo de oxigênio que você consegue usar por minuto. Um teto da sua capacidade aeróbia."],
    ["PAM","Potência aeróbia máxima — a intensidade em que você atinge o VO2máx. Sustentável por poucos minutos (6–9)."],
    ["cadência","Número de passos por minuto. Cai bastante ao caminhar em subida — serve de indicador de correr × caminhar."],
    ["contração excêntrica","Quando o músculo produz força enquanto se alonga — típico das descidas. É a principal causa de dano muscular no trail."],
    ["contração concêntrica","Quando o músculo produz força enquanto encurta — típico das subidas."],
    ["sóleo","Músculo da panturrilha, extensor do tornozelo. Ativa-se mais ao caminhar em subida; propenso a sobrecarga."],
    ["glicogênio","Reserva de carboidrato nos músculos e fígado. Combustível-chave; poupá-lo é estratégico em provas longas."],
    ["velocidade ascensional","Metros de desnível positivo vencidos por hora. ~600 m/h já é estar muito bem treinado."],
    ["densidade","Relação entre tempo de esforço e tempo de recuperação numa sessão (ex.: 1:2, 3:1)."],
    ["polarizar","Separar bem as intensidades: muito volume fácil + pouca intensidade forte, evitando a 'zona cinzenta' do meio."],
    ["tempo-limite","Tempo máximo que se sustenta uma dada intensidade. Base para dosar a duração das repetições."],
    ["débito cardíaco","Quantidade de sangue que o coração bombeia por minuto (volume por batida × frequência)."],
    ["metaborreflexo","Reflexo em que a fadiga de um músculo (ex.: respiratório) faz o cérebro reduzir o fluxo de sangue para outros, limitando o esforço."],
    ["MLSS","Máximo estado estável de lactato — a maior intensidade em que a produção e a remoção de lactato se equilibram. Fica próxima do 2º limiar (VT2)."],
    ["série repetida","Efeito 'repeated bout': após uma exposição a descidas, a musculatura adapta-se e sofre menos dano na próxima. É por isso que se treina descida de forma progressiva."],
    ["velocidade de limiar","Ritmo/velocidade correspondente ao 2º limiar — referência para muitas prescrições de intensidade."],
    ["potência","Medida de carga externa em watts (via sensores como o Stryd na corrida). Vantagem no trail: permite comparar percursos diferentes, o que a velocidade não faz."],
    ["colinas finlandesas","Modalidade de série de subida em que se sobe E desce em intensidade alta (não máxima), recuperando completo embaixo. Nome vindo da escola escandinava."],
    ["tabela isocalórica","Conversão (a partir da equação de Minetti) que dá a velocidade na esteira inclinada com o mesmo gasto do plano. Ex.: 12 km/h no plano ≈ 7,2 km/h a 10%."],
    ["Tim Noakes","👤 Médico e cientista do esporte sul-africano. Propôs o modelo do 'governador central': a fadiga não é só muscular — o cérebro regula (limita) o esforço de forma antecipada, como mecanismo de segurança. Explica por que a musculatura respiratória fatigada faz você desacelerar antes do 'fim' real."],
    ["Véronique Billat","👤 Fisiologista francesa, referência mundial em corrida. Popularizou o treino na velocidade aeróbica máxima (vVO₂máx) e o conceito de 'tempo-limite' (tempo máximo sustentável numa intensidade) — a base para dosar a duração das repetições."],
    ["Alberto Minetti","👤 Fisiologista italiano da locomoção. Mapeou o custo energético de correr/caminhar em diferentes inclinações — origem da 'tabela isocalórica' que converte ritmo do plano em velocidade equivalente na esteira inclinada."]
  ],

  modules: [
    {
      id: 0, title: "Linguagem comum", img: "assets/img/m0.jpg",
      summary: "Os três modelos mentais que fazem todo o resto fazer sentido.",
      learn: ["Carga interna × externa","Limiares VT1/VT2","Os 3 domínios","Zona cinzenta","Contínuo × fracionado"],
      sections: [
        {
          n: 1, title: "Carga interna × carga externa",
          blocks: [
            { type:"prose", html:
              "<p>Toda a metodologia de trail gira em torno de <b>duas medidas diferentes do mesmo esforço</b>:</p>"+
              "<ul><li><b>Carga externa</b> — o que você <i>faz</i>, medido fora do corpo: velocidade, potência (watts), desnível, distância.</li>"+
              "<li><b>Carga interna</b> — o <i>custo fisiológico</i> disso: frequência cardíaca, esforço percebido, lactato.</li></ul>"+
              "<p>No <b>plano</b>, as duas andam quase sempre juntas: correr mais rápido custa mais. Na <b>montanha</b>, elas <b>se descolam</b> — e é exatamente aí que mora o segredo do trail. Numa descida você vai rápido (externa alta) gastando pouco do coração (interna baixa); numa subida, você quase para (externa baixa) mas o esforço explode (interna alta).</p>"+
              "<p>Entender isso muda como você treina, mede e corre: no asfalto você persegue um ritmo estável; na montanha, você persegue um <b>esforço</b> estável enquanto o ritmo sobe e desce o tempo todo.</p>" },
            { type:"visual", component:"decouple", caption:"Arraste o terreno e veja as duas cargas se descolarem." },
            { type:"callout", track:"treinador", tag:"Para treinadores", html:
              "Prescrevemos <b>carga externa</b> (o plano de treino), mas monitoramos a <b>carga interna</b> (a resposta do atleta) para ajustar. Confundir os dois é a origem de metade dos erros de dosagem." },
            { type:"callout", track:"atleta", tag:"Na prática", html:
              "Confiar só no ritmo engana. Num dia quente ou cansado, o mesmo pace custa muito mais. Aprender a ler o esforço (respiração/FC) protege você de exagerar — e de ir devagar demais." },
            { type:"check", q:"Numa descida rápida de trilha, o que normalmente acontece?",
              options:["Carga externa alta (velocidade), carga interna baixa (pouco esforço cardíaco)","Carga externa baixa e carga interna alta","As duas sempre sobem juntas"],
              answer:0, explain:"Na descida você vai rápido (externa alta) com pouco esforço cardiovascular (interna baixa). Esse descolamento é a assinatura do trail." }
          ]
        },
        {
          n: 2, title: "Os três domínios de intensidade",
          blocks: [
            { type:"prose", html:
              "<p>Todo esforço, do trote ao sprint, cabe em <b>três domínios</b>, separados por <b>dois limiares ventilatórios</b> (VT1 e VT2):</p>"+
              "<ul><li>🟢 <b>Moderado</b> — abaixo do VT1. Você conversa em frases inteiras. É a base aeróbia, onde o corpo usa gordura como combustível e onde deve ficar a <b>maior parte do volume</b>.</li>"+
              "<li>🟡 <b>Pesado</b> — entre VT1 e VT2. Respiração forte, frases curtas. Sustentável por dezenas de minutos.</li>"+
              "<li>🔴 <b>Severo</b> — acima do VT2. Falar é quase impossível; o lactato acumula sem parar e você aguenta só poucos minutos.</li></ul>"+
              "<p>Saber em que domínio você está é o que separa treinar <i>com intenção</i> de apenas correr. O erro número 1 é viver no 🟡 pesado — a famosa <b>zona cinzenta</b>: cansa como o forte, mas não rende como o fácil nem como o severo.</p>" },
            { type:"visual", component:"domains", caption:"Toque em cada domínio para ver o que acontece no corpo." },
            { type:"tool", component:"zonas", caption:"Sua ferramenta: descubra os SEUS domínios a partir do seu ritmo de limiar." },
            { type:"callout", track:"treinador", tag:"Modelo fisiológico", html:
              "É o modelo trifásico dominante: VT1 ≈ limiar aeróbio (~2 mmol/L de <span data-term='lactato'>lactato</span>); VT2 ≈ limiar anaeróbio/MLSS (~4 mmol/L). Sustenta a lógica do treino <span data-term='polarizar'>polarizado</span> (~80/20)." },
            { type:"check", q:"O que delimita os três domínios de intensidade?",
              options:["A distância da prova","Os dois limiares ventilatórios (VT1 e VT2)","A inclinação do terreno"],
              answer:1, explain:"VT1 separa moderado de pesado; VT2 separa pesado de severo. São os dois divisores fisiológicos." }
          ]
        },
        {
          n: 3, title: "Contínuo × fracionado",
          blocks: [
            { type:"prose", html:
              "<p>A primeira grande escolha de qualquer sessão:</p>"+
              "<ul><li><b>Contínuo</b> — você corre sem parar (ritmo constante ou variando de forma suave).</li>"+
              "<li><b>Fracionado</b> — você <i>porciona</i> o esforço em blocos separados por recuperação.</li></ul>"+
              "<p>Por que fracionar? Por <b>dois</b> motivos, não um só: (1) para atingir <b>intensidades mais altas</b> do que aguentaria de forma contínua; ou (2) para acumular <b>mais carga total</b> com menos estresse — a mesma intensidade, dividida em pedaços, cansa menos e permite mais volume de qualidade.</p>"+
              "<p>Dentro do fracionado existe um espectro inteiro, definido pela intensidade da recuperação — do <span data-term='fartlek'>fartlek</span> (recuperação intensa) ao <span data-term='método de repetições'>método de repetições</span> (recuperação ampla). Você vai dominar esse espectro nos próximos módulos.</p>" },
            { type:"visual", component:"spectrum", caption:"O espectro que você vai dominar: da recuperação intensa à recuperação ampla." },
            { type:"faca", html:"<b>Faça você — classifique:</b> cada sessão abaixo é contínua ou fracionada? Toque para responder." },
            { type:"classify", items:[
              { text:"40 min em ritmo fácil e constante", answer:"continuo" },
              { text:"10 × 400 m forte com 1 min parado entre eles", answer:"fracionado" },
              { text:"Rodagem começando leve e terminando forte", answer:"continuo" },
              { text:"6 × 3 min subindo, descendo em trote pra recuperar", answer:"fracionado" }
            ]},
            { type:"check", q:"Além de atingir intensidades mais altas, por que mais fracionamos um treino?",
              options:["Para acumular mais carga total com menos estresse fisiológico","Porque é mais divertido","Para gastar menos tempo sempre"],
              answer:0, explain:"Fracionar permite manter boa intensidade com menos fadiga por bloco — mais volume de qualidade acumulado." }
          ]
        }
      ],
      quiz: {
        title: "Teste do Módulo 0",
        questions: [
          { q:"Carga externa é...", options:["O custo fisiológico (FC, esforço)","O que você faz: pace, watts, desnível","Só a frequência cardíaca"], answer:1, explain:"Carga externa = grandeza física do treino. O custo interno é a carga interna." },
          { q:"Na montanha, carga interna e externa...", options:["Andam sempre juntas","Se descolam (ex.: descida = externa alta, interna baixa)","São a mesma coisa"], answer:1, explain:"O descolamento é a assinatura do trail." },
          { q:"O domínio 🔴 severo fica...", options:["Abaixo do VT1","Entre VT1 e VT2","Acima do VT2"], answer:2, explain:"Severo = acima do 2º limiar; insustentável por muito tempo." },
          { q:"A 'zona cinzenta' que se deve evitar é treinar sempre no...", options:["🟢 moderado","🟡 pesado","🔴 severo"], answer:1, explain:"Viver no 🟡 cansa sem gerar as adaptações do fácil nem do forte." },
          { q:"Fracionamos um treino para...", options:["Atingir mais intensidade OU acumular mais carga com menos estresse","Apenas economizar tempo","Evitar recuperação"], answer:0, explain:"Os dois objetivos clássicos do fracionado." }
        ]
      }
    },
    /* ===================== MÓDULO 1 ===================== */
    {
      id:1, title:"Correr no plano", img:"assets/img/m1.jpg",
      summary:"Contínuo uniforme, rodagem progressiva, fartlek e cross-training.",
      learn:["Contínuo uniforme","Rodagem progressiva","Fartlek","As 3 alavancas","Reserva articular","Cross-training"],
      sections:[
        { n:1, title:"Contínuo uniforme × variável", blocks:[
          { type:"prose", html:
            "<p>No plano, o treino contínuo se divide em dois:</p>"+
            "<ul><li><b>Uniforme</b> — mantemos constante a <b>carga externa</b> (velocidade/potência) OU a <b>carga interna</b> (esforço/FC). Se priorizamos manter a FC estável, a velocidade vai caindo conforme a fadiga; se priorizamos a velocidade, a FC sobe.</li>"+
            "<li><b>Variável</b> — variamos a intensidade de propósito, <i>sem parar</i>. Dois tipos: a <b>rodagem progressiva</b> (começa suave e termina forte, perto do 2º limiar) e o <b>fartlek</b>.</li></ul>"+
            "<p>Por que treinar variação no plano? Porque é assim que ensaiamos as <b>transições de intensidade</b> que a montanha vai exigir o tempo todo.</p>" },
          { type:"check", q:"Num contínuo uniforme por carga interna, o que acontece com a velocidade ao longo do treino?",
            options:["Fica exatamente constante","Tende a cair, para manter o esforço/FC estável","Aumenta sempre"], answer:1,
            explain:"Se o alvo é manter a carga interna constante, com a fadiga você desacelera um pouco — a velocidade cede para a FC não subir." }
        ]},
        { n:2, title:"Fartlek — o treino estrela fora da montanha", blocks:[
          { type:"prose", html:
            "<p>A ideia-chave (e contraintuitiva): no <b>fartlek</b>, as <b>recuperações são em ritmo de corrida contínua</b> — não caminhando nem parado. Isso o separa do fracionado e é o que simula as <b>descidas</b> do trail (velocidade que se mantém enquanto o esforço cai).</p>"+
            "<p>Você progride o fartlek com <b>três alavancas</b>: <b>intensidade</b> (diferença de ritmo entre a parte rápida e a recuperação), <b>volume</b> (tempo total das partes rápidas) e <b>densidade</b> (a razão esforço:recuperação, de 1:4 para iniciantes até 6:1 para avançados).</p>"+
            "<p>Regra de ouro: quanto <b>menor o tempo de esforço, maior a velocidade</b>. E o bom corredor <span data-term='polarizar'>polariza</span> bem — roda suave de verdade e acelera de verdade, sem cair na zona cinzenta.</p>" },
          { type:"visual", component:"spectrum", caption:"O fartlek é o extremo de recuperação intensa deste espectro." },
          { type:"callout", track:"atleta", tag:"Na prática", html:
            "Um fartlek para começar: 10 × 1min30 forte / 1min em <b>ritmo de corrida</b> (não trote lento!). Evolua primeiro a densidade, depois a intensidade." },
          { type:"check", q:"O que diferencia o fartlek de um treino intervalado?",
            options:["No fartlek a recuperação é intensa (ritmo de corrida)","No fartlek você para completamente","Não há diferença"], answer:0,
            explain:"A recuperação 'rápida' é a assinatura do fartlek — imita a descida do trail." }
        ]},
        { n:3, title:"Cross-training e a reserva articular", blocks:[
          { type:"prose", html:
            "<p>Trocar parte do volume de corrida por <b>bike, elíptico ou ski-roller</b> tem dois motivos fortes:</p>"+
            "<ul><li><b>Poupar a reserva articular</b> — o 'orçamento' de impactos que suas articulações toleram ao longo da vida. Quanto menos você gasta por ciclo, mais longa a carreira. Por isso: não abusar do volume de corrida.</li>"+
            "<li><b>Trabalhar leve sem estragar a técnica</b> — o treino fácil polarizado só funciona com um 1º limiar alto; quem tem limiar baixo precisa correr lento demais (técnica pendular ruim). Meios com menos massa muscular resolvem isso.</li></ul>"+
            "<p>Detalhe fisiológico: a corrida tem uma das <b>piores relações carga interna/externa</b> (muita musculatura envolvida). A bike, sentado e mais localizada, tem relação bem melhor.</p>" },
          { type:"check", q:"Por que usar bike/elíptico ajuda quem tem 1º limiar baixo?",
            options:["Permite treinar leve sem correr lento demais e degradar a técnica","Porque queima mais caloria","Porque é sempre mais intenso"], answer:0,
            explain:"Com menos massa muscular envolvida, dá pra atingir a carga interna baixa sem a técnica pendular ruim da corrida muito lenta." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 1", questions:[
        { q:"Rodagem progressiva é...", options:["Um treino fracionado com pausas","Um contínuo variável que sobe a intensidade gradualmente","Correr sempre no mesmo ritmo"], answer:1, explain:"Começa suave e termina forte, sem parar." },
        { q:"No fartlek, a recuperação é feita...", options:["Parado","Caminhando","Em ritmo de corrida contínua"], answer:2, explain:"Recuperação intensa — imita as descidas." },
        { q:"As três alavancas de progressão do fartlek são...", options:["Intensidade, volume e densidade","Força, mobilidade e cadência","Sono, dieta e hidratação"], answer:0, explain:"Intensidade (diferença de ritmo), volume (tempo forte) e densidade (razão esforço:recuperação)." },
        { q:"A 'reserva articular' se refere a...", options:["Quanto glicogênio você tem","O total de impactos que a articulação tolera ao longo da vida","Sua flexibilidade"], answer:1, explain:"Poupá-la (menos volume de impacto) preserva longevidade esportiva." },
        { q:"Comparada à bike, a corrida tem uma relação carga interna/externa...", options:["Melhor","Pior (mais custo para a mesma velocidade)","Idêntica"], answer:1, explain:"Muita massa muscular e ativação do tronco tornam a corrida mais 'cara' fisiologicamente." }
      ]}
    },

    /* ===================== MÓDULO 2 ===================== */
    {
      id:2, title:"A montanha", img:"assets/img/m2.jpg",
      summary:"Rodagem de montanha, correr × caminhar, descidas e o dano excêntrico.",
      learn:["Rodagem de montanha","Correr × caminhar","11–13%","Sóleo","Dano excêntrico","Velocidade ascensional"],
      sections:[
        { n:1, title:"A rodagem de montanha", blocks:[
          { type:"prose", html:
            "<p>A rodagem na montanha é o <b>treino estrela do corredor de trail</b>. A orografia impõe variação de carga externa que você <b>não consegue eliminar</b> — então o objetivo passa a ser <b>manter a carga interna estável</b> enquanto o ritmo sobe e desce.</p>"+
            "<p>Você ainda pode atuar sobre essa variabilidade: buscar a máxima intensidade sustentável, insistir em correr enquanto o coração permite, ou — de forma <b>proativa</b> — alternar correr e caminhar conforme a inclinação.</p>" },
          { type:"visual", component:"decouple", caption:"Na montanha, carga interna e externa vivem descoladas." },
          { type:"check", q:"Na rodagem de montanha, o que buscamos manter estável?",
            options:["A velocidade","A carga interna (esforço)","O desnível por km"], answer:1,
            explain:"A velocidade oscila com o terreno; o que se mantém estável é o esforço interno." }
        ]},
        { n:2, title:"Correr × caminhar nas subidas", blocks:[
          { type:"prose", html:
            "<p>Existe um ponto de inclinação — em torno de <b>11 a 13%</b> para a maioria dos corredores recreativos — a partir do qual <b>caminhar gasta menos energia que correr</b>. É <b>dinâmico</b>: quanto mais rápido/treinado o atleta, mais alto o ponto (elite: 15–17% ou mais).</p>"+
            "<p>O bom corredor de montanha <b>antecipa</b> a caminhada (não espera 'estourar'). E cuidado com o <span data-term='sóleo'>sóleo</span>: caminhar em subida o ativa mais que correr — abusar sobrecarrega.</p>"+
            "<p>Um estudo com 8 corredores de elite mostrou que <b>caminhar em subida é um padrão locomotor distinto</b> de correr no plano/descida — ou seja, precisa ser <b>treinado especificamente</b>. E melhor economia caminhando aparece com <b>menor cadência</b>. Indicadores no relógio: <span data-term='cadência'>cadência</span> abaixo de ~140 passos/min ou tempo de contato acima de ~400–500 ms = você está caminhando.</p>" },
          { type:"img", src:"assets/img/diagrams/correr-caminhar.jpg", alt:"Correr ou caminhar na subida", caption:"O ponto de transição correr → caminhar (~11–13% recreativo)." },
          { type:"tool", component:"correrCaminhar", caption:"Ajuste inclinação e nível e veja o ponto de troca." },
          { type:"callout", track:"treinador", tag:"Para treinadores", html:
            "Prescreva o padrão de caminhar em subida forte de forma explícita e verifique no arquivo (cadência/tempo de contato) se o atleta o executou — é habilidade específica, não decorre de ser bom no plano." },
          { type:"check", q:"Por que treinar 'caminhar em subida' especificamente?",
            options:["Porque é um padrão locomotor diferente de correr","Porque caminhar é sempre melhor","Não precisa treinar"], answer:0,
            explain:"O estudo mostrou que a economia caminhando em subida não se correlaciona com a economia correndo — é habilidade à parte." }
        ]},
        { n:3, title:"Descidas, motricidade e o limitante nº1", blocks:[
          { type:"prose", html:
            "<p>O <b>dano muscular das descidas</b> — causado pela <span data-term='contração excêntrica'>contração excêntrica</span> — é o <b>principal limitante do rendimento</b> em montanha. A boa notícia: com exposição progressiva, a musculatura se adapta (efeito de <span data-term='série repetida'>série repetida</span>) e passa a sofrer menos dano. Pré-requisito: uma boa base de <b>força</b> antes.</p>"+
            "<p>Também se treina aqui a <b>motricidade e a percepção na descida</b> (onde pisar, ler o terreno) — que gasta energia física <i>e</i> mental em quem não está acostumado.</p>"+
            "<p>Para modelar a rodagem, vá além de km: use a <span data-term='velocidade ascensional'>velocidade ascensional</span> (~600 m/h já é estar muito bem treinado), o <b>perfil</b> (nº de subidas/descidas) e a <b>tecnicidade</b>.</p>" },
          { type:"img", src:"assets/img/diagrams/excentrico.jpg", alt:"O dano excêntrico das descidas", caption:"A contração excêntrica das descidas — o principal limitante." },
          { type:"tool", component:"ascensional", caption:"Calcule sua velocidade ascensional." },
          { type:"check", q:"Qual é o principal limitante do rendimento em provas de montanha?",
            options:["A capacidade pulmonar","O dano muscular das descidas (excêntrico)","A cadência baixa"], answer:1,
            explain:"O dano excêntrico das descidas é o fator que mais limita — por isso se treina força e exposição progressiva." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 2", questions:[
        { q:"O ponto aproximado em que caminhar vira mais econômico (recreativo) é...", options:["3–5%","11–13%","25%+"], answer:1, explain:"~11–13% para a maioria; sobe com o nível do atleta." },
        { q:"Caminhar em subida sobrecarrega principalmente o...", options:["Sóleo","Bíceps","Trapézio"], answer:0, explain:"O sóleo é mais ativado ao caminhar em subida do que ao correr." },
        { q:"A decisão de caminhar deve ser...", options:["Reativa (só quando estourar)","Proativa (antecipada)","Nunca"], answer:1, explain:"O corredor treinado antecipa; não espera as pulsações dispararem." },
        { q:"O dano das descidas vem da contração...", options:["Concêntrica","Excêntrica","Isométrica"], answer:1, explain:"A excêntrica (músculo produz força alongando) é a que gera microlesão." },
        { q:"~600 m/h de velocidade ascensional indica um atleta...", options:["Iniciante","Muito bem treinado","Lesionado"], answer:1, explain:"Num circuito, 600 m/h é referência de bom nível." }
      ]}
    },

    /* ===================== MÓDULO 3 ===================== */
    {
      id:3, title:"Fracionado geral", img:"assets/img/m3.jpg",
      summary:"Interval × repetições, quando a FC engana e o dosador de tempo-limite.",
      learn:["Espectro do fracionado","Interval × repetições","Quando a FC engana","Tempo-limite (Billat)","Perda de velocidade","Potência × capacidade"],
      sections:[
        { n:1, title:"O espectro: fartlek → interval → repetições", blocks:[
          { type:"prose", html:
            "<p>O fracionado é um espectro definido pela <b>intensidade da recuperação</b>:</p>"+
            "<ul><li><b>Fartlek</b> — recuperação intensa (ritmo de corrida).</li>"+
            "<li><b>Interval training</b> — recuperação curta e <b>incompleta</b> (30 s a 1min30): você <i>acumula fadiga</i> de propósito.</li>"+
            "<li><b>Método de repetições</b> — recuperação <b>ampla</b>: cada repetição sai perto da velocidade máxima.</li></ul>"+
            "<p>Escolher o método é escolher <i>o que</i> você quer: treinar sob fadiga (interval) ou fazer cada tiro na melhor qualidade (repetições).</p>" },
          { type:"visual", component:"spectrum", caption:"Deslize e veja como a recuperação define o método." },
          { type:"check", q:"No interval training, a recuperação é...", options:["Ampla, para descansar total","Curta e incompleta, acumulando fadiga","Inexistente"], answer:1,
            explain:"O objetivo é treinar sob fadiga crescente — recuperação incompleta." }
        ]},
        { n:2, title:"Quando a frequência cardíaca engana", blocks:[
          { type:"prose", html:
            "<p>Dois cuidados com a <b>FC</b> no fracionado:</p>"+
            "<ul><li><b>Esforços curtos (menos de 1 min):</b> a FC <b>não</b> acompanha a intensidade real — ela demora a subir. Use velocidade/<span data-term='potência'>potência</span> ou esforço percebido.</li>"+
            "<li><b>Fadiga cardíaca:</b> ao longo de um interval, a FC vai <b>subindo</b> mesmo que o esforço muscular não aumente. Isso porque o coração bombeia menos sangue por batida (queda do volume sistólico) e precisa bater mais vezes para manter o <span data-term='débito cardíaco'>débito cardíaco</span>. Ou seja: FC subindo no fim ≠ você se esforçando mais.</li></ul>" },
          { type:"callout", track:"treinador", tag:"Para treinadores", html:
            "Interpretar a subida de FC no fim de um interval como 'mais intensidade' é um erro clássico. É o coração compensando a fadiga — a carga externa (ritmo) é o indicador mais fiel ali." },
          { type:"check", q:"No fim de um interval, a FC sobe mesmo sem aumentar o esforço muscular porque...",
            options:["O músculo está mais forte","O coração compensa a queda do volume sistólico batendo mais","A temperatura caiu"], answer:1,
            explain:"Fadiga cardíaca: menos sangue por batida → mais batidas para manter o débito cardíaco." }
        ]},
        { n:3, title:"Dosar por tempo-limite e a hora de parar", blocks:[
          { type:"prose", html:
            "<p>A escola francesa de <span data-term='Véronique Billat'>Véronique Billat</span> dá um método transferível: cada intensidade tem um <span data-term='tempo-limite'>tempo-limite</span> (quanto se aguenta nela), e a duração da repetição é uma <b>fração</b> dele.</p>"+
            "<ul><li><b>Potência aeróbia máxima (PAM)</b> — tempo-limite 6–9 min → repetições curtas (15–30 s) ou longas (2–4 min).</li>"+
            "<li><b>2º limiar</b> — tempo-limite ~60 min → repetições de 15–20 min.</li></ul>"+
            "<p>Critério moderno para <b>parar a sessão</b>: quando a velocidade cai <b>10–15%</b> em relação ao alvo, encerre — dali em diante você só acumula fadiga sem o estímulo buscado.</p>"+
            "<p>Para progredir: por <b>potência</b> (mesma distância, mais rápido) ou por <b>capacidade</b> (mesmo ritmo, distância maior).</p>" },
          { type:"tool", component:"zonas", caption:"Ancore suas intensidades a partir do ritmo de limiar." },
          { type:"check", q:"Segundo o modelo de tempo-limite, repetições na PAM devem durar...",
            options:["30–60 min","15–30 s ou 2–4 min","Sempre 10 min exatos"], answer:1,
            explain:"Na PAM (tempo-limite 6–9 min) usam-se repetições curtas ou de 2–4 min; não se passa de ~50–60% do tempo-limite." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 3", questions:[
        { q:"O que define fartlek, interval e repetições no espectro?", options:["A distância total","A intensidade da recuperação","A hora do dia"], answer:1, explain:"Da recuperação intensa (fartlek) à ampla (repetições)." },
        { q:"A frequência cardíaca é POUCO confiável em...", options:["Esforços curtos (menos de 1 min) e sob fadiga","Rodagens longas fáceis","Repouso"], answer:0, explain:"Em tiros curtos e com fadiga, a FC não reflete a intensidade real." },
        { q:"FC subindo no fim de um interval significa...", options:["Mais esforço muscular","O coração compensando a fadiga (não mais esforço)","Erro do relógio"], answer:1, explain:"Fadiga cardíaca — menos sangue por batida, mais batidas para o mesmo débito." },
        { q:"O 'tempo-limite' é um conceito associado a...", options:["Alberto Minetti","Véronique Billat","Tim Noakes"], answer:1, explain:"Billat popularizou o tempo-limite para dosar repetições." },
        { q:"Deve-se encerrar a série quando a velocidade cai...", options:["1–2%","10–15%","50%"], answer:1, explain:"Queda de 10–15% indica fadiga excessiva — para o estímulo pretendido, encerre." }
      ]}
    },

    /* ===================== MÓDULO 4 ===================== */
    {
      id:4, title:"Séries de subida e descida", img:"assets/img/m2.jpg",
      summary:"O fracionado específico da montanha: decisões, modalidades e o que a ciência diz.",
      learn:["Objetivo & métrica","Potência (Stryd)","Modalidades","Colinas finlandesas","Tabela de Minetti","Séries de descida"],
      sections:[
        { n:1, title:"As decisões de uma série de subida", blocks:[
          { type:"prose", html:
            "<p>Montar uma série de subida é escolher com consciência em alguns eixos:</p>"+
            "<ul><li><b>Objetivo</b> — motricidade (terreno técnico) ou desenvolvimento muscular/cardiovascular (piso firme). O professor prioriza o muscular/cardio em bons caminhos, deixando a motricidade para as rodagens.</li>"+
            "<li><b>Alvo bioenergético</b> — potência aeróbia máxima (PAM) ou zona do 2º limiar.</li>"+
            "<li><b>Métrica</b> — a <span data-term='potência'>potência</span> (sensor Stryd) é a estrela aqui: permite <b>comparar ladeiras diferentes</b>, o que a velocidade não faz; a FC serve para séries longas, não curtas.</li></ul>"+
            "<p>Recuperar <b>descendo em trote</b> adiciona o estímulo excêntrico das descidas — com uma pausa curta embaixo, senão vira fartlek.</p>" },
          { type:"check", q:"Por que a potência (Stryd) é especialmente útil nas séries de subida?",
            options:["Porque mede calorias","Porque permite comparar percursos/ladeiras diferentes","Porque substitui o treino"], answer:1,
            explain:"A velocidade só compara a mesma ladeira; a potência compara percursos diferentes." }
        ]},
        { n:2, title:"Modalidades e a inclinação que escolhe o músculo", blocks:[
          { type:"prose", html:
            "<p>Três <b>modalidades</b>:</p>"+
            "<ul><li><b>Só subida</b> — recupera descendo em trote ou parado.</li>"+
            "<li><b>Subida e descida intensas</b> — as <span data-term='colinas finlandesas'>colinas finlandesas</span>: sobe e desce forte, recupera completo embaixo.</li>"+
            "<li><b>Só descida</b> — muito potente, mas logisticamente difícil (precisa de teleférico ou esteira com declive).</li></ul>"+
            "<p>A <b>inclinação seleciona o músculo</b>: suave → <b>tornozelo</b> (panturrilha); ~10% → <b>quadril + quadríceps</b>; forte → ainda mais quadril + <b>isquiotibiais</b>. Acima de <b>20%</b> a subida vira contração quase só concêntrica. Por isso: variar a inclinação = variar o estímulo, e a força para trail prioriza o <b>quadril</b>.</p>"+
            "<p>Sem montanha por perto? A <span data-term='tabela isocalórica'>tabela isocalórica</span> de <span data-term='Alberto Minetti'>Alberto Minetti</span> converte ritmo do plano em velocidade equivalente na <b>esteira inclinada</b> — ex.: 12 km/h no plano ≈ 7,2 km/h a 10%.</p>" },
          { type:"img", src:"assets/img/diagrams/musculo-inclinacao.jpg", alt:"A inclinação escolhe o músculo", caption:"A inclinação seleciona o músculo recrutado." },
          { type:"img", src:"assets/img/diagrams/modalidades.jpg", alt:"Modalidades de série de subida", caption:"As três modalidades de série de subida." },
          { type:"callout", track:"atleta", tag:"Na prática", html:
            "Esteira inclinada é ouro: acumula desnível positivo (trabalho concêntrico) sem o dano das descidas, poupando articulação — ótimo para incluir força no mesmo dia." },
          { type:"check", q:"As 'colinas finlandesas' são...",
            options:["Só descida em teleférico","Subir E descer forte, recuperando completo embaixo","Caminhar em subida"], answer:1,
            explain:"Modalidade em que tanto a subida quanto a descida são intensas." }
        ]},
        { n:3, title:"Séries de descida e o que a ciência diz", blocks:[
          { type:"prose", html:
            "<p>A <b>série de descida</b> ataca de frente o limitante nº 1 do trail (o dano excêntrico). Mas exige cuidado:</p>"+
            "<ul><li><b>Força prévia</b> — sem base, o dano é excessivo e atrapalha o resto dos treinos.</li>"+
            "<li><b>Técnica que 'flui'</b> — quem freia/entra de calcanhar gera muito dano; se não flui, descarte a sessão.</li>"+
            "<li><b>Inclinação ≤ 20%</b> — acima disso vira frenagem pura, perde-se a mecânica. (Em preparações de elite chega-se a ~1000 m de desnível negativo por sessão.)</li></ul>"+
            "<p>E sobre a <b>duração ideal</b> das repetições? Dois estudos (Barnes, com 5 grupos; Ferley, com 24 corredores) mostram que <b>não existe uma duração 'melhor' universal</b> — cada qualidade (VO₂máx, economia, velocidade de limiar) melhora mais com um tipo diferente de intervalo. Ou seja: varie conforme o objetivo.</p>" },
          { type:"callout", track:"treinador", tag:"Evidência", html:
            "Direção sólida, doses de elite: os ~1000 m D− por sessão vêm de preparação de alto rendimento (ex.: mundial de Peñagolosa). Não transponha isso a um recreativo — comece com pouco e progrida." },
          { type:"check", q:"Sobre a duração 'ideal' dos intervalos de subida, a ciência mostra que...",
            options:["Existe uma duração perfeita para tudo","Depende do objetivo — não há uma única melhor","Quanto mais longo, melhor sempre"], answer:1,
            explain:"Cada variável (VO₂máx, economia, limiar) responde melhor a um tipo diferente de intervalo." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 4", questions:[
        { q:"A métrica que permite comparar ladeiras diferentes é...", options:["A velocidade","A potência (Stryd)","O tempo total"], answer:1, explain:"A velocidade só compara a mesma subida; a potência compara percursos." },
        { q:"Numa subida de ~10%, além da panturrilha, quem entra forte?", options:["Quadril e quadríceps","Bíceps","Abdômen apenas"], answer:0, explain:"Extensores de quadril e quadríceps ganham protagonismo." },
        { q:"A tabela isocalórica (Minetti) serve para...", options:["Calcular calorias da dieta","Converter ritmo do plano em velocidade na esteira inclinada","Medir a FC"], answer:1, explain:"Ex.: 12 km/h no plano ≈ 7,2 km/h a 10% de inclinação." },
        { q:"Para séries de descida, um pré-requisito é...", options:["Nenhum","Boa base de força e técnica que flui","Estar exausto antes"], answer:1, explain:"Sem força prévia e boa técnica, o dano é excessivo." },
        { q:"Acima de que inclinação a descida vira 'frenagem pura'?", options:["10%","20%","50%"], answer:1, explain:"Acima de ~20% perde-se a mecânica e o aproveitamento elástico." }
      ]}
    },

    /* ===================== MÓDULO 5 ===================== */
    {
      id:5, title:"Respiração", img:"assets/img/m4.jpg",
      summary:"Os 4 mecanismos e como treinar a musculatura respiratória.",
      learn:["Débito cardíaco","Metaborreflexo","Governador central","Padrão ventilatório","Estabilização","PowerBreathe"],
      sections:[
        { n:1, title:"Por que a respiração limita o rendimento", blocks:[
          { type:"prose", html:
            "<p>A musculatura que move a caixa torácica é um <b>limitante treinável</b> — e muito subestimado. Dois dos mecanismos:</p>"+
            "<ul><li><b>Competição pelo <span data-term='débito cardíaco'>débito cardíaco</span></b> — pulmões e pernas disputam o oxigênio bombeado. Músculos respiratórios eficientes 'roubam' menos O₂ das pernas.</li>"+
            "<li><b>Metaborreflexo respiratório</b> — quando a musculatura respiratória fatiga, ela sinaliza ao cérebro, que reduz o fluxo de sangue para as pernas <i>de forma antecipada</i>, por segurança. É o modelo do <b>'governador central'</b> de <span data-term='Tim Noakes'>Tim Noakes</span>. Treinar a respiração empurra esse gatilho para mais tarde.</li></ul>" },
          { type:"img", src:"assets/img/diagrams/respiracao.jpg", alt:"Os quatro mecanismos da respiração", caption:"Os 4 mecanismos pelos quais a respiração afeta o rendimento." },
          { type:"callout", track:"treinador", tag:"Conceito-chave", html:
            "Não é só o músculo da perna que 'acaba' — é o cérebro que corta o esforço ao receber sinais de fadiga respiratória. Daí o ganho de treinar a inspiração." },
          { type:"check", q:"O 'governador central' (Tim Noakes) diz que a fadiga é regulada...",
            options:["Só pelos músculos das pernas","Pelo cérebro, de forma antecipada e protetora","Pela temperatura ambiente"], answer:1,
            explain:"O cérebro limita o esforço como mecanismo de segurança, antes do 'fim' real do músculo." }
        ]},
        { n:2, title:"Padrão ventilatório e estabilização do tronco", blocks:[
          { type:"prose", html:
            "<p>Mais dois mecanismos:</p>"+
            "<ul><li><b>Padrão ventilatório</b> — quem tem <b>volume corrente baixo</b> depende de respirar com alta frequência e fatiga antes. Musculatura forte = respiração mais ampla e profunda.</li>"+
            "<li><b>Estabilização do tronco</b> — parte da musculatura inspiratória também estabiliza o tronco. Nas <b>descidas</b> há um conflito: alta demanda de respiração <i>e</i> de equilíbrio ao mesmo tempo. Respiração bem treinada melhora o equilíbrio e a economia (anti-rotação/anti-inclinação).</li></ul>" },
          { type:"check", q:"Um corredor com volume corrente baixo tende a...",
            options:["Respirar mais devagar e fundo","Depender de frequência respiratória alta e fatigar antes","Não se cansar nunca"], answer:1,
            explain:"Volume corrente baixo → mais frequência → fadiga mais cedo." }
        ]},
        { n:3, title:"Como treinar a musculatura respiratória", blocks:[
          { type:"prose", html:
            "<p>Use dispositivos de <b>limiar</b> (ex.: <b>PowerBreathe</b>), <b>não</b> máscaras de restrição de fluxo (essas treinam frequência, não força).</p>"+
            "<p>Referência: pressão inspiratória máxima (PImáx) ≈ <b>2 cmH₂O por kg</b>; treine a <b>60–80% da PImáx</b> — a mesma lógica de trabalhar a 60–80% do 1RM, mas para inspirar.</p>"+
            "<p>Progressões: começar resistido em repouso (2×15 a 50%), depois integrar a <b>pranchas</b> (dupla função), ao <b>cardiovascular</b> (bike + dispositivo) e à <b>expansão restrita</b> da caixa torácica (posição aero das subidas de kilômetro vertical).</p>" },
          { type:"callout", track:"atleta", tag:"Na prática", html:
            "Baixo custo, alto retorno subutilizado: 60–80% da PImáx, integrando nas pranchas que você já faz. Ganho extra de estabilização de tronco nas descidas." },
          { type:"check", q:"Qual dispositivo é recomendado para treinar a FORÇA respiratória?",
            options:["Máscara de restrição de fluxo","Dispositivo de limiar (ex.: PowerBreathe)","Nenhum, é impossível treinar"], answer:1,
            explain:"O dispositivo de limiar exige força para vencer a resistência; a máscara mexe na frequência, não na força." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 5", questions:[
        { q:"Na 'competição pelo débito cardíaco', músculos respiratórios eficientes...", options:["Roubam menos O₂ das pernas","Gastam mais O₂","Não influenciam nada"], answer:0, explain:"Sobra mais oxigênio para a locomoção." },
        { q:"O metaborreflexo respiratório faz o cérebro...", options:["Aumentar o fluxo às pernas","Reduzir o fluxo às pernas, limitando o esforço","Elevar a temperatura"], answer:1, explain:"Vasoconstrição protetora que limita as pernas antecipadamente." },
        { q:"O modelo do 'governador central' é de...", options:["Véronique Billat","Tim Noakes","Alberto Minetti"], answer:1, explain:"Tim Noakes propôs o governador central." },
        { q:"Para treinar força respiratória, deve-se usar...", options:["Dispositivo de limiar (PowerBreathe)","Máscara de restrição","Corrida em jejum"], answer:0, explain:"Limiar treina força; máscara treina frequência." },
        { q:"A intensidade recomendada é...", options:["10–20% da PImáx","60–80% da PImáx","100% sempre"], answer:1, explain:"Análogo a 60–80% do 1RM, mas para a inspiração." }
      ]}
    },

    /* ===================== MÓDULO 6 ===================== */
    {
      id:6, title:"Montando o plano", img:"assets/img/m5.jpg",
      summary:"Periodização, sessão híbrida e sua semana de treino.",
      learn:["Periodização tradicional","Periodização invertida","Sessão híbrida","Durabilidade","≤2 montanha/semana","Progressão de desnível"],
      sections:[
        { n:1, title:"Periodização: tradicional × invertida", blocks:[
          { type:"prose", html:
            "<p>Toda periodização vai do <b>geral ao específico</b> — o que muda é a <i>definição</i> de específico.</p>"+
            "<ul><li><b>Tradicional</b> (provas mais curtas): começa com volume alto e intensidade baixa → progride para menos volume e mais intensidade.</li>"+
            "<li><b>Invertida</b> (longa distância / ultra): começa com <b>intensidade alta</b> (o mais distante do específico) e depois <b>soma volume</b> a intensidades moderadas.</li></ul>"+
            "<p>Por quê? Porque o específico da ultra não é a intensidade — é <b>sustentar muito volume por muito tempo</b>. Então a intensidade alta é a parte 'geral', feita cedo.</p>" },
          { type:"img", src:"assets/img/diagrams/periodizacao.jpg", alt:"Periodização tradicional versus invertida", caption:"Tradicional × invertida: o que muda é a definição de 'específico'." },
          { type:"check", q:"Na periodização invertida (longa distância), começamos por...",
            options:["Volume alto e intensidade baixa","Intensidade alta, somando volume depois","Só descanso"], answer:1,
            explain:"O 'específico' da ultra é sustentar volume — então a intensidade vem primeiro, como parte geral." }
        ]},
        { n:2, title:"Sessão híbrida e durabilidade", blocks:[
          { type:"prose", html:
            "<p>Para a maioria dos corredores, o <b>tempo</b> é o limitante — então combinar conteúdos numa <b>sessão híbrida</b> rende mais (ex.: força complementar + esteira inclinada + respiração no mesmo dia).</p>"+
            "<p>Um método poderoso é treinar a <b>durabilidade</b>: fazer um bloco no 2º limiar <b>depois</b> de pré-fadigar com séries de subida — aproveitando a fadiga muscular e a depleção de <span data-term='glicogênio'>glicogênio</span> para gerar uma adaptação potente em menos tempo.</p>" },
          { type:"faca", html:"<b>Pense:</b> quais dois conteúdos do seu treino você poderia juntar numa sessão só sem perder qualidade? (ex.: técnica + força; Z2 + respiratório)." },
          { type:"check", q:"Treinar 'durabilidade' significa...",
            options:["Fazer intensidade já cansado/pré-fadigado, de propósito","Só treinar descansado","Evitar qualquer fadiga"], answer:0,
            explain:"Um bloco de qualidade após pré-fadiga simula o fim da prova e gera adaptação forte." }
        ]},
        { n:3, title:"Montando a sua semana", blocks:[
          { type:"prose", html:
            "<p>Regras de bolso que fecham o curso:</p>"+
            "<ul><li><b>No máximo 2 sessões de montanha por semana</b> — mais que isso costuma ser excessivo para a recuperação.</li>"+
            "<li><b>O desnível aumenta progressivamente</b> ao longo do ciclo (dar tempo à musculatura tolerar as descidas).</li>"+
            "<li><b>Equilíbrio entre engessar e dar liberdade</b> — a rodagem de montanha é o treino mais lúdico; não a sufoque com exigências demais.</li></ul>"+
            "<p>Com os 6 módulos, você tem o 'armário de treino' completo: sabe <b>o que</b> cada sessão faz e <b>por quê</b> — que era a promessa lá do início.</p>" },
          { type:"check", q:"Quantas sessões de montanha por semana costuma ser o teto saudável?",
            options:["1","2","5"], answer:1, explain:"Até 2/semana; acima disso a recuperação costuma sofrer." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 6", questions:[
        { q:"Toda periodização vai de...", options:["Específico → geral","Geral → específico","Aleatório"], answer:1, explain:"O que muda é a definição de 'específico'." },
        { q:"Na longa distância, o específico é...", options:["A intensidade máxima","Sustentar volume por muito tempo","O sprint final"], answer:1, explain:"Por isso a intensidade alta é feita cedo (periodização invertida)." },
        { q:"Uma 'sessão híbrida' serve para...", options:["Aproveitar o tempo combinando conteúdos","Treinar só um estímulo","Descansar"], answer:0, explain:"Combina dois conteúdos numa sessão — útil quando o tempo é limitante." },
        { q:"Durabilidade se treina fazendo qualidade...", options:["Totalmente descansado","Após pré-fadiga (ex.: pós séries de subida)","Sem nunca cansar"], answer:1, explain:"A pré-fadiga + depleção de glicogênio potencializa a adaptação." },
        { q:"O teto de sessões de montanha por semana é...", options:["2","4","7"], answer:0, explain:"Até 2/semana para preservar a recuperação." }
      ]}
    }
  ],

  /* ===================== PROVA FINAL DO CURSO ===================== */
  finalExam:{
    title:"Prova final — Metodologia do Treino de Trail",
    pass:70,
    questions:[
      { q:"O que define o treino de montanha em relação ao asfalto?", options:["Buscar ritmo estável","Manter a carga interna estável enquanto a externa varia","Correr sempre no máximo"], answer:1, explain:"Na montanha, carga interna e externa se descolam — o alvo é o esforço estável." },
      { q:"O domínio 🔴 severo fica...", options:["Abaixo do VT1","Entre VT1 e VT2","Acima do VT2"], answer:2, explain:"Acima do 2º limiar, insustentável por muito tempo." },
      { q:"No fartlek, a recuperação é...", options:["Parado","Caminhando","Em ritmo de corrida contínua"], answer:2, explain:"Recuperação intensa — imita as descidas." },
      { q:"A 'reserva articular' justifica...", options:["Correr mais volume sempre","Usar cross-training para poupar impacto","Ignorar a força"], answer:1, explain:"Poupar impacto preserva longevidade esportiva." },
      { q:"O ponto aproximado em que caminhar vira mais econômico (recreativo) é...", options:["3–5%","11–13%","25%+"], answer:1, explain:"~11–13%, subindo com o nível do atleta." },
      { q:"O principal limitante do rendimento em montanha é...", options:["A capacidade pulmonar","O dano muscular das descidas (excêntrico)","A cadência"], answer:1, explain:"O dano excêntrico das descidas." },
      { q:"FC subindo no fim de um interval indica...", options:["Mais esforço muscular","Fadiga cardíaca (compensação), não mais esforço","Erro de medição"], answer:1, explain:"Menos sangue por batida → mais batidas para o mesmo débito." },
      { q:"O 'tempo-limite' (dosar repetições) é associado a...", options:["Alberto Minetti","Véronique Billat","Tim Noakes"], answer:1, explain:"Billat popularizou o tempo-limite." },
      { q:"Acima de que inclinação a descida vira 'frenagem pura'?", options:["10%","20%","40%"], answer:1, explain:"Acima de ~20% perde-se a mecânica elástica." },
      { q:"O 'governador central' (a fadiga regulada pelo cérebro) é de...", options:["Tim Noakes","Alberto Minetti","Véronique Billat"], answer:0, explain:"Tim Noakes." },
      { q:"Para treinar FORÇA respiratória, usa-se...", options:["Máscara de restrição de fluxo","Dispositivo de limiar (PowerBreathe)","Nada"], answer:1, explain:"Limiar treina força; máscara treina frequência." },
      { q:"Na periodização invertida (ultra), começa-se por...", options:["Volume alto e intensidade baixa","Intensidade alta, somando volume depois","Só descanso"], answer:1, explain:"O específico da ultra é sustentar volume — a intensidade vem antes." }
    ]
  }
};
