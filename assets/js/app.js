/* ============================================================
   APRENDIZ — núcleo v3 (multi-curso + painel + PWA)
   ============================================================ */
(function(){
  const P=window.PLATFORM;
  const app=document.getElementById("app"), bar=document.getElementById("progressbar");
  const nav=document.getElementById("nav"), trackPill=document.getElementById("trackpill");
  const courseOf=id=>P.courses.find(c=>c.id===id);
  const COURSE_CACHE={};
  const contentOf=c=>c&&c.published?(COURSE_CACHE[c.id]||null):null;
  async function ensureCourse(cid){ if(COURSE_CACHE[cid])return COURSE_CACHE[cid];
    const d=await IMP.course(cid); if(d)COURSE_CACHE[cid]=d; return d; }
  let ME={authenticated:false};
  async function refreshMe(){ IMP.clearCourseCache(); for(const k in COURSE_CACHE)delete COURSE_CACHE[k]; ME=await IMP.me(true); }

  const ICON={
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v11h14V9"/></svg>',
    tools:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 6a4 4 0 0 0 5 5l-8 8a2.8 2.8 0 0 1-4-4l8-8a4 4 0 0 0-1-1z"/></svg>',
    panel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    cards:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="14" height="12" rx="2"/><path d="M7 3h11a2 2 0 0 1 2 2v11"/></svg>',
    gloss:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9a3 3 0 0 1 3 3v15H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 8h6M9 12h6"/></svg>',
    run:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="5" r="2"/><path d="M11 8l-3 3 3 2 1 5M12 13l4 2 2-2M8 11l-3 1"/></svg>',
    book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>',
    upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M8 8l4-4 4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/></svg>'
  };

  const KEY="aprendiz.state.v2";
  const S=(()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return{}}})();
  S.track=S.track||null; S.mod=S.mod||{}; S.quiz=S.quiz||{}; S.name=S.name||"";
  S.coach=!!S.coach; S.seen=S.seen||{};
  S.points=S.points||0; S.streak=S.streak||{days:0,best:0,last:""}; S.badges=S.badges||{}; S.activity=S.activity||[]; S.last=S.last||null;
  /* migração v2 (curso único) → chaves por curso "cursoId:chave" */
  if(!S.migrated){
    const nm={},nq={},ns={};
    for(const k in S.mod)  nm[/:/.test(k)?k:("trail:"+k)]=S.mod[k];
    for(const k in S.quiz) nq[/:/.test(k)?k:("trail:"+k)]=S.quiz[k];
    for(const k in S.seen) ns[/:/.test(k)?k:("trail:"+k)]=S.seen[k];
    S.mod=nm; S.quiz=nq; S.seen=ns;
    S.finalPassed=(S.finalPassed===true)?{trail:true}:{};
    S.migrated=1;
  }
  if(typeof S.finalPassed!=="object"||!S.finalPassed) S.finalPassed={};
  S.course=S.course||"trail";
  /* curso "atual" (para gerenciar glossário/flashcards/painel/prova dos itens laterais) */
  function CUR(){ let c=courseOf(S.course); if(!c||!c.published||!contentOf(c)) c=publishedCourses()[0]; return c; }
  function CO(){ const c=CUR(); return c?contentOf(c):null; }
  const gk=(cid,x)=>cid+":"+x;
  const unlockedGlossary=(c)=>{ c=c||CUR(); const co=c&&contentOf(c); return co?co.glossary.filter(([t])=>S.seen[gk(c.id,t.toLowerCase())]):[]; };
  const modsDoneCount=(c)=>{ c=c||CUR(); const co=c&&contentOf(c); return co?co.modules.filter(m=>!m.locked&&S.mod[gk(c.id,m.id)]).length:0; };
  const modsTotal=(c)=>{ c=c||CUR(); const co=c&&contentOf(c); return co?co.modules.filter(m=>!m.locked).length:0; };
  const today=()=>new Date().toISOString().slice(0,10);
  function touchStreak(){ const t=today(),s=S.streak; if(s.last===t)return;
    const y=new Date(Date.now()-86400000).toISOString().slice(0,10);
    s.days=(s.last===y)?(s.days+1):1; s.best=Math.max(s.best||0,s.days); s.last=t; }
  const BADGES=[
    {id:"primeiro",icon:"🎯",name:"Primeiro passo",desc:"Abrir o primeiro módulo",cond:()=>Object.keys(S.mod).length>=1},
    {id:"metade",icon:"⛰️",name:"Meio caminho",desc:"Concluir 4 módulos",cond:()=>modsDoneCount()>=4},
    {id:"mestre",icon:"🏔️",name:"Mestre do curso",desc:"Concluir todos os módulos",cond:()=>modsDoneCount()>=modsTotal()},
    {id:"aprovado",icon:"🏆",name:"Aprovado na prova",desc:"Passar na prova final",cond:()=>!!S.finalPassed[CUR().id]},
    {id:"memoria",icon:"🧠",name:"Boa memória",desc:"Dominar 10 termos",cond:()=>FLASH.stats(unlockedGlossary()).mastered>=10},
    {id:"constante",icon:"🔥",name:"Constância",desc:"3 dias seguidos",cond:()=>(S.streak.days||0)>=3}
  ];
  function checkBadges(){ BADGES.forEach(b=>{ if(!S.badges[b.id]&&b.cond()) S.badges[b.id]=today(); }); }
  function award(pts,what){ S.points=(S.points||0)+pts; touchStreak();
    if(what){ S.activity.unshift({w:what,d:today(),p:pts}); S.activity=S.activity.slice(0,20); } checkBadges(); save(); }
  const save=()=>localStorage.setItem(KEY,JSON.stringify(S));
  const trackName=id=>({atleta:"🏃 Atleta",treinador:"🎓 Treinador"}[id]||"escolher");
  const go=h=>location.hash=h;
  window.addEventListener("hashchange",render);

  /* glossário → tooltip (mapa reconstruído por curso dentro de attachGlossary) */
  window.__attachGlossary=root=>attachGlossary(root);

  function buildNav(){
    const items=[["#/","home","Início"],["#/ferramentas","tools","Ferramentas"],["#/revisar","cards","Revisar"],["#/painel","panel","Meu painel"],["#/glossario","gloss","Glossário"]];
    nav.innerHTML=items.map(([h,ic,l])=>`<div class="navbtn" data-h="${h}" title="${l}">${ICON[ic]}</div>`).join("");
    nav.querySelectorAll(".navbtn").forEach(b=>b.onclick=()=>go(b.dataset.h));
    const np=document.getElementById("navperfil");
    if(np){ np.textContent=(S.name||"A").trim().charAt(0).toUpperCase()||"A"; np.onclick=()=>go("#/perfil"); }
  }
  function markNav(){ const h=location.hash||"#/";
    nav.querySelectorAll(".navbtn").forEach(b=>b.classList.toggle("active", b.dataset.h===h || (b.dataset.h!=="#/"&&h.startsWith(b.dataset.h))));
    const np=document.getElementById("navperfil"); if(np){ np.classList.toggle("active",h.startsWith("#/perfil")); np.textContent=(S.name||"A").trim().charAt(0).toUpperCase()||"A"; } }
  document.getElementById("logo").onclick=()=>go("#/");
  trackPill.onclick=()=>{ S.coach=!S.coach; save(); render(); };
  function syncPill(){ trackPill.innerHTML="🎓 Modo treinador: <b>"+(S.coach?"ligado":"desligado")+"</b>"; trackPill.classList.toggle("on",!!S.coach); trackPill.title="Liga/desliga o 'Fundo técnico' — o aprofundamento para treinadores e estudantes."; }
  function renderAcct(){ const el=document.getElementById("acctpill"); if(!el)return;
    if(IMP.isLogged()){ const sub=!!(ME&&ME.subscription&&ME.subscription.status==="active");
      const nm=(ME&&ME.email?ME.email.split("@")[0]:"conta");
      el.className="acctpill logged"; el.innerHTML=(sub?"<span class='sub-dot'></span>":"")+"<span class='acct-nm'>"+nm+"</span>";
      el.title=sub?"Assinante ativo":"Minha conta"; el.onclick=()=>go("#/perfil");
    } else { el.className="acctpill"; el.innerHTML="Entrar"; el.title="Entrar ou criar conta";
      el.onclick=()=>{ loginReturn=location.hash||"#/"; go("#/entrar"); }; } }
  function updateTopbar(p){
    const inCourse = p[0]==="curso" || ["painel","glossario","revisar","prova","bibliografia"].indexOf(p[0])>=0;
    const inModule = p[0]==="curso" && p[2]==="modulo";
    const cp=document.getElementById("cprog"), tp=document.getElementById("topprogress");
    if(cp) cp.style.display = inCourse ? "" : "none";
    if(tp) tp.style.display = inCourse ? "" : "none";
    trackPill.style.display = inModule ? "" : "none";
    renderAcct();
  }

  const publishedCourses=()=>P.courses.filter(c=>c.published);
  // curso concluído = TODOS os módulos visitados E com teste feito (não só o Módulo 0)
  function courseDone(c){ const co=contentOf(c); if(!co)return false;
    return co.modules.every(m=> !m.locked && S.mod[gk(c.id,m.id)] && (!m.quiz || S.quiz[gk(c.id,m.id)]!=null)); }
  function setBar(){ const c=CUR(); const tot=modsTotal(c)||1;
    const d=modsDoneCount(c); const pct=Math.round(d/tot*100);
    bar.style.width=pct+"%";
    const cp=document.getElementById("cprog");
    if(cp){ cp.innerHTML=`<span class="cbar"><i style="width:${pct}%"></i></span><b>${d}/${tot}</b> módulos`;
      cp.title="Progresso do curso — clique para ver os módulos"; cp.onclick=()=>go("#/curso/"+c.id); }
  }

  function loading(){ app.innerHTML=`<div class="block" style="text-align:center;padding:48px"><div class="lead">Carregando…</div></div>`; }
  async function render(){
    syncPill(); markNav(); window.scrollTo(0,0); killFoot();
    app.classList.remove("wide");
    const p=(location.hash||"#/").replace(/^#\//,"").split("/").filter(Boolean);
    updateTopbar(p);
    if(!p.length){ setBar(); return catalog(); }
    if(p[0]==="ferramentas"){ setBar(); return ferramentas(); }
    if(p[0]==="entrar"){ setBar(); return entrar(p[1]); }
    if(p[0]==="planos"){ setBar(); return planos(); }
    if(p[0]==="perfil"){ setBar(); return perfil(); }
    if(p[0]==="trilha"){ setBar(); const path=(P.paths||[]).find(x=>x.id===p[1]); return path?trilha(path):catalog(); }
    if(["glossario","revisar","prova","painel","bibliografia"].indexOf(p[0])>=0){ loading(); await ensureCourse(CUR().id); setBar();
      if(p[0]==="glossario") return glossario();
      if(p[0]==="revisar") return revisar();
      if(p[0]==="prova") return prova();
      if(p[0]==="bibliografia") return bibliografia();
      return painel();
    }
    if(p[0]==="curso"){ const c=courseOf(p[1]);
      if(!c){ setBar(); return catalog(); }
      if(c.published){ loading(); await ensureCourse(c.id); setBar(); const co=contentOf(c);
        if(co && p[2]==="modulo"){ const mod=co.modules.find(m=>String(m.id)===p[3]); return mod?modulo(c,mod):curso(c); }
      }
      setBar(); return curso(c);
    }
    setBar(); catalog();
  }
  const div=(cls,html)=>{const d=document.createElement("div");d.className=cls;d.innerHTML=html;return d;};
  const ltags=(arr,max)=>{ if(!arr)return ""; const a=arr.slice(0,max||arr.length), extra=arr.length-a.length;
    return a.map((t,i)=>`<span class="ltag c${i%6}">${t}</span>`).join("")+(extra>0?`<span class="ltag more">+${extra}</span>`:""); };

  /* ---------- CATÁLOGO (home multi-curso) ---------- */
  function catalog(){
    app.innerHTML=`
      <div class="img-duo art" style="height:190px">
        <img src="assets/img/hero.jpg" alt="">
        <div class="on"><span class="kicker">Instituto de Movimento e Performance</span>
          <h1 style="color:#fff;font-size:26px;margin:0">Aprenda fazendo</h1>
          <p style="color:#e9e6ff;margin:6px 0 0">Cursos práticos onde você calcula, monta e testa — não só lê.</p></div>
      </div>
      <div id="continue"></div>
      <div id="pathsrow"></div>
      <div class="cat-head"><h2 class="section" style="margin:18px 0 2px">Catálogo de cursos</h2>
        <p class="lead" id="ccount"></p></div>
      <input class="gsearch" id="csearch" placeholder="Buscar curso…">
      <div class="chips" id="chips"></div>
      <div class="grid three" id="cat" style="margin-top:16px"></div>`;
    // Continuar aprendendo (usa dados salvos em S.last, sem depender do conteúdo carregado)
    if(S.last && courseOf(S.last.c) && S.last.t){
      const c=courseOf(S.last.c), cont=div("block feature","");
      cont.innerHTML=`<div class="eyebrow">Continuar aprendendo</div>
        <div style="display:flex;gap:14px;align-items:center;margin-top:10px;flex-wrap:wrap">
          <div class="img-duo" style="width:120px;height:70px;border-radius:12px;flex:none"><img src="${S.last.img||''}" alt=""></div>
          <div style="flex:1;min-width:160px"><b style="font-size:16px">${S.last.t}</b><div class="lead" style="margin:2px 0 0">${S.last.ct||c.title} · Módulo ${S.last.m}</div></div>
          <button class="btn" id="contbtn">Retomar →</button></div>`;
      app.querySelector("#continue").appendChild(cont);
      cont.querySelector("#contbtn").onclick=()=>go("#/curso/"+c.id+"/modulo/"+S.last.m);
    }
    // Trilhas de aprendizagem
    if(P.paths&&P.paths.length){ const pr=div("","");
      pr.innerHTML=`<h2 class="section" style="margin:22px 0 2px">Trilhas de aprendizagem</h2>
        <p class="lead">Sequências de cursos com um objetivo.</p><div class="grid three" id="pcards" style="margin-top:12px"></div>`;
      app.querySelector("#pathsrow").appendChild(pr);
      const pc=pr.querySelector("#pcards");
      P.paths.forEach(p=>{ const card=div("ccard",
        `<div class="body"><div style="font-size:26px">${p.icon}</div>
          <h3 style="margin:6px 0 4px">${p.name}</h3><p>${p.desc}</p>
          <div class="foot"><span class="chip">${p.courses.length} cursos</span><span class="go">ver trilha →</span></div></div>`);
        card.onclick=()=>go("#/trilha/"+p.id); pc.appendChild(card);
      });
    }
    let cat="todos", q="";
    const chips=app.querySelector("#chips");
    chips.innerHTML=P.categories.map(c=>`<button class="fchip${c.id==='todos'?' on':''}" data-c="${c.id}">${c.name}</button>`).join("");
    chips.querySelectorAll(".fchip").forEach(b=>b.onclick=()=>{cat=b.dataset.c;
      chips.querySelectorAll(".fchip").forEach(x=>x.classList.toggle("on",x===b)); paint();});
    app.querySelector("#csearch").oninput=e=>{q=e.target.value.toLowerCase().trim();paint();};
    const grid=app.querySelector("#cat");
    function paint(){
      const list=P.courses.filter(c=>(cat==="todos"||c.cat===cat)&&(!q||(c.title+c.sub).toLowerCase().includes(q)));
      const np=publishedCourses().length;
      app.querySelector("#ccount").textContent=list.length+" curso"+(list.length!=1?"s":"")+" · "+np+" dispon"+(np!=1?"íveis":"ível")+" agora";
      grid.innerHTML="";
      list.forEach(c=>{
        const done=c.published&&courseDone(c);
        const prog=c.published&&Object.keys(S.mod).some(k=>k.indexOf(c.id+":")===0);
        const cta=c.published?(done?'Revisar curso':(prog?'Continuar curso':'Começar curso')):'Saber mais';
        const card=div("ccard"+(c.published?"":" soon"),`
          <div class="thumb img-duo"><img src="${c.img}" alt="">${c.published?'<span class="ribbon">Disponível</span>':'<span class="ribbon soon">Em breve</span>'}</div>
          <div class="body"><h3>${c.title}</h3><p>${c.sub}</p>
            <div class="ctags">${ltags(c.learn,3)}</div>
            <button class="cta ${c.published?'':'soon'}${(prog&&!done)?' cont':''}${done?' rev':''}">${cta} →</button>
          </div>`);
        const open=()=>go("#/curso/"+c.id);
        card.querySelector(".thumb").onclick=open; card.querySelector(".cta").onclick=open;
        grid.appendChild(card);
      });
    }
    paint();
  }

  /* ---------- teaser de curso "em breve" ---------- */
  function teaser(c){
    app.innerHTML=`
      <div class="img-duo art" style="height:220px"><img src="${c.img}" alt="">
        <div class="on"><span class="kicker">Em breve</span><h1>${c.title}</h1><p>${c.sub}</p></div></div>
      <div class="block" style="margin-top:18px"><h3>Este curso ainda está em produção.</h3>
      <p class="lead">A plataforma cresce com o tempo. Enquanto isso, comece pelo curso já disponível.</p>
      <div class="btnrow"><button class="btn" id="gotrail">Ver o curso disponível →</button>
      <button class="btn ghost" id="back">Voltar ao catálogo</button></div></div>`;
    app.querySelector("#gotrail").onclick=()=>go("#/curso/trail");
    app.querySelector("#back").onclick=()=>go("#/");
  }

  /* ---------- página do curso (publicado ou "em breve") ---------- */
  function curso(c){
    const co=contentOf(c);
    if(c.published && co){ S.course=c.id; save(); }
    const title=co?co.title:c.title, sub=co?co.subtitle:c.sub;
    app.innerHTML=`
      <div class="crumb"><a data-h="#/">Catálogo</a><span>›</span><b>${title}</b></div>
      <div class="img-duo art hero" style="height:240px"><img src="${c.img}" alt="">
        <div class="on"><span class="kicker">${cname(c.cat)}${c.published?"":" · em breve"}</span><h1>${title}</h1><p>${sub}</p></div></div>
      <div class="metaline">
        <span>${ICON.layers} <b>${c.dur}</b></span>
        <span>${ICON.clock} <b>${c.level}</b></span>
        ${c.published?'<span class="chip done">Disponível agora</span>':'<span class="chip">Em produção</span>'}
      </div>
      <div class="learn-box"><h3>🎯 O que você vai aprender</h3>
        <p class="lead">Os conceitos-chave deste curso:</p>
        <div class="learn-tags">${ltags(c.learn)}</div></div>
      <div id="body"></div>`;
    app.querySelectorAll(".crumb a[data-h]").forEach(a=>a.onclick=()=>go(a.dataset.h));
    const body=app.querySelector("#body");
    if(c.published && co){
      const gate = co.locked ? `<div class="block feature" style="margin-bottom:16px"><div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <div style="flex:1;min-width:200px"><b style="font-size:16px">🔓 Módulo 1 é grátis</b><div class="lead" style="margin-top:2px">Assine o Instituto para desbloquear todos os módulos, a prova e o certificado — de todos os cursos.</div></div>
        <button class="btn" id="assinar">Assinar →</button></div></div>` : "";
      body.innerHTML=gate+`<div class="eyebrow">Conteúdo do curso</div><h2 class="section">Sua trilha de aprendizagem</h2><div class="grid two" id="mods" style="margin-top:14px"></div>`;
      const ab=body.querySelector("#assinar"); if(ab) ab.onclick=()=>go("#/planos");
      const grid=body.querySelector("#mods");
      co.modules.forEach(m=>{
        const started=S.mod[gk(c.id,m.id)], locked=m.locked;
        const card=div("ccard"+(locked?" locked":""),`
          <div class="thumb img-duo"><img src="${m.img}" alt="">${locked?'<span class="ribbon soon">🔒</span>':''}</div>
          <div class="body"><div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
            <span class="modnum">${m.id}</span><h3 style="margin:0">${m.title}</h3></div>
            <p>${m.summary}</p>
            <div class="foot">${locked?'<span class="chip">🔒 assinantes</span><span class="go">assinar →</span>':
              `<span class="chip ${started?'done':''}">${started?'concluído':((m.sections?m.sections.length+' seções':'começar'))}</span><span class="go">${started?'revisar':'começar'} →</span>`}</div></div>`);
        card.onclick=()=>go("#/curso/"+c.id+"/modulo/"+m.id);
        grid.appendChild(card);
      });
      footCustom([{label:"← Catálogo",ghost:true,on:()=>go("#/")},{label:"📚 Bibliografia",ghost:true,on:()=>go("#/bibliografia")},{label:"Glossário do curso",ghost:true,on:()=>go("#/glossario")}]);
    } else {
      body.innerHTML=`<div class="block"><h3>Este curso ainda está em produção.</h3>
        <p class="lead">A plataforma cresce com o tempo. Enquanto isso, comece pelo curso já disponível — é gratuito e completo.</p>
        <div class="btnrow"><button class="btn" id="gotrail">Ver o curso disponível →</button>
        <button class="btn ghost" id="back">Voltar ao catálogo</button></div></div>`;
      body.querySelector("#gotrail").onclick=()=>go("#/curso/trail");
      body.querySelector("#back").onclick=()=>go("#/");
      footCustom([{label:"← Catálogo",ghost:true,on:()=>go("#/")}]);
    }
  }
  const cname=id=>{const c=P.categories.find(x=>x.id===id);return c?c.name:"Curso";};
  function name(id){return cname(id);}

  /* ---------- MÓDULO (rolagem única) ---------- */
  function modulo(c,mod){
    if(mod.locked) return paywallModule(c,mod);
    S.course=c.id;
    app.classList.add("wide");
    app.innerHTML=`<div class="crumb"><a data-h="#/">Catálogo</a><span>›</span><a data-h="#/curso/${c.id}">${contentOf(c).title}</a><span>›</span><b>Módulo ${mod.id}</b></div>
      <div class="img-duo art" style="height:180px"><img src="${mod.img}" alt="">
        <div class="on"><span class="kicker">Módulo ${mod.id}</span><h1 style="color:#fff;font-size:26px;margin:0">${mod.title}</h1></div></div>
      <p class="lead" style="margin-top:14px">${mod.summary}</p>
      <div class="lesson-grid">
        <div class="lesson-main" id="lmain"></div>
        <aside class="lesson-aside"><div class="aside-inner" id="aside"></div></aside>
      </div>`;
    const main=app.querySelector("#lmain");
    app.querySelectorAll(".crumb a[data-h]").forEach(a=>a.onclick=()=>go(a.dataset.h));
    const outline=[];
    mod.sections.forEach((sec,i)=>{ const w=document.createElement("section"); w.className="lesson-sec"; w.id="sec-"+i;
      w.innerHTML=`<h3><span class="n">${sec.n}</span>${sec.title}</h3><div class="sec-body"></div>`;
      const body=w.querySelector(".sec-body");
      sec.blocks.forEach(b=>body.appendChild(renderBlock(b))); main.appendChild(w);
      outline.push({id:"sec-"+i, n:sec.n, title:sec.title}); });
    if(mod.quiz){ const qs=document.createElement("section"); qs.className="lesson-sec"; qs.id="sec-quiz"; main.appendChild(qs); renderQuiz(c,mod,qs);
      outline.push({id:"sec-quiz", n:"✓", title:mod.quiz.title}); }
    const estudos=collectEstudos(mod);
    if(estudos.length){ const fs=document.createElement("section"); fs.className="lesson-sec"; fs.id="sec-fontes";
      fs.innerHTML="<h3><span class='n'>📚</span>Fontes deste módulo</h3><div class='sec-body'><p class='lead' style='margin-top:0'>A ciência por trás do que você acabou de ver:</p><div class='fontes'></div></div>";
      const fb=fs.querySelector(".fontes"); estudos.forEach(e=>fb.appendChild(div("fonte-item",fonteLine(e))));
      main.appendChild(fs); outline.push({id:"sec-fontes", n:"📚", title:"Fontes deste módulo"}); }
    attachGlossary(main);

    /* painel lateral "Neste módulo" */
    const aside=app.querySelector("#aside");
    aside.innerHTML=`<div class="aside-title">Módulo ${mod.id} · neste módulo</div>
      <div class="learn-tags">${ltags(mod.learn||[])}</div>
      <div class="outline">${outline.map(o=>`<a data-t="${o.id}"><span class="oi">${o.n}</span><span>${o.title}</span></a>`).join("")}</div>
      <div class="aside-actions">
        <button class="btn ghost small" id="a-course">← Todos os módulos</button>
        <button class="btn small" id="a-flash">🧠 Revisar flashcards</button>
        <button class="btn ghost small" id="a-gloss">📖 Glossário</button>
        <button class="btn ghost small" id="a-bib">📚 Bibliografia</button>
      </div>`;
    aside.querySelectorAll(".outline a").forEach(a=>a.onclick=()=>{
      const t=document.getElementById(a.dataset.t); if(t) t.scrollIntoView({behavior:"smooth",block:"start"}); });
    aside.querySelector("#a-course").onclick=()=>go("#/curso/"+c.id);
    aside.querySelector("#a-flash").onclick=()=>go("#/revisar");
    aside.querySelector("#a-gloss").onclick=()=>go("#/glossario");
    aside.querySelector("#a-bib").onclick=()=>go("#/bibliografia");
    // scroll-spy: destaca a seção visível no índice
    const links=aside.querySelectorAll(".outline a");
    const setActive=id=>links.forEach(l=>l.classList.toggle("active",l.dataset.t===id));
    if("IntersectionObserver" in window){
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id);}),
        {rootMargin:"-35% 0px -60% 0px"});
      main.querySelectorAll("section[id]").forEach(s=>io.observe(s));
    }
    setActive(outline[0]&&outline[0].id);

    // flashcards são OPT-IN: o aluno adiciona clicando nos termos sublinhados (não acumula sozinho)
    if(!S.hintFlash){ const h=div("flash-hint","💡 <b>Dica:</b> toque nos <span class='term'>termos sublinhados</span> do texto para adicioná-los aos seus flashcards e memorizar depois."); main.insertBefore(h,main.firstChild); S.hintFlash=1; }
    S.last={c:c.id,m:mod.id,t:mod.title,img:mod.img,ct:(contentOf(c)||{}).title||c.title};
    if(!S.mod[gk(c.id,mod.id)]){ S.mod[gk(c.id,mod.id)]=true; award(20,"Concluiu o Módulo "+mod.id+": "+mod.title); }
    save(); setBar();
    footCustom([{label:"← Módulos",ghost:true,on:()=>go("#/curso/"+c.id)},
      {label:"Próximo módulo →",on:()=>{const nx=contentOf(c).modules.find(m=>m.id===mod.id+1);
        (nx&&!nx.locked)?go("#/curso/"+c.id+"/modulo/"+nx.id):go("#/curso/"+c.id);}}]);
  }

  /* ---------- revisar flashcards (rota direta) ---------- */
  function revisar(){
    const c=CUR(), co=CO(); const deck=unlockedGlossary(c);
    app.innerHTML=`<div class="eyebrow">Memorização</div><h2 class="section">🧠 Revisar flashcards</h2>
      <p class="lead">Repetição espaçada do glossário de <b>${co.title}</b> — você monta seu baralho <b>tocando nos termos sublinhados</b> do texto.</p>
      <div id="cswitch"></div><div id="fh"></div>`;
    courseSwitcher(app.querySelector("#cswitch"),()=>revisar());
    if(!deck.length){
      app.querySelector("#fh").appendChild(div("block","<h3>Seu baralho está vazio 🃏</h3><p class='lead'>Ao ler os módulos, toque nos <span class='term'>termos sublinhados</span> e clique em <b>➕ Adicionar aos flashcards</b> para memorizar o que quiser.</p><div class='btnrow'><button class='btn' id='goc'>Ir para o curso →</button></div>"));
      app.querySelector("#goc").onclick=()=>go("#/curso/"+c.id);
    } else {
      app.querySelector("#fh").appendChild(div("lead","Você já desbloqueou <b>"+deck.length+"</b> de "+co.glossary.length+" termos."));
      app.querySelector("#fh").appendChild(FLASH.review(deck,()=>go("#/painel")));
    }
    footCustom([{label:"← Voltar ao curso",ghost:true,on:()=>go("#/curso/"+CUR().id)},{label:"Meu painel",ghost:true,on:()=>go("#/painel")}]);
  }
  /* seletor de curso (aparece só quando há mais de um publicado) */
  function courseSwitcher(host,after){
    if(!host) return; const pub=publishedCourses(); if(pub.length<2) return;
    host.className="chips"; host.style.margin="0 0 12px";
    host.innerHTML=pub.map(c=>`<button class="fchip${c.id===CUR().id?' on':''}" data-c="${c.id}">${c.title}</button>`).join("");
    host.querySelectorAll(".fchip").forEach(b=>b.onclick=()=>{ S.course=b.dataset.c; save(); after&&after(); });
  }

  function renderBlock(b){
    switch(b.type){
      case "prose": return div("prose", b.html);
      case "callout": {
        if(b.track==="treinador"){
          const d=div("tech"+(S.coach?" open":""),"<button class='tech-head'><span class='tech-ico'>🔬</span> "+(b.tag||"Fundo técnico")+" <span class='tech-arw'>▾</span></button><div class='tech-body'>"+b.html+"</div>");
          d.querySelector(".tech-head").onclick=()=>d.classList.toggle("open");
          return d;
        }
        return div("callout athlete",(b.tag?`<span class="tag">${b.tag}</span>`:"")+b.html);
      }
      case "faca": return div("faca","<span class='tag'>Faça você</span> "+b.html);
      case "estudo": return estudoBlock(b);
      case "img": { const f=document.createElement("figure"); f.className="diagram";
        f.innerHTML=`<img loading="lazy" src="${b.src}" alt="${b.alt||''}">`+(b.caption?`<figcaption>${b.caption}</figcaption>`:"");
        return f; }
      case "visual": case "tool": return TOOLS[b.component]?TOOLS[b.component](b.caption):div("prose","");
      case "classify": return classifyBlock(b);
      case "check": return checkBlock(b);
      default: return div("prose", b.html||"");
    }
  }
  function estudoBlock(b){
    const cite=(b.autores||"")+(b.ano?" · "+b.ano:"");
    const meta=[b.revista,b.tipo,(b.amostra&&b.amostra!=="—"?"n="+b.amostra:"")].filter(Boolean).join(" · ");
    const d=div("estudo",
      "<button class='est-head'><span class='est-ico'>📄</span><span class='est-lbl'>O estudo</span><span class='est-cite'>"+cite+"</span><span class='est-arw'>▾</span></button>"+
      "<div class='est-body'>"+
        (b.titulo?"<div class='est-t'>"+b.titulo+"</div>":"")+
        (meta?"<div class='est-meta'>"+meta+"</div>":"")+
        (b.achado?"<p class='est-ach'>"+b.achado+"</p>":"")+
        (b.link?"<a href='"+b.link+"' target='_blank' rel='noopener' class='est-link'>Ver estudo ↗</a>":"")+
      "</div>");
    d.querySelector(".est-head").onclick=()=>d.classList.toggle("open");
    return d;
  }
  function collectEstudos(mod){ const out=[]; (mod.sections||[]).forEach(s=>(s.blocks||[]).forEach(bl=>{if(bl.type==="estudo")out.push(bl);})); return out; }
  function fonteLine(e){ return "<b>"+(e.autores||"")+(e.ano?" ("+e.ano+")":"")+"</b>. "+(e.titulo||"")+(e.revista?". <i>"+e.revista+"</i>":"")+(e.link?" · <a href='"+e.link+"' target='_blank' rel='noopener'>ver ↗</a>":""); }
  function checkBlock(b){ const d=div("check-block","<div class='qhead'><span class='qi'>?</span>Checagem rápida</div><p class='qtext'>"+b.q+"</p>");
    b.options.forEach((opt,i)=>{const btn=document.createElement("button");btn.className="opt";btn.textContent=opt;
      btn.onclick=()=>{d.querySelectorAll(".opt").forEach(o=>o.disabled=true);const good=i===b.answer;
        btn.classList.add(good?"correct":"wrong"); if(!good)d.querySelectorAll(".opt")[b.answer].classList.add("correct");
        d.appendChild(div("explain "+(good?"good":"bad"),(good?"Correto! ":"Quase. ")+b.explain));}; d.appendChild(btn);});
    return d; }
  function classifyBlock(b){ const d=div("tool",""); const labels=b.labels||[["continuo","Contínuo"],["fracionado","Fracionado"]];
    b.items.forEach(it=>{const row=div("classify-item","<div class='q'>"+it.text+"</div>");const ch=document.createElement("div");ch.className="choices"; const btns={};
      labels.forEach(([val,lbl])=>{const btn=document.createElement("button");btn.textContent=lbl; btns[val]=btn;
        btn.onclick=()=>{if(row.dataset.done)return;row.dataset.done=1;const good=val===it.answer;
          btn.innerHTML=lbl+(good?" <span class='tag-ok'>✓</span>":" <span class='tag-bad'>✗</span>");
          if(!good&&btns[it.answer])btns[it.answer].innerHTML=btns[it.answer].textContent+" <span class='tag-ok'>✓</span>";};
        ch.appendChild(btn);}); row.appendChild(ch); d.appendChild(row);}); return d; }

  function renderQuiz(c,mod,host){ const q=mod.quiz; let answered=0,correct=0;
    host.classList.add("quiz-sec");
    host.innerHTML=`<h3><span class="n">✓</span>${q.title}</h3><div class="sec-body"><p class="lead" style="margin-top:0">${q.questions.length} questões · feedback na hora.</p></div>`;
    const qhost=host.querySelector(".sec-body");
    q.questions.forEach((item,qi)=>{const d=div("quiz-q","<b>"+(qi+1)+". "+item.q+"</b>");
      item.options.forEach((opt,i)=>{const btn=document.createElement("button");btn.className="opt";btn.textContent=opt;
        btn.onclick=()=>{d.querySelectorAll(".opt").forEach(o=>o.disabled=true);const good=i===item.answer;if(good)correct++;answered++;
          btn.classList.add(good?"correct":"wrong");if(!good)d.querySelectorAll(".opt")[item.answer].classList.add("correct");
          d.appendChild(div("explain "+(good?"good":"bad"),item.explain));
          if(answered===q.questions.length){const pct=Math.round(correct/q.questions.length*100); const firstQ=S.quiz[gk(c.id,mod.id)]==null; S.quiz[gk(c.id,mod.id)]=pct; if(firstQ)award(15,"Teste do Módulo "+mod.id+": "+pct+"%"); save();
            const bn=div("done-banner","<div class='big'>"+(pct>=80?"🎉":"💪")+"</div><h3>Você acertou "+correct+"/"+q.questions.length+" ("+pct+"%)</h3><p class='lead'>"+(pct>=80?"Módulo dominado!":"Bom começo — revise os pontos em vermelho.")+"</p>");
            qhost.appendChild(bn);bn.scrollIntoView({behavior:"smooth"});}}; d.appendChild(btn);}); qhost.appendChild(d);});
  }

  /* ---------- GLOSSÁRIO ---------- */
  function glossario(){
    const co=CO();
    app.innerHTML=`<div class="eyebrow">Referência</div><h2 class="section">Glossário</h2>
      <p class="lead">Os termos de <b>${co.title}</b> em linguagem simples. No conteúdo eles aparecem <span class="term">sublinhados</span>.</p>
      <div id="cswitch"></div>
      <input class="gsearch" id="gs" placeholder="Buscar termo…"><div class="gloss" id="gl"></div>`;
    courseSwitcher(app.querySelector("#cswitch"),()=>glossario());
    const gl=app.querySelector("#gl");
    const paint=f=>{gl.innerHTML="";co.glossary.filter(([t,d])=>!f||t.toLowerCase().includes(f)||d.toLowerCase().includes(f))
      .forEach(([t,d])=>gl.appendChild(div("gitem","<b>"+t+"</b><p>"+d+"</p>")));};
    paint(""); app.querySelector("#gs").oninput=e=>paint(e.target.value.toLowerCase().trim());
    footCustom([{label:"← Voltar ao curso",ghost:true,on:()=>go("#/curso/"+CUR().id)},{label:"📚 Bibliografia",ghost:true,on:()=>go("#/bibliografia")}]);
  }

  /* ---------- BIBLIOGRAFIA (todas as fontes do curso) ---------- */
  async function bibliografia(){
    loading();
    const c=CUR(), co=CO(); const data=await IMP.sources(c.id).catch(()=>({modules:[]}));
    const all=data.modules||[]; const total=all.reduce((n,m)=>n+(m.estudos||[]).length,0);
    app.innerHTML=`<div class="eyebrow">Referências</div><h2 class="section">📚 Bibliografia</h2>
      <div id="cswitch"></div>
      <p class="lead">Todos os estudos e revisões citados em <b>${(data.title||co&&co.title)||"este curso"}</b> (${total} fontes). Nada aqui é "achismo" — cada afirmação tem base científica.</p>
      <div id="bib"></div>`;
    courseSwitcher(app.querySelector("#cswitch"),()=>bibliografia());
    const host=app.querySelector("#bib");
    if(!total){ host.appendChild(div("block","<p class='lead'>As fontes deste curso estão sendo adicionadas.</p>")); }
    all.forEach(m=>{ const b=div("block","<b style='font-size:15px'>Módulo "+m.id+" · "+m.title+"</b><div class='fontes' style='margin-top:8px'></div>");
      const fb=b.querySelector(".fontes"); (m.estudos||[]).forEach(e=>fb.appendChild(div("fonte-item",fonteLine(e)))); host.appendChild(b); });
    footCustom([{label:"← Voltar ao curso",ghost:true,on:()=>go("#/curso/"+CUR().id)},{label:"Glossário",ghost:true,on:()=>go("#/glossario")}]);
  }

  /* ---------- FERRAMENTAS (analisador + calculadoras) ---------- */
  function ferramentas(){
    app.innerHTML=`<div class="eyebrow">Plataforma</div><h2 class="section">Ferramentas</h2>
      <p class="lead">Use quando quiser — inclusive com os seus próprios treinos.</p>`;
    const feat=div("block feature","<div style='display:flex;align-items:center;gap:10px;margin-bottom:4px'>"+ICON.upload+"<b style='font-size:17px'>Analisar meu treino</b><span class='chip' style='margin-left:auto'>novo</span></div>");
    feat.appendChild(window.ANALYZER.ui()); app.appendChild(feat);
    [["Minhas zonas de intensidade","zonas"],["Correr ou caminhar na subida?","correrCaminhar"],["Velocidade ascensional","ascensional"]]
      .forEach(([t,fn])=>{const d=div("tool","<b style='font-size:16px'>"+t+"</b>");d.appendChild(TOOLS[fn]());app.appendChild(d);});
  }

  /* ---------- PAINEL (progresso + flashcards + certificado) ---------- */
  function painel(){
    const c=CUR(), co=CO(); const fp=!!S.finalPassed[c.id];
    const deck=unlockedGlossary(c); const fs=FLASH.stats(deck);
    const modsTot=modsTotal(c), modsDone=modsDoneCount(c);
    const allModsDone=modsDone===modsTot;
    const myQuiz=Object.keys(S.quiz).filter(k=>k.indexOf(c.id+":")===0).map(k=>S.quiz[k]);
    const bestQuiz=myQuiz.length?Math.max(...myQuiz):null;
    const cert=courseDone(c) && fp;
    app.innerHTML=`<div class="eyebrow">Meu painel</div><h2 class="section">Seu progresso</h2>
      <div id="cswitch"></div>
      <p class="lead" style="margin:-4px 0 0">Curso: <b>${co.title}</b></p>
      <div class="astats" style="margin-top:12px">
        <div class="astat"><div class="v">${modsDone}/${modsTot}</div><div class="l">módulos concluídos</div></div>
        <div class="astat"><div class="v">${fp?"✓":(bestQuiz!=null?bestQuiz+"%":"—")}</div><div class="l">${fp?"prova final":"melhor teste"}</div></div>
        <div class="astat"><div class="v">${fs.mastered}/${co.glossary.length}</div><div class="l">termos dominados</div></div>
        <div class="astat"><div class="v">${fs.due}</div><div class="l">cartões p/ revisar</div></div>
        <div class="astat"><div class="v">${S.points||0}</div><div class="l">pontos</div></div>
        <div class="astat"><div class="v">${S.streak.days||0} 🔥</div><div class="l">dias seguidos</div></div>
      </div>

      <div class="block" style="margin-top:16px"><div style="display:flex;align-items:center;gap:10px">
        <b style="font-size:16px">🏅 Conquistas</b><span class="chip" style="margin-left:auto">${Object.keys(S.badges).length}/${BADGES.length}</span></div>
        <div class="badges" id="badges" style="margin-top:12px"></div></div>

      <div class="block" style="margin-top:16px"><b style="font-size:16px">🕑 Atividade recente</b><div id="activity" style="margin-top:10px"></div></div>

      <div class="block" style="margin-top:16px"><div style="display:flex;align-items:center;gap:10px">
        <b style="font-size:16px">🧠 Revisar flashcards</b><span class="chip" style="margin-left:auto">${deck.length}/${co.glossary.length} desbloqueados</span></div>
        <p class="lead">${deck.length?"Repetição espaçada — "+fs.due+" cartão(ões) para revisar hoje.":"Abra os módulos do curso para desbloquear cartões."}</p>
        <div class="btnrow"><button class="btn" id="startflash" ${deck.length?"":"disabled"}>Revisar agora</button></div>
        <div id="flashhost"></div></div>

      <div class="block" style="margin-top:16px"><div style="display:flex;align-items:center;gap:10px">
        <b style="font-size:16px">🏁 Prova final</b><span class="chip ${fp?'done':''}" style="margin-left:auto">${fp?"aprovado ✓":(allModsDone?"liberada":"conclua os módulos")}</span></div>
        <p class="lead">${co.finalExam.questions.length} questões cobrindo o curso inteiro. Aprovação: ${co.finalExam.pass}%.</p>
        <div class="btnrow"><button class="btn" id="startexam" ${allModsDone?"":"disabled"}>${fp?"Refazer prova":"Fazer a prova"}</button></div></div>

      <div class="block" style="margin-top:16px"><b style="font-size:16px">🎓 Certificado</b>
        <p class="lead">${cert?"Você concluiu TODOS os módulos e passou na prova final! Gere seu certificado.":"Libere concluindo os "+modsTot+" módulos e sendo aprovado na prova final."}</p>
        <div class="btnrow ${cert?"":"hide"}" id="certrow">
          <input class="gsearch" style="max-width:280px;margin:0" id="cname" placeholder="Seu nome completo" value="${S.name||""}">
          <button class="btn" id="gencert">Gerar certificado</button></div></div>`;
    courseSwitcher(app.querySelector("#cswitch"),()=>painel());
    const sf=app.querySelector("#startflash"); if(sf&&!sf.disabled) sf.onclick=()=>{const host=app.querySelector("#flashhost");
      host.innerHTML=""; host.appendChild(FLASH.review(deck,()=>painel())); host.scrollIntoView({behavior:"smooth"});};
    const se=app.querySelector("#startexam"); if(se&&!se.disabled) se.onclick=()=>go("#/prova");
    const gc=app.querySelector("#gencert"); if(gc) gc.onclick=()=>{const nm=app.querySelector("#cname").value.trim()||"Aluno(a)";
      S.name=nm;save();makeCertificate(nm,co.title);};
    const bh=app.querySelector("#badges"); if(bh) bh.innerHTML=BADGES.map(b=>
      `<div class="badge ${S.badges[b.id]?'on':''}" title="${b.desc}"><div class="bi">${b.icon}</div><div class="bn">${b.name}</div></div>`).join("");
    const ah=app.querySelector("#activity"); if(ah) ah.innerHTML=(S.activity&&S.activity.length)
      ? S.activity.slice(0,8).map(a=>`<div class="actrow"><span>${a.w}</span><span class="chip done">+${a.p}</span></div>`).join("")
      : "<div class='lead'>Comece um módulo para registrar atividade aqui.</div>";
    footCustom([{label:"← Voltar ao curso",ghost:true,on:()=>go("#/curso/"+c.id)}]);
  }

  /* ---------- prova final ---------- */
  function prova(){
    const curC=CUR(); const ex=CO().finalExam; let answered=0,correct=0;
    app.innerHTML=`<div class="crumb"><a data-h="#/painel">Meu painel</a><span>›</span><b>Prova final</b></div>
      <div class="eyebrow">Avaliação</div><h2 class="section">🏁 ${ex.title}</h2>
      <p class="lead">${ex.questions.length} questões · aprovação ${ex.pass}% · feedback na hora.</p><div id="exh"></div>`;
    app.querySelectorAll(".crumb a[data-h]").forEach(a=>a.onclick=()=>go(a.dataset.h));
    const host=app.querySelector("#exh");
    ex.questions.forEach((item,qi)=>{ const d=div("tool","<b>"+(qi+1)+". "+item.q+"</b>");
      item.options.forEach((opt,i)=>{ const btn=document.createElement("button");btn.className="opt";btn.textContent=opt;
        btn.onclick=()=>{ d.querySelectorAll(".opt").forEach(o=>o.disabled=true); const good=i===item.answer; if(good)correct++; answered++;
          btn.classList.add(good?"correct":"wrong"); if(!good)d.querySelectorAll(".opt")[item.answer].classList.add("correct");
          d.appendChild(div("explain "+(good?"good":"bad"),item.explain));
          if(answered===ex.questions.length){ const pct=Math.round(correct/ex.questions.length*100); const pass=pct>=ex.pass;
            const firstPass=!S.finalPassed[curC.id]; if(pass){ S.finalPassed[curC.id]=true; if(firstPass)award(100,"Passou na prova final ("+pct+"%)"); } save();
            const bn=div("done-banner","<div class='big'>"+(pass?"🏆":"💪")+"</div><h3>"+correct+"/"+ex.questions.length+" ("+pct+"%) — "+(pass?"APROVADO!":"Não passou ainda")+"</h3><p class='lead'>"+(pass?"Parabéns! Seu certificado foi liberado no Meu painel.":"Você precisa de "+ex.pass+"%. Revise os módulos e tente de novo.")+"</p><div class='btnrow' style='justify-content:center'><button class='btn' id='topainel'>Ir ao Meu painel →</button></div>");
            host.appendChild(bn); bn.querySelector("#topainel").onclick=()=>go("#/painel"); bn.scrollIntoView({behavior:"smooth"});
          }
        }; d.appendChild(btn);
      }); host.appendChild(d);
    });
    footCustom([{label:"← Meu painel",ghost:true,on:()=>go("#/painel")}]);
  }

  /* ---------- certificado (canvas → PNG) ---------- */
  function makeCertificate(name,courseTitle){
    const c=document.createElement("canvas"); c.width=1400; c.height=990; const x=c.getContext("2d");
    const g=x.createLinearGradient(0,0,1400,990); g.addColorStop(0,"#12131d"); g.addColorStop(1,"#1b1330");
    x.fillStyle=g; x.fillRect(0,0,1400,990);
    x.strokeStyle="#7c5cff"; x.lineWidth=10; x.strokeRect(40,40,1320,910);
    x.strokeStyle="#a78bfa"; x.lineWidth=2; x.strokeRect(60,60,1280,870);
    x.textAlign="center"; x.fillStyle="#a78bfa"; x.font="bold 30px Georgia";
    x.fillText("INSTITUTO DE MOVIMENTO E PERFORMANCE", 700, 170);
    x.fillStyle="#eef0f6"; x.font="26px Georgia"; x.fillText("Certificado de Conclusão", 700, 250);
    x.fillStyle="#9aa3bd"; x.font="22px Georgia"; x.fillText("Certificamos que", 700, 380);
    x.fillStyle="#fff"; x.font="bold 60px Georgia"; x.fillText(name, 700, 460);
    x.fillStyle="#9aa3bd"; x.font="22px Georgia"; x.fillText("concluiu o conteúdo do curso", 700, 540);
    x.fillStyle="#eef0f6"; x.font="bold 34px Georgia"; x.fillText(courseTitle||"Metodologia do Treino de Trail", 700, 600);
    const dt=new Date(); const d=dt.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});
    x.fillStyle="#9aa3bd"; x.font="20px Georgia"; x.fillText(d, 700, 720);
    // pico (logo)
    x.fillStyle="#7c5cff"; x.beginPath(); x.moveTo(700,780); x.lineTo(650,860); x.lineTo(750,860); x.closePath(); x.fill();
    x.fillStyle="#fff"; x.font="16px Georgia"; x.fillText("instituto de movimento e performance — aprender fazendo", 700, 910);
    const a=document.createElement("a"); a.href=c.toDataURL("image/png");
    a.download="certificado-imp.png"; a.click();
  }

  /* ---------- trilha de aprendizagem ---------- */
  function trilha(path){
    app.innerHTML=`<div class="crumb"><a data-h="#/">Catálogo</a><span>›</span><b>${path.name}</b></div>
      <div class="eyebrow">Trilha de aprendizagem</div><h2 class="section">${path.icon} ${path.name}</h2>
      <p class="lead">${path.desc}</p><div class="grid two" id="pc" style="margin-top:14px"></div>`;
    app.querySelectorAll(".crumb a[data-h]").forEach(a=>a.onclick=()=>go(a.dataset.h));
    const grid=app.querySelector("#pc");
    path.courses.forEach((cid,i)=>{ const c=courseOf(cid); if(!c)return;
      const done=c.published&&courseDone(c);
      const card=div("ccard"+(c.published?"":" soon"),
        `<div class="thumb img-duo"><img src="${c.img}" alt="">${c.published?'<span class="ribbon">Disponível</span>':'<span class="ribbon soon">Em breve</span>'}</div>
         <div class="body"><div style="display:flex;align-items:center;gap:10px;margin-bottom:4px"><span class="modnum">${i+1}</span><h3 style="margin:0">${c.title}</h3></div>
           <p>${c.sub}</p><div class="foot"><span class="chip ${done?'done':''}">${c.published?(done?'concluído':c.dur):c.dur}</span><span class="go">${c.published?'abrir':'saber mais'} →</span></div></div>`);
      card.onclick=()=>go("#/curso/"+c.id); grid.appendChild(card);
    });
    footCustom([{label:"← Catálogo",ghost:true,on:()=>go("#/")}]);
  }

  /* ---------- paywall de módulo ---------- */
  let loginReturn=null;
  function paywallModule(c,mod){
    app.innerHTML=`<div class="crumb"><a data-h="#/">Catálogo</a><span>›</span><a data-h="#/curso/${c.id}">${(contentOf(c)||{}).title||c.title}</a><span>›</span><b>Módulo ${mod.id}</b></div>
      <div class="img-duo art" style="height:180px"><img src="${mod.img}" alt="">
        <div class="on"><span class="kicker">Módulo ${mod.id} · 🔒 assinantes</span><h1 style="color:#fff;font-size:26px;margin:0">${mod.title}</h1></div></div>
      <div class="block feature" style="margin-top:16px;text-align:center">
        <div style="font-size:38px">🔒</div><h3 style="margin:6px 0">Conteúdo exclusivo para assinantes</h3>
        <p class="lead">Assine o Instituto e desbloqueie <b>todos os módulos</b>, a prova final e o certificado — de todos os cursos.</p>
        <div class="btnrow" style="justify-content:center"><button class="btn" id="assc">Ver planos →</button>
        ${IMP.isLogged()?"":'<button class="btn ghost" id="lg">Já assino? Entrar</button>'}</div></div>`;
    app.querySelectorAll(".crumb a[data-h]").forEach(a=>a.onclick=()=>go(a.dataset.h));
    app.querySelector("#assc").onclick=()=>go("#/planos");
    const lg=app.querySelector("#lg"); if(lg) lg.onclick=()=>{loginReturn="#/curso/"+c.id;go("#/entrar");};
    footCustom([{label:"← Módulos",ghost:true,on:()=>go("#/curso/"+c.id)},{label:"Ver planos →",on:()=>go("#/planos")}]);
  }

  /* ---------- entrar (login por código / OTP) ---------- */
  function entrar(){
    let otpId=null;
    app.innerHTML=`<div class="eyebrow">Acesso</div><h2 class="section">Entrar ou criar conta</h2>
      <div class="block" style="max-width:440px;margin-top:12px">
        <div id="s1"><p class="lead">Digite seu e-mail — enviaremos um <b>código</b> para entrar (ou criar sua conta na hora).</p>
          <input class="gsearch" id="em" style="margin:0" placeholder="seu@email.com" type="email">
          <div class="btnrow"><button class="btn" id="send">Enviar código</button></div>
          <div class="explain bad" id="m1" style="display:none"></div></div>
        <div id="s2" style="display:none"><p class="lead">Enviamos um código para <b id="eml"></b>. Verifique também o spam.</p>
          <input class="gsearch" id="code" style="margin:0" placeholder="Código de 8 dígitos" inputmode="numeric" autocomplete="one-time-code">
          <div class="btnrow"><button class="btn" id="ver">Entrar</button><button class="btn ghost" id="re">Reenviar</button></div>
          <div class="explain bad" id="m2" style="display:none"></div></div>
      </div>`;
    const q=s=>app.querySelector(s);
    async function send(){ const email=q("#em").value.trim().toLowerCase(); if(!email||email.indexOf("@")<0){q("#m1").style.display="block";q("#m1").textContent="Digite um e-mail válido.";return;}
      q("#send").disabled=true; q("#send").textContent="Enviando…"; q("#m1").style.display="none";
      const r=await IMP.requestCode(email); q("#send").disabled=false; q("#send").textContent="Enviar código";
      if(r.ok){ otpId=r.otpId; q("#eml").textContent=email; q("#s1").style.display="none"; q("#s2").style.display="block"; q("#code").focus(); }
      else { q("#m1").style.display="block"; q("#m1").textContent=r.message||"Erro ao enviar."; } }
    q("#send").onclick=send; q("#em").onkeydown=e=>{if(e.key==="Enter")send();}; q("#re").onclick=send;
    q("#ver").onclick=async()=>{ const code=q("#code").value.trim(); if(!code)return;
      q("#ver").disabled=true; q("#ver").textContent="Entrando…"; q("#m2").style.display="none";
      const r=await IMP.verifyCode(otpId,code); q("#ver").disabled=false; q("#ver").textContent="Entrar";
      if(r.ok){ await refreshMe(); const rt=loginReturn||"#/"; loginReturn=null; go(rt); if((location.hash||"#/")===rt) render(); }
      else { q("#m2").style.display="block"; q("#m2").textContent=r.message||"Código inválido."; } };
    q("#code").onkeydown=e=>{if(e.key==="Enter")q("#ver").click();};
    footCustom([{label:"← Voltar",ghost:true,on:()=>go(loginReturn||"#/")}]);
  }

  /* ---------- planos (assinatura) ---------- */
  async function planos(){
    loading();
    const me=await IMP.me().catch(()=>({})); const plans=await IMP.plans().catch(()=>[]);
    const sub=me&&me.subscription&&me.subscription.status==="active";
    const fmt=n=>"R$ "+Number(n).toFixed(2).replace(".",",");
    const cards=plans.map(p=>{ const pm=p.price/p.months;
      const ribbon=p.slug==="anual"?'<span class="ribbon">melhor valor</span>':(p.slug==="trimestral"?'<span class="ribbon">popular</span>':"");
      return `<div class="ccard"><div class="thumb img-duo" style="height:8px"></div><div class="body">${ribbon}
        <h3 style="margin:0 0 2px">${p.title}</h3>
        <div style="font-size:26px;font-weight:800;color:var(--brand)">${fmt(p.price)}</div>
        <p style="margin:2px 0 12px">${p.months>1?("equivale a "+fmt(pm)+"/mês"):"por mês"}</p>
        <button class="btn assinar" data-slug="${p.slug}" style="width:100%">Assinar</button></div></div>`;}).join("");
    app.innerHTML=`<div class="eyebrow">Assinatura</div><h2 class="section">Escolha seu plano</h2>
      <p class="lead">Um plano, acesso a <b>todos os cursos</b> do Instituto — módulos completos, provas e certificados.</p>
      ${sub?'<div class="block feature" style="margin:12px 0"><b>✅ Você já é assinante!</b> <span class="lead">Acesso liberado.</span></div>':""}
      <div class="grid three" style="margin-top:14px">${cards}</div>
      <p class="lead" style="margin-top:16px">🔒 Pagamento seguro via Mercado Pago. Cancele quando quiser.</p>`;
    app.querySelectorAll(".assinar").forEach(b=>b.onclick=async()=>{
      if(!IMP.isLogged()){ loginReturn="#/planos"; return go("#/entrar"); }
      b.disabled=true; b.textContent="Redirecionando…";
      const r=await IMP.checkout(b.dataset.slug);
      if(r.ok&&r.init_point){ location.href=r.init_point; }
      else { b.disabled=false; b.textContent="Assinar"; const m=div("explain bad",r.message||"Erro ao iniciar assinatura."); b.parentNode.appendChild(m); } });
    footCustom([{label:"← Catálogo",ghost:true,on:()=>go("#/")}]);
  }

  /* ---------- perfil ---------- */
  function perfil(){
    const done=modsDoneCount(), tot=modsTotal();
    const logged=IMP.isLogged(), subActive=!!(ME&&ME.subscription&&ME.subscription.status==="active");
    const acct=`<div class="block" style="margin-top:12px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><b style="font-size:16px">Conta</b>
        <span class="chip ${subActive?'done':''}" style="margin-left:auto">${subActive?'✅ Assinante ativo':(logged?'sem assinatura':'não conectado')}</span></div>
      ${logged?`<p class="lead" style="margin-top:8px">Conectado como <b>${(ME&&ME.email)||IMP.email()||""}</b></p>`:'<p class="lead" style="margin-top:8px">Entre para acessar seus cursos em qualquer dispositivo.</p>'}
      <div class="btnrow">${logged?'<button class="btn ghost" id="logout">Sair</button>':'<button class="btn" id="login">Entrar / criar conta</button>'}${subActive?"":'<button class="btn" id="subscribe">Assinar</button>'}</div></div>`;
    app.innerHTML=`<div class="eyebrow">Perfil</div><h2 class="section">Seu perfil</h2>${acct}
      <div class="block" style="margin-top:12px">
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
          <div class="pavatar">${(S.name||"A").trim().charAt(0).toUpperCase()}</div>
          <div style="flex:1;min-width:180px">
            <input class="gsearch" id="pname" style="margin:0" placeholder="Seu nome" value="${S.name||""}">
            <div class="lead" style="margin-top:6px">${S.points||0} pontos · ${done}/${tot} módulos · streak ${S.streak.days||0} 🔥</div>
          </div></div>
        <div class="btnrow"><button class="btn" id="psave">Salvar</button></div></div>
      <div class="block"><div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <b style="font-size:16px">🎓 Modo treinador</b>
        <button class="fchip ${S.coach?'on':''}" id="coachtoggle" style="margin-left:auto">${S.coach?'Ligado':'Desligado'}</button></div>
        <p class="lead" style="margin-top:8px">Liga o <b>Fundo técnico</b>: mostra o aprofundamento (mecanismos, evidências e detalhes) para treinadores e estudantes. Desligado, você vê só o essencial.</p></div>`;
    app.querySelector("#coachtoggle").onclick=()=>{S.coach=!S.coach; save(); perfil();};
    app.querySelector("#psave").onclick=()=>{S.name=app.querySelector("#pname").value.trim(); save(); syncPill(); perfil();};
    const bl=app.querySelector("#login"); if(bl) bl.onclick=()=>{loginReturn="#/perfil";go("#/entrar");};
    const bs=app.querySelector("#subscribe"); if(bs) bs.onclick=()=>go("#/planos");
    const bo=app.querySelector("#logout"); if(bo) bo.onclick=async()=>{IMP.logout(); await refreshMe(); renderAcct(); perfil();};
    footCustom([{label:"← Meu painel",ghost:true,on:()=>go("#/painel")}]);
  }

  /* ---------- tooltips do glossário ---------- */
  let tipEl=null, tipHideT=null;
  const tipHold=()=>clearTimeout(tipHideT);
  const tipLater=()=>{clearTimeout(tipHideT);tipHideT=setTimeout(hideTip,260);};
  function showTip(t,text){ hideTip();
    const term=t.dataset.term, key=gk(CUR().id,term.toLowerCase()), added=!!S.seen[key];
    tipEl=document.createElement("div");tipEl.className="tip";
    tipEl.innerHTML="<b>"+term+"</b><br>"+text+"<button class='tip-add"+(added?" on":"")+"'>"+(added?"✓ nos flashcards":"➕ Adicionar aos flashcards")+"</button>";
    document.body.appendChild(tipEl);
    tipEl.addEventListener("mouseenter",tipHold); tipEl.addEventListener("mouseleave",tipLater);
    tipEl.querySelector(".tip-add").onclick=ev=>{ev.stopPropagation();
      if(S.seen[key])delete S.seen[key]; else { S.seen[key]=1; checkBadges(); }
      save(); showTip(t,text);};
    const r=t.getBoundingClientRect();const tw=Math.min(300,innerWidth-24);tipEl.style.width=tw+"px";
    tipEl.style.left=Math.min(Math.max(8,r.left),innerWidth-tw-8)+"px";
    let top=r.top-tipEl.offsetHeight-8; if(top<8)top=r.bottom+8; tipEl.style.top=top+"px";}
  function hideTip(){clearTimeout(tipHideT);if(tipEl){tipEl.remove();tipEl=null;}}
  function bindTip(elm,def){elm.dataset.term=elm.dataset.term||elm.textContent;
    elm.addEventListener("mouseenter",()=>{tipHold();showTip(elm,def);});
    elm.addEventListener("mouseleave",tipLater);
    elm.addEventListener("click",e=>{e.stopPropagation();tipHold();tipEl?hideTip():showTip(elm,def);});}
  function attachGlossary(root){ const co=CO(); if(!co)return; const g={}; co.glossary.forEach(([t,d])=>g[t.toLowerCase()]=d);
    root.querySelectorAll("[data-term]").forEach(s=>{const k=s.dataset.term.toLowerCase();if(g[k]){s.classList.add("term");bindTip(s,g[k]);}});
    root.querySelectorAll(".prose").forEach(scope=>co.glossary.forEach(([term])=>wrapFirst(scope,term,g[term.toLowerCase()])));
  }
  function wrapFirst(scope,term,def){ if(!def)return;
    const rx=new RegExp("\\b("+term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")\\b","i");
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT,{acceptNode:n=>
      n.parentElement.closest(".term,[data-term],b,a")?NodeFilter.FILTER_REJECT:(rx.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP)});
    const node=walker.nextNode(); if(!node)return; const m=rx.exec(node.nodeValue); if(!m)return;
    const span=document.createElement("span");span.className="term";span.dataset.term=m[1];span.textContent=m[1];bindTip(span,def);
    const after=node.splitText(m.index);after.nodeValue=after.nodeValue.slice(m[1].length);node.parentNode.insertBefore(span,after);}

  function killFoot(){const f=document.getElementById("footnav");if(f)f.remove();}
  function footCustom(btns){killFoot();const f=document.createElement("div");f.id="footnav";f.className="footnav";
    btns.forEach(b=>{const e=document.createElement("button");e.className="btn"+(b.ghost?" ghost":"");e.textContent=b.label;e.onclick=b.on;f.appendChild(e);});document.body.appendChild(f);}
  document.addEventListener("scroll",hideTip,{passive:true});
  document.addEventListener("click",()=>hideTip());

  buildNav();
  IMP.me().then(m=>{ ME=m; }).catch(()=>{}).finally(()=>render());
})();
