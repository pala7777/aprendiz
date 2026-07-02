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
    ["metaborreflexo","Reflexo em que a fadiga de um músculo (ex.: respiratório) faz o cérebro reduzir o fluxo de sangue para outros, limitando o esforço."]
  ],

  modules: [
    {
      id: 0, title: "Linguagem comum", img: "assets/img/m0.jpg",
      summary: "Os três modelos mentais que fazem todo o resto fazer sentido.",
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
    { id:1, title:"Correr no plano",         img:"assets/img/m1.jpg", summary:"Contínuo uniforme, rodagem progressiva, fartlek e cross-training.", locked:true },
    { id:2, title:"A montanha",              img:"assets/img/m2.jpg", summary:"Rodagem de montanha, correr × caminhar, descidas e o dano excêntrico.", locked:true },
    { id:3, title:"Fracionado & intensidade",img:"assets/img/m3.jpg", summary:"Interval, repetições, séries de subida e o dosador de tempo-limite.", locked:true },
    { id:4, title:"Respiração",              img:"assets/img/m4.jpg", summary:"Os 4 mecanismos e como treinar a musculatura respiratória.", locked:true },
    { id:5, title:"Montando o plano",        img:"assets/img/m5.jpg", summary:"Periodização, sessão híbrida e sua semana de treino.", locked:true }
  ]
};
