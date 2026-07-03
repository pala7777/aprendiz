/* ============================================================
   CONTEÚDO — Curso #2: Força para Esportes de Resistência
   Texto original pt-BR (ciência de domínio público).
   Foco: como o treino de força deixa o corredor de maratona
   e trail mais econômico, mais resistente à fadiga e sem lesão.
   ============================================================ */
window.COURSE_FORCA = {
  id: "forca",
  title: "Força para Esportes de Resistência",
  subtitle: "Por que — e como — treinar força deixa o corredor de maratona e trail mais rápido, mais durável e sem lesão.",
  heroImg: "assets/img/covers/ccover-forca.jpg",
  level: "Do zero ao avançado",
  duration: "7 módulos · ~3,5 h",
  rating: "5.0",
  tracks: [
    { id: "atleta",    icon: "run",   label: "Sou atleta / praticante", desc: "Foco no 'como treinar': decisões práticas, sessões prontas, menos teoria." },
    { id: "treinador", icon: "book",  label: "Sou treinador / estudante", desc: "Fundo técnico completo: fisiologia, estudos, prescrição e periodização." }
  ],

  /* ---------- GLOSSÁRIO (também vira tooltip nos termos do texto) ---------- */
  glossary: [
    ["força máxima","A maior força que um músculo consegue produzir numa única contração, independentemente do tempo. Base sobre a qual se constroem as outras manifestações de força."],
    ["RFD","Taxa de desenvolvimento de força (Rate of Force Development): quão rápido você consegue produzir força. Como a passada dura milésimos de segundo, importa mais a força que você aplica em pouco tempo do que a força máxima absoluta."],
    ["stiffness","Rigidez do sistema músculo-tendíneo — a capacidade de armazenar e devolver energia elástica como uma mola. Mais stiffness = menos energia desperdiçada a cada passada."],
    ["eficiência neuromuscular","Quão bem o sistema nervoso coordena os músculos: recrutamento, sincronização das unidades motoras, relaxamento dos antagonistas e ativação dos sinergistas. Melhorá-la deixa o gesto mais econômico sem ganhar massa."],
    ["ângulo de penação","O ângulo com que as fibras musculares se inserem no tendão. Treino com cargas altas pode aumentá-lo (mais fibras em paralelo), o que melhora a economia de corrida."],
    ["sarcômeros em série","Sarcômeros (as unidades contráteis) alinhados em sequência ao longo da fibra. Mais deles = fibra mais longa = maior velocidade de contração. Adaptação típica do trabalho excêntrico."],
    ["sarcômeros em paralelo","Sarcômeros somados lado a lado, aumentando a força e o ângulo de penação sem alongar a fibra. Adaptação típica do trabalho com cargas altas — ligada à economia."],
    ["hipertrofia sarcoplasmática","Aumento de volume muscular por acúmulo de fluido e tecido conjuntivo, não de material contrátil. É a que MENOS interessa ao corredor: peso extra sem força proporcional."],
    ["contração excêntrica","Quando o músculo produz força enquanto se alonga — típico das descidas e da fase de descida de um agachamento. É a principal causa de dano muscular, mas também um estímulo potente de adaptação."],
    ["contração concêntrica","Quando o músculo produz força enquanto encurta — a fase de 'empurrar' o solo ou subir a carga. É onde se busca a máxima velocidade de execução."],
    ["cadeia cinética fechada","Exercício em que a extremidade (o pé) está fixa contra uma superfície — como agachamento ou leg press. Reproduz melhor a estrutura interna da corrida."],
    ["cadeia cinética aberta","Exercício em que a extremidade se move livre no ar — como a mesa flexora. Útil para isolar um músculo, mas menos parecido com o gesto de correr."],
    ["tripla extensão","A extensão simultânea de tornozelo, joelho e quadril que gera o impulso da passada. É o movimento-alvo de todo o treino de força do corredor."],
    ["economia de corrida","O gasto energético para correr a uma dada velocidade. Ser mais econômico = gastar 'menos gasolina' no mesmo ritmo — um dos maiores fatores de rendimento na resistência."],
    ["durabilidade","A capacidade de manter o rendimento estável apesar da fadiga acumulada. Chamada de 'quarta dimensão do rendimento' — dois atletas com o mesmo VO₂máx podem diferir muito aqui."],
    ["fibras tipo I","Fibras musculares lentas, muito resistentes à fadiga e altamente oxidativas. São as protagonistas na corrida de resistência."],
    ["fibras tipo IIA","Fibras rápidas com boa capacidade oxidativa — um meio-termo. O treino de força bem feito empurra as fibras mistas para este perfil, mais resistente à fadiga."],
    ["fibras tipo IIX","Fibras rápidas glicolíticas, potentes mas que fatigam muito rápido. Adiar a entrada delas em cena poupa energia e retarda a fadiga."],
    ["creatina quinase","Enzima (CK) que vaza para o sangue quando há dano muscular. Serve de marcador: quanto mais alta, maior o dano sofrido pelo músculo."],
    ["cãibra muscular","Contração involuntária e dolorosa. A ciência atual associa-a mais à fadiga e ao dano muscular (com alteração do controle neuromuscular) do que à desidratação."],
    ["disponibilidade para treinar","A fração de sessões planejadas que o atleta consegue de fato completar sem parar por lesão. É um dos maiores preditores de rendimento — treinar de forma encadeada rende mais que treinos brilhantes e interrompidos."],
    ["sobreuso","Lesão que resulta do acúmulo de carga sobre uma estrutura até ela não sustentar mais a tensão. É o tipo mais comum na corrida — e o mais prevenível com força."],
    ["treino concorrente","Fazer força e resistência dentro do mesmo período. O desafio é organizá-las para que as adaptações de uma não atrapalhem as da outra ('interferência')."],
    ["perda de velocidade","Quanto a velocidade de execução cai ao longo de uma série. É o termômetro do esforço: perto de ~40% de perda você está chegando à falha muscular e gerando muita fadiga."],
    ["caráter do esforço","Quão perto da falha muscular você treina. Longe da falha = mais adaptações neurais e menos fadiga; perto da falha = mais fadiga e mais hipertrofia (que o corredor não quer)."],
    ["falha muscular","O ponto em que não se consegue completar mais nenhuma repetição com boa técnica. Para o corredor, treinar até a falha costuma custar mais fadiga do que rende."],
    ["1RM","Repetição máxima: a carga que você consegue levantar uma única vez. Referência para dosar todas as outras. 'Xrm' = a carga que permite exatamente X repetições."],
    ["isometria excêntrica","Uma pausa isométrica inserida no fim da fase excêntrica (ex.: segurar 3–8 s no fundo do agachamento) antes de subir explosivo. Ótima para resiliência e coordenação no corredor de trail."],
    ["multisaltos","Exercícios de saltos repetidos (pliometria). Enorme potencial para economia e para retardar a fadiga — mas com risco de lesão se mal executados, por isso reservados a quem tem boa técnica e supervisão."],
    ["dominante de joelho","Exercícios cujo movimento principal é a extensão do joelho — agachamento, subida ao caixão, afundo. Trabalham sobretudo o quadríceps."],
    ["dominante de quadril","Exercícios cujo movimento principal é a extensão do quadril — peso morto, elevação de quadril. Trabalham a cadeia posterior (glúteos e isquiotibiais)."],
    ["VAM","Velocidade aeróbica máxima — o ritmo em que se atinge o VO₂máx. Melhorar a força transfere-se, entre outras coisas, num aumento da velocidade associada ao VO₂máx."],
    ["DOMS","Dor muscular de aparição tardia (aquela que aparece 24–48 h depois). Um pouco no início é normal; se persistir semana após semana, o treino de força está atrapalhando a corrida."],
    ["efeito de série repetida","Após uma primeira exposição a um estímulo que causa dano (descidas, excêntrico), o músculo se adapta e sofre menos dano na próxima. Base para progredir com segurança."],
    ["José González-Badillo","👤 Pesquisador espanhol, referência mundial no treino baseado na velocidade. Mostrou que controlar a perda de velocidade da série (em vez de contar repetições até a falha) gera mais transferência com menos fadiga."],
    ["Andy Jones","👤 Fisiologista britânico do exercício, cientista por trás de projetos de recorde na maratona. Popularizou a ideia da 'durabilidade' como a quarta dimensão do rendimento de resistência."],
    ["Timothy Suchomel","👤 Pesquisador da força aplicada ao esporte. Descreveu como o ganho de força se traduz (ou não) em rendimento em três fases: déficit de força, fase associativa e reserva de força."]
  ],

  modules: [
    /* ===================== MÓDULO 1 ===================== */
    {
      id: 1, title: "Por que treinar força se você corre?", img: "assets/img/covers/fcover-1.jpg",
      summary: "Os quatro argumentos que tiram a força do 'opcional' e a colocam no centro do treino do corredor.",
      learn: ["Os 4 argumentos","Prevenção de lesões","Sobreuso","Disponibilidade para treinar","Força ≠ musculação"],
      sections: [
        {
          n: 1, title: "A força não é um extra — é a base",
          blocks: [
            { type:"prose", html:
              "<p>Ainda é comum ouvir: <i>“sou corredor, força é coisa de academia”</i>. A ciência das últimas duas décadas desmontou essa ideia. O <b>treino de força</b> deixou de ser negociável na preparação de qualquer corredor — de rua, maratona ou trail.</p>"+
              "<p>Não se trata de virar levantador de peso. Trata-se de usar a força como uma <b>ferramenta</b> que resolve quatro problemas concretos do corredor. Este módulo apresenta os quatro; os próximos aprofundam cada um.</p>"+
              "<ul><li>1️⃣ <b>Menos lesões</b> → mais dias treinando → mais rendimento.</li>"+
              "<li>2️⃣ <b>Melhor <span data-term='economia de corrida'>economia de corrida</span></b> → você gasta menos energia no mesmo ritmo.</li>"+
              "<li>3️⃣ <b>Fadiga mais tardia</b> → você segura o ritmo até o fim (a <span data-term='durabilidade'>durabilidade</span>).</li>"+
              "<li>4️⃣ <b>Menos <span data-term='cãibra muscular'>cãibras</span></b> → sobretudo no trail, onde elas mais atrapalham.</li></ul>"+
              "<p>Repare: em <b>três dos quatro</b> o objetivo final <i>não é ficar forte</i> — é <b>correr melhor</b>. A força é meio, não fim. Guarde essa frase; ela vai reaparecer o curso inteiro.</p>" },
            { type:"img", src:"assets/img/diagrams/f-quatro.jpg", alt:"Os quatro argumentos para treinar força", caption:"Os quatro motivos pelos quais a força merece lugar de destaque no treino do corredor." },
            { type:"callout", track:"treinador", tag:"Para treinadores", html:
              "Um treinador que não usa a força como recurso está deixando de trabalhar com o rigor que o atleta merece. Há mais de uma década a literatura é clara: a pergunta deixou de ser <i>“devo incluir força?”</i> e passou a ser <i>“como periodizá-la sem atrapalhar a corrida?”</i>." },
            { type:"check", q:"Em três dos quatro argumentos, qual é o objetivo final do treino de força?",
              options:["Ganhar massa muscular","Melhorar o rendimento de corrida (a força é meio, não fim)","Aumentar o agachamento"],
              answer:1, explain:"Prevenir lesão pode ter valor próprio, mas economia, durabilidade e cãibras têm como fim CORRER melhor — não ficar forte." }
          ]
        },
        {
          n: 2, title: "Argumento 1 — menos lesões, mais disponibilidade",
          blocks: [
            { type:"prose", html:
              "<p>É o argumento que atletas e treinadores já aceitam com mais facilidade — e vale reforçá-lo. A maioria das lesões do corredor é por <span data-term='sobreuso'>sobreuso</span>: o acúmulo de carga sobre uma estrutura (tendão, osso, músculo) até que ela não sustente mais a tensão e ceda.</p>"+
              "<p>Uma revisão clássica (Lauersen e colaboradores) mostrou que um bom programa de força pode prevenir <b>cerca de um terço</b> do total de lesões e <b>quase metade</b> das lesões por sobreuso. O músculo forte funciona como um <b>amortecedor</b>: absorve carga que, de outra forma, iria para as estruturas passivas.</p>" },
            { type:"prose", html:
              "<p>Mas o ponto mais poderoso é indireto. Um estudo com atletas de elite mostrou que a <b><span data-term='disponibilidade para treinar'>disponibilidade para treinar</span></b> — conseguir encadear semanas sem parar por lesão — é um fator-chave de rendimento:</p>"+
              "<ul><li>Quem completou <b>mais de 80%</b> das sessões planejadas teve <b>~7× mais chance</b> de atingir o objetivo da temporada.</li>"+
              "<li>Cada semana que precisou ser <b>modificada de forma substancial</b> por causa de uma lesão <b>reduziu em ~26%</b> a probabilidade de alcançar a meta.</li></ul>"+
              "<p>A lição: um plano brilhante que vive sendo interrompido rende menos que um plano bom executado de ponta a ponta. E a força é a principal ferramenta para manter você <b>na estrada</b>.</p>" },
            { type:"callout", track:"atleta", tag:"Na prática", html:
              "O ganho da força muitas vezes não aparece num treino específico — aparece nos treinos que você <b>deixou de perder</b>. Consistência é rendimento. A força compra consistência." },
            { type:"check", q:"Por que a 'disponibilidade para treinar' é tão decisiva?",
              options:["Porque treinar cansado é melhor","Porque encadear semanas sem parar por lesão rende muito mais que treinos ótimos e interrompidos","Porque reduz o VO₂máx"],
              answer:1, explain:"No estudo, completar >80% das sessões deu ~7× mais chance de atingir a meta; cada semana perdida por lesão custou ~26%." },
            { type:"faca", html:"<b>Reflita:</b> nos últimos 12 meses, quantas semanas de treino você perdeu (ou teve que modificar muito) por dor ou lesão? Esse número é o seu maior 'vazamento' de rendimento." }
          ]
        },
        {
          n: 3, title: "O mal-entendido: força não é musculação",
          blocks: [
            { type:"prose", html:
              "<p>O medo mais comum do corredor é <i>“vou ficar pesado e lento”</i>. Ele vem de confundir <b>duas coisas diferentes</b>:</p>"+
              "<ul><li>🏋️ <b>Hipertrofia por volume</b> (musculação estética) — muitas repetições perto da <span data-term='falha muscular'>falha</span>, buscando tamanho. Gera <span data-term='hipertrofia sarcoplasmática'>hipertrofia sarcoplasmática</span>: peso extra sem força proporcional. É o que o corredor <b>NÃO</b> quer.</li>"+
              "<li>⚡ <b>Força neural</b> — cargas mais altas, poucas repetições, <b>longe da falha</b>, buscando que o sistema nervoso use melhor os músculos que você já tem. Ganha-se força <b>sem</b> ganhar praticamente nada de peso.</li></ul>"+
              "<p>O corredor treina a <b>segunda</b>. O objetivo é uma <span data-term='eficiência neuromuscular'>eficiência neuromuscular</span> melhor — coordenação, não volume. Por isso o treino do corredor tem cara diferente do treino do fisiculturista, mesmo usando os mesmos aparelhos.</p>" },
            { type:"faca", html:"<b>Faça você — força neural ou hipertrofia estética?</b> Classifique cada abordagem pelo que ela prioriza." },
            { type:"classify", labels:[["neural","Força neural (corredor)"],["hipertrofia","Hipertrofia estética"]], items:[
              { text:"3–5 repetições com carga alta, longe da falha", answer:"neural" },
              { text:"4×12 até quase não conseguir mais, buscando tamanho", answer:"hipertrofia" },
              { text:"Subir a carga o mais rápido possível (intenção de velocidade)", answer:"neural" },
              { text:"Priorizar o 'pump' e o volume muscular", answer:"hipertrofia" }
            ]},
            { type:"check", q:"O que o corredor busca no treino de força?",
              options:["Máxima hipertrofia (tamanho)","Força neural: usar melhor os músculos que já tem, quase sem ganhar peso","Bater recordes de agachamento"],
              answer:1, explain:"Adaptações neurais e de eficiência melhoram a corrida sem o peso extra da hipertrofia sarcoplasmática." }
          ]
        }
      ],
      quiz: {
        title: "Teste do Módulo 1",
        questions: [
          { q:"Quantos argumentos justificam o treino de força para o corredor?", options:["Dois","Quatro","Sete"], answer:1, explain:"Lesões, economia, fadiga tardia e cãibras." },
          { q:"O tipo de lesão mais comum na corrida é por...", options:["Trauma agudo","Sobreuso (acúmulo de carga)","Frio"], answer:1, explain:"O sobreuso é o mais comum — e o mais prevenível com força." },
          { q:"Completar mais de 80% das sessões planejadas se associou a...", options:["Mais lesões","~7× mais chance de atingir o objetivo","Nada"], answer:1, explain:"Disponibilidade para treinar é um forte preditor de rendimento." },
          { q:"A hipertrofia que o corredor NÃO quer é a...", options:["Sarcoplasmática (peso sem força proporcional)","Neural","Nenhuma"], answer:0, explain:"Peso extra sem ganho de força correspondente prejudica quem corre." },
          { q:"Em três dos quatro argumentos, o fim do treino de força é...", options:["Ficar forte","Correr melhor (a força é meio)","Emagrecer"], answer:1, explain:"Economia, durabilidade e cãibras visam o rendimento de corrida." }
        ]
      }
    },

    /* ===================== MÓDULO 2 ===================== */
    {
      id: 2, title: "Argumento 2 — economia de corrida", img: "assets/img/covers/fcover-2.jpg",
      summary: "Como a força faz você gastar menos energia no mesmo ritmo — a fundo, com os mecanismos.",
      learn: ["Gastar menos 'gasolina'","RFD & força máxima","Stiffness elástico","Ângulo de penação","Sarcômeros série × paralelo"],
      sections: [
        { n:1, title:"Gastar menos gasolina no mesmo ritmo", blocks:[
          { type:"prose", html:
            "<p>Imagine dois carros no mesmo ritmo: um gasta 8 L/100 km, o outro 6. O segundo é mais <b>econômico</b>. Na corrida é igual: a <span data-term='economia de corrida'>economia de corrida</span> é quanta energia você gasta para manter uma dada velocidade. Melhorá-la é como andar mais com o mesmo tanque.</p>"+
            "<p>Três revisões científicas (2016, 2018 e 2024) confirmam algo que já se suspeitava desde os anos 1990: o treino de força tem um <b>enorme potencial</b> para reduzir o gasto energético da corrida. E o melhor — sem custo de peso, porque o ganho é sobretudo <b>neural e estrutural</b>, não de massa.</p>"+
            "<p>Como um trabalho que parece tão distante de correr (levantar cargas) deixa a corrida mais barata? Por <b>três mecanismos</b>. Vamos a eles.</p>" },
          { type:"check", q:"O que é 'economia de corrida'?",
            options:["A velocidade máxima que você atinge","Quanta energia você gasta para manter um dado ritmo","Sua frequência cardíaca de repouso"], answer:1,
            explain:"Mais econômico = menos energia para o mesmo ritmo. É um dos grandes fatores de rendimento na resistência." }
        ]},
        { n:2, title:"Mecanismo A — coordenação e mola elástica", blocks:[
          { type:"prose", html:
            "<p>O primeiro ganho é <b>neuromuscular</b>. Treino com cargas altas movidas rápido (a chamada força explosiva / <span data-term='RFD'>RFD</span> e <span data-term='força máxima'>força máxima</span>) melhora a <span data-term='eficiência neuromuscular'>eficiência neuromuscular</span>:</p>"+
            "<ul><li>Melhor <b>coordenação</b> entre músculos e dentro de cada músculo;</li>"+
            "<li>Melhor <b>sincronização e frequência</b> de disparo das unidades motoras;</li>"+
            "<li>Menos co-ativação dos <b>antagonistas</b> (músculos que 'freiam') e melhor ação dos <b>sinergistas</b>.</li></ul>"+
            "<p>Por que isso importa numa passada? Porque você tem pouquíssimo tempo para aplicar força: o pé fica no chão só <b>250 a 300 ms</b>. Nesse instante, você usa apenas <b>20–25%</b> da sua força máxima. Quem produz força mais <i>rápido</i> (mais RFD) aproveita melhor esse instante — daí a economia.</p>"+
            "<p>O segundo ganho é o <b>elástico</b>: mais <span data-term='stiffness'>stiffness</span> músculo-tendíneo. Um tendão mais 'rígido na medida certa' funciona como uma <b>mola</b> — armazena a energia do impacto e a devolve na saída, de graça. Menos energia desperdiçada por passada.</p>" },
          { type:"callout", track:"atleta", tag:"Na prática", html:
            "Você não corre 'empurrando devagar' — corre em contatos rapidíssimos. Por isso saltos e cargas movidas com <b>intenção de velocidade</b> transferem mais para a corrida do que agachamento lento e pesado sozinho." },
          { type:"check", q:"Por que a velocidade de produção de força (RFD) importa mais que a força máxima pura?",
            options:["Porque o pé fica só ~250–300 ms no chão — não dá tempo de usar a força máxima","Porque força máxima não existe na corrida","Porque a RFD queima gordura"], answer:0,
            explain:"Com tão pouco tempo de contato, quem gera força mais rápido aproveita melhor a passada." }
        ]},
        { n:3, title:"Mecanismo B — o ângulo de penação", blocks:[
          { type:"prose", html:
            "<p>Aqui entra um mecanismo mais fino e fascinante. As fibras não se ligam ao tendão em linha reta: elas se inserem num certo <span data-term='ângulo de penação'>ângulo de penação</span>. E o tipo de treino <b>modela esse ângulo</b> — mudando o que o músculo faz de melhor.</p>"+
            "<p>Pense num aumento de 30% no tamanho de um músculo. Ele pode acontecer de <b>dois jeitos opostos</b>:</p>"+
            "<ul><li>➡️ <b><span data-term='sarcômeros em série'>Sarcômeros em série</span></b> (fibra mais <i>longa</i>) — típico do trabalho <span data-term='contração excêntrica'>excêntrico</span>. Uma fibra que passa de 3 para 6 sarcômeros percorre o dobro da distância no mesmo tempo → <b>dobra a velocidade</b> de contração.</li>"+
            "<li>⬆️ <b><span data-term='sarcômeros em paralelo'>Sarcômeros em paralelo</span></b> (maior <i>ângulo de penação</i>) — típico do trabalho concêntrico-excêntrico com <b>cargas altas</b>. Mais fibras somadas lado a lado → <b>mais força com menos gasto</b> → mais <b>economia</b>.</li></ul>" },
          { type:"img", src:"assets/img/diagrams/f-penacao.jpg", alt:"Sarcômeros em série versus em paralelo e o ângulo de penação", caption:"O mesmo crescimento muscular, dois caminhos: em série (velocidade) ou em paralelo (economia)." },
          { type:"callout", track:"treinador", tag:"Evidência", html:
            "Ao comparar corredores africanos e europeus de elite, os africanos tendem a ter <b>maiores ângulos de penação</b> no vasto lateral — uma das adaptações associadas à maior economia. A boa notícia: é uma característica <b>treinável</b>, não só genética." },
          { type:"check", q:"Cargas altas (concêntrico-excêntrico) tendem a produzir sarcômeros em... e isso melhora a...",
            options:["...série; velocidade","...paralelo; economia de corrida","...série; economia"], answer:1,
            explain:"Cargas altas → sarcômeros em paralelo → maior ângulo de penação → mais economia. O excêntrico é que favorece a série (velocidade)." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 2", questions:[
        { q:"Quantas revisões científicas recentes sustentam o efeito da força na economia?", options:["Nenhuma","Três (2016, 2018, 2024)","Uma só, dos anos 90"], answer:1, explain:"O corpo de evidência é amplo e consistente." },
        { q:"Durante a passada, você usa cerca de quanto da sua força máxima?", options:["20–25%","70%","100%"], answer:0, explain:"O tempo de contato (250–300 ms) não permite expressar a força máxima — por isso a RFD é decisiva." },
        { q:"O 'stiffness' músculo-tendíneo ajuda porque...", options:["Deixa o músculo maior","Funciona como uma mola que devolve energia do impacto","Aumenta a frequência cardíaca"], answer:1, explain:"Energia elástica armazenada e devolvida = passada mais barata." },
        { q:"Sarcômeros em SÉRIE (fibra mais longa) melhoram principalmente a...", options:["Velocidade de contração","Economia por penação","Flexibilidade"], answer:0, explain:"Mais sarcômeros em série = mais distância no mesmo tempo = mais velocidade." },
        { q:"Corredores africanos de elite tendem a ter maior...", options:["Frequência cardíaca","Ângulo de penação no vasto lateral","Peso corporal"], answer:1, explain:"Maior penação se associa a melhor economia — e é treinável." }
      ]}
    },

    /* ===================== MÓDULO 3 ===================== */
    {
      id: 3, title: "Argumentos 3 e 4 — fadiga e cãibras", img: "assets/img/covers/fcover-3.jpg",
      summary: "Durabilidade: segurar o ritmo até o fim. E a verdade científica sobre as cãibras.",
      learn: ["Durabilidade (4ª dimensão)","Pacing negativo","Recrutamento de fibras","Cãibras ≠ desidratação","Creatina quinase"],
      sections: [
        { n:1, title:"Durabilidade: a quarta dimensão do rendimento", blocks:[
          { type:"prose", html:
            "<p>Dois corredores fazem o mesmo teste de esforço em laboratório e mostram <b>VO₂máx e limiares parecidos</b>. No papel, iguais. Mas na prova, um 'quebra' no km 30 e o outro segura o ritmo. O que os separa?</p>"+
            "<p>A resposta é a <b><span data-term='durabilidade'>durabilidade</span></b> (ou resiliência): a capacidade de manter o rendimento estável apesar da fadiga acumulada. <span data-term='Andy Jones'>Andy Jones</span> a chama de <b>quarta dimensão do rendimento</b> — ao lado de VO₂máx, limiares e economia. E há indícios cada vez mais fortes de que o <b>treino de força</b> é uma das formas de melhorá-la.</p>" },
          { type:"img", src:"assets/img/diagrams/f-fibras.jpg", alt:"Recrutamento de fibras e fadiga", caption:"A força adia a entrada das fibras que fatigam rápido — a base fisiológica da durabilidade." },
          { type:"check", q:"A 'durabilidade' é...",
            options:["O VO₂máx","A capacidade de manter o rendimento apesar da fadiga acumulada","A velocidade de sprint"], answer:1,
            explain:"É a 4ª dimensão do rendimento: dois atletas iguais 'no papel' podem diferir muito aqui." }
        ]},
        { n:2, title:"A prova de que funciona (e por quê)", blocks:[
          { type:"prose", html:
            "<p>Um estudo experimental testou isso de frente. <b>18 corredores</b> (10 km entre 35 e 45 min), <b>sem</b> experiência prévia em força, fizeram <b>8 semanas × 2 sessões</b>, com 4 exercícios de extensores, progredindo de <b>10RM para 3RM</b> (ou seja, rumo a um trabalho cada vez mais neural).</p>"+
            "<p>No fim, num teste de 10 km em máxima intensidade, o grupo que treinou força foi capaz de <b>manter — e até aumentar</b> — a velocidade na parte final (o cobiçado <b>pacing negativo</b>), enquanto o grupo controle caía. Até o km 7 os dois eram iguais; foi nos <b>últimos 3 km</b> que a força fez a diferença (+2,5% vs −0,7%).</p>"+
            "<p>Num estudo observacional na Maratona de Valência (2016, ~100 corredores), o padrão se repetiu no mundo real: depois do km 30 — o famoso 'muro' — quem tinha feito força <b>não desabava</b> nos últimos 7 km como quem não fez.</p>" },
          { type:"prose", html:
            "<p><b>Por que</b> a força retarda a fadiga? Sobretudo por uma mudança no <b>recrutamento de fibras</b>:</p>"+
            "<ul><li>↓ <b>Fatigabilidade das <span data-term='fibras tipo I'>fibras tipo I</span></b>: elas passam a suportar mais tensão para a mesma intensidade, então você <b>adia a entrada</b> das fibras rápidas.</li>"+
            "<li>Isso retarda o recrutamento das <span data-term='fibras tipo IIX'>fibras tipo IIX</span> (potentes, mas que fatigam rápido e têm pior capacidade oxidativa).</li>"+
            "<li>As fibras mistas migram para o perfil <span data-term='fibras tipo IIA'>tipo IIA</span>: seguem rápidas, mas com muito mais capacidade de usar oxigênio.</li></ul>" },
          { type:"callout", track:"atleta", tag:"Na prática", html:
            "A diferença não aparece nos primeiros quilômetros — aparece no fim, quando todo mundo cansa. Treinar força é comprar 'quilômetros finais' mais fortes." },
          { type:"check", q:"No estudo dos 18 corredores, onde a força fez diferença?",
            options:["Já na largada","Nos últimos 3 km, com pacing negativo","Só no aquecimento"], answer:1,
            explain:"Iguais até o km 7; nos últimos 3 km o grupo de força manteve/aumentou a velocidade." }
        ]},
        { n:3, title:"Cãibras: a ciência contra o senso comum", blocks:[
          { type:"prose", html:
            "<p>O quarto argumento é especialmente valioso no <b>trail</b>, onde as descidas provocam muita <span data-term='cãibra muscular'>cãibra</span> — e a cãibra é uma das principais causas de abandono ou de ter que reduzir muito o ritmo.</p>"+
            "<p>A crença popular diz: cãibra = <b>desidratação e falta de sais</b>. O marketing das bebidas esportivas reforça isso há décadas. Mas a evidência científica aponta cada vez mais para outra causa: <b>fadiga e dano muscular</b>, que alteram o <b>controle neuromuscular</b>.</p>" },
          { type:"prose", html:
            "<p>O estudo de Valência testou as duas hipóteses. Ao comparar quem teve cãibra e quem não teve:</p>"+
            "<ul><li>❌ <b>Nenhuma diferença</b> na perda de peso, na densidade urinária (padrão-ouro de desidratação) ou no sódio no sangue.</li>"+
            "<li>✅ Diferença enorme no dano muscular: <b>mais que o dobro</b> de <span data-term='creatina quinase'>creatina quinase</span> (CK) em quem teve cãibra.</li></ul>"+
            "<p>Se a cãibra vem do dano muscular, e a força <b>reduz o dano muscular</b>... a força deveria reduzir as cãibras. E reduziu: no grupo sem força, a incidência foi de <b>31%</b> (3 em cada 10); no grupo com força, cerca de <b>15%</b> (1,5 em cada 10) — quase metade (p=0,074, no limiar da significância, mas de grande relevância prática).</p>"+
            "<p>Selo final: a revisão mais recente (2022) coloca o <b>treino de força</b> entre as poucas estratégias com <b>grau B</b> de evidência para prevenir cãibras (não há nenhuma grau A). Aumentar hidratação ou sais <b>não</b> alcança esse grau. Vale enxergar além do que o mercado tenta vender.</p>" },
          { type:"img", src:"assets/img/diagrams/f-caibras.jpg", alt:"Cãibras: teoria antiga versus evidência atual", caption:"A evidência aponta o dano muscular — não a desidratação — como causa principal das cãibras." },
          { type:"callout", track:"treinador", tag:"Cuidado com o mito", html:
            "Não prometa cura de 100%: a força não é milagre. Mas reduzir a incidência quase pela metade, com uma estratégia que já traz outros três benefícios, é um achado prático poderoso." },
          { type:"check", q:"O que o estudo de Valência encontrou nos corredores com cãibra?",
            options:["Mais desidratação e menos sódio","Mesma hidratação, mas mais que o dobro de creatina quinase (dano muscular)","Nada de diferente"], answer:1,
            explain:"Sem diferença de desidratação/eletrólitos; grande diferença no dano muscular (CK)." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 3", questions:[
        { q:"A 'quarta dimensão do rendimento' (Andy Jones) é...", options:["A força máxima","A durabilidade/resiliência","A flexibilidade"], answer:1, explain:"Manter o rendimento apesar da fadiga acumulada." },
        { q:"No estudo dos 18 corredores, o trabalho progrediu de...", options:["3RM para 10RM","10RM para 3RM (rumo ao neural)","Sempre 15RM"], answer:1, explain:"Progressão para cargas mais neurais ao longo das 8 semanas." },
        { q:"A força retarda a fadiga sobretudo por...", options:["Aumentar a desidratação","Mudar o recrutamento de fibras (adiar as tipo IIX)","Reduzir o VO₂máx"], answer:1, explain:"Menos fatigabilidade das tipo I adia a entrada das rápidas que fatigam." },
        { q:"A causa das cãibras com mais evidência hoje é...", options:["Desidratação e falta de sais","Fadiga e dano muscular (alteração do controle neuromuscular)","O frio"], answer:1, explain:"Valência: sem diferença de hidratação; muito mais dano muscular (CK) nos que tiveram cãibra." },
        { q:"Na revisão de 2022, a força para prevenir cãibras tem evidência de grau...", options:["A","B (a mais alta disponível; não há grau A)","Nenhum"], answer:1, explain:"Força é grau B; aumentar hidratação/sais não alcança esse grau." }
      ]}
    },

    /* ===================== MÓDULO 4 ===================== */
    {
      id: 4, title: "Periodização: montar o ciclo", img: "assets/img/covers/fcover-4.jpg",
      summary: "Sequenciar os conteúdos do geral ao específico — e saber quando mudar de fase.",
      learn: ["Objetivo-alvo da corrida","Do geral ao específico","Segurança & eficiência","4 períodos","Fases de Suchomel","Reserva de força"],
      sections: [
        { n:1, title:"Começar pelo alvo: o que a corrida exige", blocks:[
          { type:"prose", html:
            "<p>Periodizar não é preencher uma planilha anual ao milímetro — isso é 'brincar de adivinho'. O que importa é ter clara a <b>sequência dos conteúdos</b> e os <b>critérios</b> para encurtar ou alongar cada fase.</p>"+
            "<p>E toda sequência começa olhando o <b>alvo</b> — o que o gesto de correr realmente exige:</p>"+
            "<ul><li>Você aplica só <b>20–25%</b> da sua força máxima dinâmica por passada (o tempo de contato é curtíssimo: 250–300 ms, um pouco mais em subida).</li>"+
            "<li>O impulso vem de uma <span data-term='tripla extensão'>tripla extensão</span> (tornozelo, joelho, quadril) em <span data-term='cadeia cinética fechada'>cadeia cinética fechada</span>.</li>"+
            "<li>É sempre em <b>apoio monopodal</b> (um pé de cada vez), nunca com os dois pés juntos.</li></ul>"+
            "<p>Esses fatos ditam a <b>direção</b> da progressão. Vamos a ela.</p>" },
          { type:"check", q:"Quanto da força máxima dinâmica você aplica por passada?",
            options:["20–25%","50%","100%"], answer:0,
            explain:"O tempo de contato é curto demais (250–300 ms) para expressar a força máxima." }
        ]},
        { n:2, title:"A direção: do facilitado ao específico", blocks:[
          { type:"prose", html:
            "<p>A progressão de um ciclo caminha, sempre, em direção ao gesto de corrida — respeitando dois princípios inegociáveis: <b>segurança</b> (evitar lesão aguda) e <b>eficiência</b> (construir base antes de especificar).</p>"+
            "<ul><li><b>Cargas altas → cargas médias.</b> Começa-se pesado (base de força) e evolui-se para cargas menores movidas mais rápido.</li>"+
            "<li><b>Estável → instável.</b> De <b>bipodal</b> (dois pés) para <b>unipodal</b> (um pé); de máquinas guiadas para peso livre.</li>"+
            "<li><b>Nunca virar musculação de fisiculturista.</b> Trabalhamos com corredores, que não são especialistas em força — a execução tem de ser sempre segura.</li></ul>"+
            "<p>Fazer o contrário (começar instável e explosivo) aumenta o risco de lesão e desperdiça potencial: primeiro construa a base neuromuscular, depois aproxime-se do gesto de corrida.</p>" },
          { type:"prose", html:
            "<p>Nacho organiza o ciclo em <b>quatro períodos</b>: <b>introdutório</b>, <b>preparação física geral</b>, <b>específico</b> e <b>pré-competitivo</b>. Dentro deles, alguns conteúdos são <b>inegociáveis</b> (todo corredor faz, em maior ou menor dose) e outros são <b>opcionais</b> (dependem do nível, do tempo e da supervisão):</p>"+
            "<ul><li><b>Inegociável:</b> fortalecimento muscular (do introdutório ao específico) e estabilização (distal, no pé; e proximal, no core).</li>"+
            "<li><b>Opcional:</b> circuitos de força-resistência, <span data-term='multisaltos'>multisaltos</span> (potentes para economia, mas com risco se mal executados — só com boa técnica/supervisão) e, para o trail, séries em subida que evoluem para trabalho de descida em intensidade alta (nunca máxima).</li></ul>" },
          { type:"img", src:"assets/img/diagrams/f-periodizacao.jpg", alt:"Os quatro períodos e a progressão da força", caption:"Do introdutório ao pré-competitivo: cargas altas e estáveis evoluindo rumo ao gesto de corrida." },
          { type:"faca", html:"<b>Faça você — é inegociável ou opcional?</b> Classifique cada conteúdo segundo a proposta do curso." },
          { type:"classify", labels:[["base","Inegociável (todo corredor)"],["opcional","Opcional (depende)"]], items:[
            { text:"Fortalecimento muscular geral", answer:"base" },
            { text:"Multisaltos / pliometria de alto impacto", answer:"opcional" },
            { text:"Estabilização de core e do pé", answer:"base" },
            { text:"Séries de descida em intensidade alta", answer:"opcional" }
          ]},
          { type:"check", q:"A progressão de estabilidade caminha de...",
            options:["Unipodal para bipodal","Bipodal (estável) para unipodal (instável)","Sempre instável"], answer:1,
            explain:"Do mais facilitado (dois pés, guiado) ao mais parecido com correr (um pé, livre)." }
        ]},
        { n:3, title:"Quando mudar de fase: as 3 fases de Suchomel", blocks:[
          { type:"prose", html:
            "<p>Quanto dura cada fase? Depende do <b>tempo até o objetivo</b> (6 meses, 3 meses, às vezes só 1,5), do <b>diário do atleta</b> (o que ele relata de esforço, fadiga e dor) e, quando possível, de <b>testes</b>.</p>"+
            "<p>Um modelo ajuda a decidir a hora de mudar: <span data-term='Timothy Suchomel'>Timothy Suchomel</span> descreve <b>três fases</b> na relação entre ganhar força e melhorar o rendimento de resistência:</p>"+
            "<ul><li><b>Déficit de força</b> — você melhora a força, mas ela ainda <b>não se traduz</b> em corrida.</li>"+
            "<li><b>Fase associativa</b> — a zona de ouro: cada ganho de força se transfere <b>diretamente</b> para o rendimento.</li>"+
            "<li><b>Reserva de força</b> — você já é forte demais para o que a corrida pede; continuar ganhando força <b>rende pouco</b>. (Referência prática: quando o seu <span data-term='1RM'>1RM</span> passa de ~2× o peso corporal.)</li></ul>" },
          { type:"prose", html:
            "<p>Na prática: quando o atleta se aproxima de <b>175–200%</b> do peso corporal no 1RM estimado, é hora de <b>sair da fase estrutural</b> (cargas altas) e ir para a <b>específica</b> — cargas mais baixas movidas rápido, mais estabilização, execução mais próxima do gesto de corrida. Ou seja: você troca de fase quando está esgotando a fase associativa e entrando na reserva de força.</p>"+
            "<p>Use a ferramenta abaixo para estimar em que fase você está.</p>" },
          { type:"tool", component:"forcaRM", caption:"Sua ferramenta: descubra sua fase de Suchomel a partir do 1RM e do peso corporal." },
          { type:"check", q:"Na 'fase associativa' de Suchomel, o que acontece?",
            options:["A força não se traduz em corrida","Cada ganho de força se transfere diretamente para o rendimento","Você está forte demais"], answer:1,
            explain:"É a zona de ouro; ao esgotá-la (rumo à reserva de força) troca-se para o trabalho específico." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 4", questions:[
        { q:"Periodizar bem é, sobretudo...", options:["Preencher uma planilha anual ao milímetro","Ter clara a sequência de conteúdos e os critérios para ajustar as fases","Improvisar a cada semana"], answer:1, explain:"O detalhe extremo é 'brincar de adivinho'; o que vale é a sequência e os critérios." },
        { q:"O gesto de correr é uma...", options:["Tripla extensão em cadeia fechada e apoio monopodal","Contração isométrica bilateral","Rotação de tronco"], answer:0, explain:"Tornozelo+joelho+quadril, um pé de cada vez, pé fixo no solo." },
        { q:"A progressão de cargas vai de...", options:["Médias para altas","Altas para médias (movidas mais rápido)","Sempre máximas"], answer:1, explain:"Base pesada primeiro; depois cargas menores com mais velocidade." },
        { q:"Os multisaltos (pliometria) são...", options:["Inegociáveis para todos","Opcionais — potentes, mas com risco se mal executados","Proibidos"], answer:1, explain:"Reservados a quem tem boa técnica/supervisão." },
        { q:"Entra-se na 'reserva de força' por volta de um 1RM de...", options:["50% do peso corporal","~2× o peso corporal","10× o peso corporal"], answer:1, explain:"A partir daí ganhar mais força rende pouco para a corrida." }
      ]}
    },

    /* ===================== MÓDULO 5 ===================== */
    {
      id: 5, title: "Concorrência: força + resistência na semana", img: "assets/img/covers/fcover-5.jpg",
      summary: "Como encaixar os dois treinos para que um não apague as adaptações do outro.",
      learn: ["Ondas que se multiplicam","Perda de velocidade","Ordem força × resistência","Zonas que não combinam","Regra das 6 horas"],
      sections: [
        { n:1, title:"O problema da interferência", blocks:[
          { type:"prose", html:
            "<p>Força e resistência convivem na mesma semana — isso se chama <span data-term='treino concorrente'>treino concorrente</span>. O desafio: fazer com que as adaptações de uma <b>não pisem</b> nas da outra. Bem organizadas, as duas 'ondas' se <b>multiplicam</b>; mal organizadas, se <b>anulam</b> — e você treina mais horas para colher o mesmo resultado (ou menos).</p>"+
            "<p>Três variáveis governam essa convivência: o <b>grau de esgotamento</b> da sessão de força, a <b>ordem e o tipo</b> dos treinos e o <b>tempo de recuperação</b> entre eles. Vamos uma a uma.</p>" },
          { type:"img", src:"assets/img/diagrams/f-concorrencia.jpg", alt:"Ondas de força e resistência ao longo da semana", caption:"O objetivo do treino concorrente: ondas que se somam, não que se cancelam." },
          { type:"check", q:"O objetivo ao organizar força e resistência na semana é...",
            options:["Fazer o máximo de horas possível","Que as adaptações de uma não anulem as da outra","Nunca treinar força e corrida na mesma semana"], answer:1,
            explain:"Interferência mal gerida faz você treinar mais para render o mesmo." }
        ]},
        { n:2, title:"Não chegue perto da falha (perda de velocidade)", blocks:[
          { type:"prose", html:
            "<p>O grupo de <span data-term='José González-Badillo'>José González-Badillo</span> mostrou um termômetro simples: a <span data-term='perda de velocidade'>perda de velocidade</span> dentro da série. Quando a velocidade da barra cai perto de <b>40%</b>, você está chegando à <span data-term='falha muscular'>falha</span> — e isso gera um <b>estresse residual enorme</b>.</p>"+
            "<p>Num estudo de 8 semanas, compararam-se três grupos: um fazia resistência antes da força; os outros dois faziam força antes da resistência, um parando a série com <b>20%</b> de perda de velocidade e outro com <b>40%</b>. Resultado no esforço de resistência seguinte (a 90% da <span data-term='VAM'>VAM</span>):</p>"+
            "<ul><li>Grupo <b>20%</b> de perda (menos repetições): aguentou perto dos <b>10 min</b>-alvo.</li>"+
            "<li>Grupo <b>40%</b> de perda (quase falha): despencou para ~<b>450 s</b>, com pior eficiência ventilatória e mais estresse metabólico/mecânico.</li></ul>"+
            "<p>Ou seja: fazer <b>mais repetições</b> (indo à falha) <b>piorou</b> o rendimento de resistência. Menos é mais.</p>" },
          { type:"callout", track:"treinador", tag:"Regra de ouro", html:
            "Prescreva pela <b>qualidade do movimento</b>, não pelo 'até não aguentar mais'. Parar a série quando a velocidade cai ~15–20% preserva as adaptações neurais e não sabota o treino de corrida seguinte." },
          { type:"check", q:"Chegar a ~40% de perda de velocidade na série significa...",
            options:["O ponto ótimo de treino","Estar perto da falha muscular — muito estresse residual","Que a carga está leve demais"], answer:1,
            explain:"Perto da falha = fadiga alta que prejudica a resistência subsequente. Melhor parar antes." }
        ]},
        { n:3, title:"Ordem, zonas proibidas e a regra das 6 horas", blocks:[
          { type:"prose", html:
            "<p>Quando a <b>resistência vem antes</b> da força no mesmo dia, o <i>tipo</i> de corrida importa muito. Devem-se <b>evitar</b> antes da força:</p>"+
            "<ul><li>Rodagens longas na <b>zona entre limiares</b>, perto do 2º limiar;</li>"+
            "<li>Intervalos longos (4–6 min) perto da <b>potência aeróbia máxima</b>.</li></ul>"+
            "<p>Por quê? Elas <b>depletam o glicogênio</b> e fatigam as fibras rápidas — justo o que a força precisa. O que <b>combina</b> antes da força: corrida muito suave (abaixo do 1º limiar) ou tiros bem curtos tipo SIT (sprints).</p>"+
            "<p>E vale nos dois sentidos: uma sessão de força com muito dano muscular (ênfase excêntrica) <b>piora a biomecânica</b> da corrida seguinte — menos tempo de voo, mais tempo de contato, passada mais 'pendular'.</p>" },
          { type:"prose", html:
            "<p>A variável final é o <b>tempo</b>. Se as duas sessões são no mesmo dia, deixe <b>pelo menos 6 horas</b> entre elas — abaixo disso há interferência nas adaptações proteicas. E:</p>"+
            "<ul><li>❌ <b>Treino por blocos</b> (uma semana só de força, outra só de resistência) <b>não</b> tem lugar no corredor de resistência.</li>"+
            "<li>❌ Duas sessões de <b>desenvolvimento</b> (força forte + resistência forte) coladas, sem as 6 h.</li>"+
            "<li>✅ Um aquecimento leve (30 min de elíptico ou corrida bem suave) <b>antes</b> da força — sem problema.</li></ul>" },
          { type:"faca", html:"<b>Faça você — combina antes da força ou não?</b> Classifique cada treino de corrida quando ele antecede uma sessão de força no mesmo bloco." },
          { type:"classify", labels:[["ok","Combina ✓"],["evitar","Evitar ✗"]], items:[
            { text:"30 min de corrida muito suave (abaixo do 1º limiar)", answer:"ok" },
            { text:"Rodagem longa perto do 2º limiar", answer:"evitar" },
            { text:"Tiros muito curtos tipo SIT (sprints)", answer:"ok" },
            { text:"Intervalos de 5 min na potência aeróbia máxima", answer:"evitar" }
          ]},
          { type:"check", q:"No mesmo dia, o intervalo mínimo entre força e resistência deve ser de...",
            options:["30 minutos","6 horas","Não importa"], answer:1,
            explain:"Abaixo de ~6 h há interferência nas adaptações proteicas de ambas." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 5", questions:[
        { q:"'Treino concorrente' é...", options:["Uma competição","Fazer força e resistência no mesmo período","Só treino de força"], answer:1, explain:"O desafio é evitar a interferência entre as adaptações." },
        { q:"Perto de que perda de velocidade você chega à falha muscular?", options:["10%","40%","5%"], answer:1, explain:"~40% de perda = proximidade da falha e muito estresse residual." },
        { q:"Ir à falha (mais repetições) no estudo de 8 semanas...", options:["Melhorou a resistência seguinte","Piorou a resistência seguinte","Não mudou nada"], answer:1, explain:"Menos repetições (20% de perda) preservou melhor o rendimento de resistência." },
        { q:"Antes da força, evita-se corrida...", options:["Muito suave (abaixo do 1º limiar)","Na zona entre limiares / potência aeróbia máxima","SIT muito curto"], answer:1, explain:"Essas zonas depletam glicogênio e fatigam as fibras rápidas." },
        { q:"O treino 'por blocos' (semana de força / semana de resistência)...", options:["É o ideal","Não tem lugar no corredor de resistência","É obrigatório"], answer:1, explain:"Organiza-se dentro da semana, não em blocos separados." }
      ]}
    },

    /* ===================== MÓDULO 6 ===================== */
    {
      id: 6, title: "Metodologia: como treinar", img: "assets/img/covers/fcover-6.jpg",
      summary: "O que é 'funcional' de verdade, velocidade de execução e o caráter do esforço.",
      learn: ["Princípios firmes","Funcional de verdade","Velocidade de execução","Caráter do esforço","Longe da falha","Menos repetições, mais transferência"],
      sections: [
        { n:1, title:"Ter princípios (e não os do Groucho Marx)", blocks:[
          { type:"prose", html:
            "<p>Há uma piada de Groucho Marx: <i>“estes são os meus princípios; se não gosta deles, tenho outros”</i>. Na metodologia do treino, é o oposto do que queremos. Precisamos de <b>princípios firmes</b> — que se adaptam às circunstâncias do atleta, mas <b>não</b> se dobram à moda da vez nem ao que ele 'quer ouvir'.</p>"+
            "<p>O primeiro princípio a firmar: o que significa <b>exercício funcional</b>.</p>" },
          { type:"prose", html:
            "<p>Muita gente acha que 'funcional' = fazer o exercício mais <b>instável</b>, em posições complicadas, bonito para o Instagram. <b>Errado.</b> Para o corredor, um exercício é funcional quando <b>melhora o rendimento de resistência daquele atleta</b> — ponto.</p>"+
            "<p>Muitas vezes o mais funcional é justamente o <b>menos</b> instagramável: um leg press guiado, bem executado, por um corredor iniciante e sem supervisão, pode ser <b>mais funcional</b> do que um agachamento numa bola instável. Funcional é sobre o <b>resultado</b>, não sobre a aparência.</p>" },
          { type:"check", q:"Para o corredor, um exercício é 'funcional' quando...",
            options:["É o mais instável e difícil possível","Melhora o rendimento de resistência daquele atleta","Rende bem nas redes sociais"], answer:1,
            explain:"Funcional é sobre resultado, não sobre parecer difícil/instável." }
        ]},
        { n:2, title:"Velocidade de execução e caráter do esforço", blocks:[
          { type:"prose", html:
            "<p>Dois princípios metodológicos centrais, ambos apoiados no grupo de González-Badillo:</p>"+
            "<p><b>1. Velocidade de execução.</b> A fase <span data-term='contração concêntrica'>concêntrica</span> (a de 'empurrar') deve ser feita à <b>máxima velocidade possível</b> — mas só até onde a <b>técnica não se comprometa</b>. Intenção de velocidade máxima, sem perder a qualidade do movimento.</p>"+
            "<p><b>2. Caráter do esforço.</b> Aqui está talvez o insight mais contraintuitivo do curso: treinar <b>longe da falha muscular</b> rende <b>mais</b> para o corredor do que ir até o limite.</p>" },
          { type:"prose", html:
            "<p>As evidências são impressionantes:</p>"+
            "<ul><li>Um grupo que perdia só <b>15%</b> de velocidade (177 repetições em 3 semanas) foi comparado a outro que perdia <b>40%</b> (401 repetições — mais que o dobro). O grupo dos <b>15%</b> melhorou <b>mais</b> em salto, agachamento e, sobretudo, na <b>velocidade associada ao VO₂máx</b>. Metade das repetições, mais transferência para a corrida.</li>"+
            "<li>Em remadores de bom nível (VO₂ acima de 60), o grupo que parava a <b>10%</b> de perda (23% menos repetições) ainda assim melhorou <b>mais</b> o 1RM — com menos esforço percebido e melhor recuperação.</li></ul>"+
            "<p>Por quê? Ir à falha gera <span data-term='DOMS'>DOMS</span> recorrente, mais fadiga metabólica e mais <span data-term='hipertrofia sarcoplasmática'>hipertrofia sarcoplasmática</span> — tudo o que o corredor não quer. As adaptações que interessam (as <b>neurais</b>) moram no rango <b>abaixo de 8 repetições máximas</b> e <b>longe da falha</b>.</p>" },
          { type:"img", src:"assets/img/diagrams/f-carater.jpg", alt:"Caráter do esforço: longe da falha rende mais", caption:"Menos repetições, longe da falha: mais transferência para a corrida e menos fadiga." },
          { type:"tool", component:"velLoss", caption:"Sua ferramenta: veja como a perda de velocidade muda o tipo de adaptação." },
          { type:"callout", track:"atleta", tag:"Na prática", html:
            "Se você termina cada série 'destruído', provavelmente está treinando errado para correr. Deixe 'reps na reta' — pare com 2–3 repetições ainda no tanque. Menos dor amanhã, mais transferência para a corrida." },
          { type:"check", q:"Treinar LONGE da falha muscular, para o corredor...",
            options:["Rende menos","Rende mais: mais transferência e menos fadiga","É indiferente"], answer:1,
            explain:"Metade das repetições, melhores ganhos na velocidade do VO₂máx e menos DOMS." }
        ]},
        { n:3, title:"Peso corporal basta? (e outros mitos)", blocks:[
          { type:"prose", html:
            "<p>“Dá pra ter o mesmo benefício só com o peso do corpo?” A resposta honesta: <b>é difícil</b>. Chegar aos níveis de ativação muscular que geram as adaptações neurais e estruturais usando <b>só o peso corporal</b> costuma exigir exercícios muito complexos (mal executados) ou acaba virando um trabalho <b>metabólico</b> (resistência de força), que não é o alvo.</p>"+
            "<p>Se o atleta só tem o próprio corpo, trabalha-se com isso — mas com um <b>mínimo de material</b> (um kettlebell, elásticos, um TRX, halteres) o potencial de melhora é <b>muito maior</b>. Vale fazer pedagogia sobre isso: força de verdade para o corredor pede um pouco de sobrecarga.</p>" },
          { type:"callout", track:"treinador", tag:"Pedagogia", html:
            "Com autocarga é possível em alguns músculos, mas em muitos é inviável atingir a ativação-alvo. Oriente o atleta a adquirir o mínimo (kettlebell/elástico) — o salto de rendimento compensa o pequeno investimento." },
          { type:"check", q:"Treinar só com o peso corporal...",
            options:["Dá o mesmo resultado que com carga","Dificulta atingir a ativação-alvo; um mínimo de material amplia muito o ganho","É sempre melhor"], answer:1,
            explain:"Sem sobrecarga, o trabalho tende ao metabólico — não às adaptações neurais que o corredor busca." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 6", questions:[
        { q:"Ter 'princípios do Groucho Marx' significa...", options:["Ter princípios firmes","Dobrar os princípios ao que o atleta quer ouvir (o que se deve evitar)","Não ter opinião"], answer:1, explain:"Princípios devem se adaptar às circunstâncias, não à moda ou ao gosto do atleta." },
        { q:"Um exercício funcional para o corredor é o que...", options:["Parece mais difícil","Melhora o rendimento de resistência dele","Usa mais equipamentos"], answer:1, explain:"Funcional é sobre resultado, não aparência." },
        { q:"A fase concêntrica deve ser executada...", options:["Bem devagar","À máxima velocidade possível sem comprometer a técnica","Sempre até a falha"], answer:1, explain:"Intenção de velocidade máxima, preservando a qualidade do movimento." },
        { q:"Para o corredor, as adaptações que interessam ficam...", options:["Acima de 15 repetições, até a falha","Abaixo de 8RM e longe da falha (neurais)","Só em séries até a exaustão"], answer:1, explain:"O caráter do esforço deve ser afastado da falha." },
        { q:"Treinar só com o peso corporal...", options:["É o ideal para todos","Dificulta atingir a ativação-alvo — um mínimo de material ajuda muito","Substitui totalmente a academia"], answer:1, explain:"Sem sobrecarga, tende ao trabalho metabólico, não neural." }
      ]}
    },

    /* ===================== MÓDULO 7 ===================== */
    {
      id: 7, title: "Desenhar a sessão e progredir os exercícios", img: "assets/img/covers/fcover-7.jpg",
      summary: "A estrutura de uma sessão (10–14 exercícios) e como fazer cada exercício evoluir.",
      learn: ["Estrutura da sessão","Empurrar & puxar","Dominantes de joelho/quadril","Core anti-tudo","Progressões","Instabilidade integrada"],
      sections: [
        { n:1, title:"A arquitetura de uma sessão", blocks:[
          { type:"prose", html:
            "<p>Uma sessão de força para corredor costuma ter <b>10 a 14 exercícios</b> — mas o número importa menos que <b>saber por que cada um está ali</b>. Nada de somar exercícios 'porque vi outro treinador fazer'. A estrutura típica:</p>"+
            "<ol><li><b>Membros superiores</b> — 1 de <b>empurrar</b> (peitoral) + 1 de <b>puxar</b> (dorsal). Poliarticulares, começando em máquinas e indo ao peso livre.</li>"+
            "<li><b>Principais de membros inferiores</b> — o coração da sessão:<br>• <span data-term='dominante de joelho'>Dominantes de joelho</span> (agachamento, subida ao caixão, afundo): 1–2 exercícios.<br>• <span data-term='dominante de quadril'>Dominantes de quadril</span> (peso morto, elevação de quadril): 1–3 exercícios.</li>"+
            "<li><b>Auxiliares de membros inferiores</b> — flexores de quadril, adutores, extensores de tornozelo: 0–1 cada (entram ou não conforme a fase).</li>"+
            "<li><b>Abdominais e lombares</b> — 2–4 exercícios: anti-extensão, anti-inclinação lateral, anti-rotação (isométricos e dinâmicos).</li>"+
            "<li><b>Estabilização</b> — 1 exercício: compactação e, no trail, <b>absorção de impacto</b> (quedas controladas de caixão).</li></ol>" },
          { type:"img", src:"assets/img/diagrams/f-sessao.jpg", alt:"Estrutura de uma sessão de força para corredores", caption:"Os cinco blocos de uma sessão: superiores, principais, auxiliares, core e estabilização." },
          { type:"callout", track:"treinador", tag:"Princípio", html:
            "Note que o corredor de trail prioriza <b>dominantes de quadril</b> e a cadeia posterior — é o que a subida e a absorção das descidas mais exigem. E os abdominais/lombares recebem <b>muitos exercícios com poucas séries</b> cada, para cobrir todas as direções (anti-extensão, anti-rotação, anti-inclinação)." },
          { type:"faca", html:"<b>Faça você — principal ou auxiliar?</b> Classifique cada exercício de membros inferiores." },
          { type:"classify", labels:[["principal","Principal"],["auxiliar","Auxiliar"]], items:[
            { text:"Agachamento (dominante de joelho)", answer:"principal" },
            { text:"Adutores na polia", answer:"auxiliar" },
            { text:"Peso morto (dominante de quadril)", answer:"principal" },
            { text:"Flexores de quadril (psoas)", answer:"auxiliar" }
          ]},
          { type:"check", q:"O corredor de trail dá prioridade a exercícios dominantes de...",
            options:["Joelho","Quadril (cadeia posterior)","Braço"], answer:1,
            explain:"Quadril e cadeia posterior atendem à demanda das subidas e da absorção nas descidas." }
        ]},
        { n:2, title:"Progredir um exercício: dois exemplos", blocks:[
          { type:"prose", html:
            "<p>O segredo não é 'ter muitos exercícios' — é fazer o <b>mesmo padrão evoluir</b> ao longo do ciclo, do mais estável ao mais específico. Dois exemplos:</p>"+
            "<p><b>Dominante de joelho</b> (do fácil ao específico):</p>"+
            "<ol><li><b>Leg press</b> — máquina guiada, <span data-term='cadeia cinética fechada'>cadeia fechada</span>, muito estável. Ótimo ponto de partida para iniciante sem supervisão. Comece bilateral, depois unilateral.</li>"+
            "<li><b>Agachamento no Smith / multipower</b> — barra guiada: segurança e boa posição dos pés, com carga axial.</li>"+
            "<li><b>Agachamento livre unilateral</b> — mais exigência de estabilização.</li>"+
            "<li><b>Agachamento búlgaro com cinturão russo</b> — com <span data-term='isometria excêntrica'>isometria excêntrica</span> no fundo (segurar 3–8 s) antes de subir explosivo. Excelente para resiliência do corredor de trail.</li></ol>" },
          { type:"prose", html:
            "<p><b>Dominante de quadril</b> (do fácil ao específico):</p>"+
            "<ol><li><b>Mesa flexora</b> — <span data-term='cadeia cinética aberta'>cadeia aberta</span>, guiada, estável. Bom início.</li>"+
            "<li><b>Peso morto</b> — fundamental para a cadeia posterior e a posição do quadril; exige boa base antes.</li>"+
            "<li><b>Peso morto unilateral</b> — altíssima exigência de estabilizadores do quadril.</li>"+
            "<li><b>Nórdico</b> — isometria/excêntrico dos isquiotibiais; consagrado na prevenção de lesões e útil ao corredor.</li></ol>"+
            "<p>A progressão <b>não</b> é uma escada rígida: pode-se ir e voltar, alternar com fases de isometria excêntrica, escolher o próximo passo conforme a resposta do atleta.</p>" },
          { type:"img", src:"assets/img/diagrams/f-progressao.jpg", alt:"Progressão de um exercício, do guiado ao livre unilateral", caption:"Do guiado e bilateral ao livre e unilateral: a mesma lógica de sempre." },
          { type:"check", q:"Ao progredir um exercício, caminhamos do...",
            options:["Livre unilateral para o guiado bilateral","Guiado/estável para o livre/unilateral (mais específico)","Sempre no mesmo exercício"], answer:1,
            explain:"A progressão vai do mais facilitado ao mais parecido com o gesto de corrida." }
        ]},
        { n:3, title:"Bônus — a estabilidade é uma força treinável", blocks:[
          { type:"prose", html:
            "<p>Fechamos com uma ideia que muda a cabeça de muito corredor: a <b>estabilidade não é um dom inato</b>. Ela é <b>um tipo de força</b> — e, como toda força, tem grande margem de melhora.</p>"+
            "<p>Em vez de gastar tempo com exercícios de equilíbrio isolados, o mais eficiente (sobretudo para quem tem pouco tempo) é <b>integrar</b> a exigência de estabilidade dentro do próprio trabalho com carga:</p>"+
            "<ul><li><b>Execução unilateral</b> — um pé só já cria enorme demanda de estabilização.</li>"+
            "<li><b>Carga contralateral</b> — segurar o peso no lado oposto à perna de apoio ativa o glúteo médio e o core.</li>"+
            "<li><b>Polias e elásticos</b> — geram tensão variável (a polia exige mais no início; o elástico, no fim), aumentando a demanda de estabilização.</li>"+
            "<li><b>Aceleração consciente</b> na fase concêntrica — cria instabilidade que o core precisa controlar.</li></ul>"+
            "<p>Regra de segurança: materiais desestabilizadores (bosu, pranchas instáveis) ficam <b>só</b> para os exercícios auxiliares de estabilização — <b>nunca</b> com cargas altas, onde o risco supera o ganho.</p>" },
          { type:"callout", track:"atleta", tag:"Na prática", html:
            "Quer treino de estabilidade eficiente? Faça seus exercícios de força <b>unilaterais</b> e com o peso no lado contrário. Você treina força e estabilidade ao mesmo tempo — sem perder uma sessão só para 'equilíbrio'." },
          { type:"check", q:"A forma mais eficiente de treinar estabilidade no corredor com pouco tempo é...",
            options:["Só exercícios de equilíbrio em bases instáveis","Integrá-la ao trabalho com carga (unilateral, contralateral, polias)","Ignorá-la"], answer:1,
            explain:"Estabilidade é força; integrá-la ao trabalho principal rende mais que sessões isoladas de equilíbrio." }
        ]}
      ],
      quiz:{ title:"Teste do Módulo 7", questions:[
        { q:"Uma sessão de força para corredor costuma ter...", options:["3–4 exercícios","10–14 exercícios com propósito claro","30+ exercícios"], answer:1, explain:"O número importa menos que saber por que cada exercício está ali." },
        { q:"Nos membros superiores, a dupla básica é...", options:["Dois de empurrar","1 de empurrar + 1 de puxar","Só rosca de bíceps"], answer:1, explain:"Peitoral (empurrar) + dorsal (puxar), poliarticulares." },
        { q:"O core do corredor treina, entre outros, o padrão...", options:["Anti-rotação, anti-extensão, anti-inclinação","Só abdominal reto","Nenhum"], answer:0, explain:"Muitos exercícios, poucas séries, cobrindo todas as direções." },
        { q:"A progressão de um exercício vai do...", options:["Livre unilateral ao guiado","Guiado/bilateral ao livre/unilateral","Sempre o mesmo"], answer:1, explain:"Do estável e facilitado ao específico do gesto de corrida." },
        { q:"A estabilidade, segundo o curso, é...", options:["Um dom inato","Um tipo de força, treinável e melhorável","Impossível de treinar"], answer:1, explain:"Integrá-la ao trabalho com carga é o caminho mais eficiente." }
      ]}
    }
  ],

  /* ===================== PROVA FINAL DO CURSO ===================== */
  finalExam:{
    title:"Prova final — Força para Esportes de Resistência",
    pass:70,
    questions:[
      { q:"Em três dos quatro argumentos, o objetivo final da força é...", options:["Ganhar massa","Correr melhor (a força é meio, não fim)","Levantar mais peso"], answer:1, explain:"Economia, durabilidade e cãibras visam o rendimento de corrida." },
      { q:"Completar >80% das sessões planejadas se associou a...", options:["Mais lesões","~7× mais chance de atingir o objetivo","Nada"], answer:1, explain:"Disponibilidade para treinar é um forte preditor de rendimento." },
      { q:"Durante a passada, você aplica cerca de...", options:["20–25% da força máxima","70%","100%"], answer:0, explain:"O tempo de contato (250–300 ms) não permite a força máxima — daí a importância da RFD." },
      { q:"Cargas altas tendem a gerar sarcômeros em paralelo, o que melhora a...", options:["Velocidade pura","Economia de corrida (via ângulo de penação)","Flexibilidade"], answer:1, explain:"Paralelo → penação → economia; série → velocidade." },
      { q:"A 'durabilidade' (Andy Jones) é...", options:["A força máxima","Manter o rendimento apesar da fadiga acumulada","A cadência"], answer:1, explain:"A quarta dimensão do rendimento de resistência." },
      { q:"A causa das cãibras com mais evidência atual é...", options:["Desidratação e falta de sais","Fadiga e dano muscular","O frio"], answer:1, explain:"Valência: sem diferença de hidratação; muito mais creatina quinase nos que tiveram cãibra." },
      { q:"Entra-se na 'reserva de força' (Suchomel) por volta de um 1RM de...", options:["50% do peso corporal","~2× o peso corporal","10× o peso"], answer:1, explain:"A partir daí, ganhar mais força rende pouco para a corrida." },
      { q:"Perto de que perda de velocidade se chega à falha muscular?", options:["10%","40%","5%"], answer:1, explain:"~40% de perda = proximidade da falha e muito estresse residual." },
      { q:"No mesmo dia, o intervalo mínimo entre força e resistência é de...", options:["30 min","6 horas","Não importa"], answer:1, explain:"Abaixo de ~6 h há interferência nas adaptações proteicas." },
      { q:"Para o corredor, treinar LONGE da falha muscular...", options:["Rende menos","Rende mais: mais transferência e menos fadiga","É indiferente"], answer:1, explain:"Menos repetições, melhores ganhos na velocidade do VO₂máx e menos DOMS." },
      { q:"Um exercício 'funcional' para o corredor é o que...", options:["Parece mais difícil/instável","Melhora o rendimento de resistência dele","Rende no Instagram"], answer:1, explain:"Funcional é sobre resultado, não aparência." },
      { q:"A estabilidade, segundo o curso, é...", options:["Um dom inato","Um tipo de força, treinável — melhor integrada ao trabalho com carga","Impossível de treinar"], answer:1, explain:"Unilateral, contralateral e polias integram estabilidade ao trabalho principal." }
    ]
  }
};
