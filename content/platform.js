/* ============================================================
   PLATAFORMA — catálogo de cursos (multi-curso, estilo catálogo)
   Só "trail" tem conteúdo (published). Os demais são vitrine.
   ============================================================ */
window.PLATFORM = {
  brand: "Instituto de Movimento e Performance",
  tagline: "Formação esportiva para atletas, treinadores e apaixonados por performance.",
  paths: [
    { id:"trail-completo", icon:"⛰️", name:"Trail Running Completo",
      desc:"Do primeiro trail ao ultra: metodologia, força e nutrição.", courses:["trail","forca-endurance","nutricao"] },
    { id:"ciencia", icon:"🔬", name:"Fisiologia Aplicada",
      desc:"Entenda o motor: limiares, zonas e periodização.", courses:["fisiologia","periodizacao","trail"] },
    { id:"longevo", icon:"💪", name:"Performance & Longevidade",
      desc:"Treinar forte e envelhecer forte depois dos 40.", courses:["forca-endurance","longevidade","trail"] }
  ],
  categories: [
    { id: "todos",       name: "Todos" },
    { id: "corrida",     name: "Corrida & Trail" },
    { id: "forca",       name: "Força & Longevidade" },
    { id: "metodologia", name: "Fisiologia & Metodologia" },
    { id: "nutricao",    name: "Nutrição" },
    { id: "ciclismo",    name: "Ciclismo & Triatlo" }
  ],
  courses: [
    { id:"trail", ref:"COURSE_TRAIL", cat:"corrida", published:true,
      title:"Metodologia do Treino de Trail",
      sub:"Corrida de montanha de verdade — do plano ao cume.",
      img:"assets/img/covers/ccover-trail.jpg", level:"Do zero ao avançado", dur:"7 módulos + prova · ~3,5 h",
      learn:["Carga interna × externa","Limiares VT1/VT2","Fartlek","Correr × caminhar","Descidas & excêntrico","Séries de subida","Respiração","Periodização"] },

    { id:"rua", cat:"corrida", published:true,
      title:"Corrida de Rua: do 5 km à Maratona",
      sub:"VAM, zonas, métodos e a maratona por dentro — metodologia de treinadores de elite.",
      img:"assets/img/covers/ccover-rua.jpg", level:"Iniciante+ ao avançado", dur:"7 módulos + prova · ~3,5 h",
      learn:["VAM & zonas","Meia × maratona","Métodos de treino","Periodização","A maratona por dentro","Força & taper"] },

    { id:"forca-endurance", ref:"COURSE_FORCA", cat:"forca", published:true,
      title:"Força para Esportes de Resistência",
      sub:"Como a força certa te deixa mais rápido, mais durável e sem lesão.",
      img:"assets/img/covers/ccover-forca.jpg", level:"Do zero ao avançado", dur:"7 módulos + prova · ~3,5 h",
      learn:["Por que treinar força","Economia de corrida","Durabilidade & fadiga","Cãibras","Periodização","Treino concorrente","Caráter do esforço","Desenho da sessão"] },

    { id:"longevidade", cat:"forca", published:false,
      title:"Treinar para Envelhecer Forte",
      sub:"Longevidade, mobilidade e potência depois dos 40.",
      img:"assets/img/covers/ccover-longevidade.jpg", level:"40+", dur:"em breve",
      learn:["Massa muscular","Potência","Mobilidade","VO₂máx 40+","Recuperação"] },

    { id:"fisiologia", cat:"metodologia", published:true,
      title:"Fisiologia do Exercício na Prática",
      sub:"Energia, limiares, VO₂máx, fadiga e adaptações — com interatividade.",
      img:"assets/img/covers/ccover-fisiologia.jpg", level:"Intermediário", dur:"7 módulos + prova · ~3,5 h",
      learn:["Sistemas de energia","Limiares & zonas","VO₂máx & economia","Fadiga & pacing","Polarizado 80/20"] },

    { id:"periodizacao", cat:"metodologia", published:false,
      title:"Periodização do Treino",
      sub:"Montar temporadas que levam ao pico na hora certa.",
      img:"assets/img/covers/ccover-periodizacao.jpg", level:"Treinadores", dur:"em breve",
      learn:["Macro/meso/micro","Picos de forma","Carga & recuperação","Blocos","Polarização"] },

    { id:"nutricao", cat:"nutricao", published:true,
      title:"Nutrição para Resistência",
      sub:"Combustível, hidratação, estratégia de prova e recuperação — sem dieta da moda.",
      img:"assets/img/covers/ccover-nutricao.jpg", level:"Todos os níveis", dur:"7 módulos + prova · ~3,5 h",
      learn:["Carbo por hora","Carga & periodização","Hidratação & sódio","Recuperação","Suplementos que funcionam"] },

    { id:"ciclismo", cat:"ciclismo", published:false,
      title:"Ciclismo: Potência e Periodização",
      sub:"Treinar por watts, do endurance ao limiar.",
      img:"assets/img/covers/ccover-ciclismo.jpg", level:"Intermediário", dur:"em breve",
      learn:["Potência (watts)","FTP","Zonas de potência","Periodização","Cadência"] },

    { id:"triatlo", cat:"ciclismo", published:false,
      title:"Triatlo: do Sprint ao Ironman",
      sub:"Integrar três esportes num plano que funciona.",
      img:"assets/img/covers/ccover-triatlo.jpg", level:"Intermediário+", dur:"em breve",
      learn:["Transições","Volume nos 3 esportes","Treino brick","Pacing","Nutrição de prova"] }
  ]
};
