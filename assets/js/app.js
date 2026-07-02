/* ============================================================
   APRENDIZ — núcleo v2 (sidebar + roteador + glossário + estado)
   Sem dependências. Estado no localStorage.
   ============================================================ */
(function(){
  const BRAND="Aprendiz";
  const C=window.COURSE_TRAIL;
  const app=document.getElementById("app");
  const bar=document.getElementById("progressbar");
  const nav=document.getElementById("nav");
  const trackPill=document.getElementById("trackpill");

  /* ---- ícones SVG (stroke currentColor) ---- */
  const ICON={
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v11h14V9"/></svg>',
    book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/></svg>',
    gloss:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9a3 3 0 0 1 3 3v15H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 8h6M9 12h6"/></svg>',
    tools:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 6a4 4 0 0 0 5 5l-8 8a2.8 2.8 0 0 1-4-4l8-8a4 4 0 0 0-1-1z"/></svg>',
    run:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="5" r="2"/><path d="M11 8l-3 3 3 2 1 5M12 13l4 2 2-2M8 11l-3 1"/></svg>',
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>'
  };

  /* ---- estado ---- */
  const KEY="aprendiz.state.v2";
  const S=(()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return{}}})();
  S.track=S.track||null; S.mod=S.mod||{}; S.quiz=S.quiz||{};
  const save=()=>localStorage.setItem(KEY,JSON.stringify(S));
  const trackName=id=>({atleta:"🏃 Atleta",treinador:"🎓 Treinador"}[id]||"escolher");

  const go=h=>location.hash=h;
  window.addEventListener("hashchange",render);

  /* ---- sidebar ---- */
  function buildNav(){
    const items=[["#/","home","Início"],["#/curso/trail","book","Curso"],
      ["#/glossario","gloss","Glossário"],["#/ferramentas","tools","Ferramentas"]];
    nav.innerHTML=items.map(([h,ic,l])=>
      `<div class="navbtn" data-h="${h}" title="${l}">${ICON[ic]}</div>`).join("");
    nav.querySelectorAll(".navbtn").forEach(b=>b.onclick=()=>go(b.dataset.h));
  }
  function markNav(){ const h=location.hash||"#/";
    nav.querySelectorAll(".navbtn").forEach(b=>{
      const on=b.dataset.h===h||(b.dataset.h!=="#/"&&h.startsWith(b.dataset.h));
      b.classList.toggle("active",on);
    });
  }
  document.getElementById("logo").onclick=()=>go("#/");
  trackPill.onclick=()=>openTriage(true);
  function syncPill(){ trackPill.innerHTML="Trilha: <b>"+trackName(S.track)+"</b>"; }

  /* ---- triagem (2 trilhas) ---- */
  function openTriage(reopen){
    const m=document.createElement("div"); m.className="modal";
    m.innerHTML=`<div class="box"><h3>Como você quer aprender?</h3>
      <p class="sub">Isso adapta a profundidade e os exemplos do curso. Dá pra trocar quando quiser.</p>
      ${C.tracks.map(t=>`<div class="choice" data-t="${t.id}">
        <div class="ci">${ICON[t.icon]}</div><div><b>${t.label}</b><span>${t.desc}</span></div></div>`).join("")}
      ${reopen?`<div class="btnrow"><button class="btn ghost close">Cancelar</button></div>`:""}</div>`;
    document.body.appendChild(m);
    m.querySelectorAll(".choice").forEach(c=>c.onclick=()=>{S.track=c.dataset.t;save();m.remove();syncPill();render();});
    const cl=m.querySelector(".close"); if(cl)cl.onclick=()=>m.remove();
  }

  /* ---- progresso ---- */
  const contentMods=()=>C.modules.filter(m=>!m.locked);
  function setBar(){ const t=contentMods().length||1;
    const d=contentMods().filter(m=>S.mod[m.id]).length; bar.style.width=Math.round(d/t*100)+"%"; }

  /* ---- glossário: mapa termo->def ---- */
  const G={}; C.glossary.forEach(([t,d])=>G[t.toLowerCase()]=d);

  /* ---- render principal ---- */
  function render(){
    syncPill(); setBar(); markNav(); window.scrollTo(0,0);
    const h=location.hash||"#/";
    const p=h.replace(/^#\//,"").split("/").filter(Boolean);
    killFoot();
    if(!p.length) return home();
    if(p[0]==="glossario") return glossario();
    if(p[0]==="ferramentas") return ferramentas();
    if(p[0]==="curso"){
      if(p[2]==="modulo"){ const mod=C.modules.find(m=>String(m.id)===p[3]);
        return mod?modulo(mod):home(); }
      return curso();
    }
    home();
  }

  /* ---- HOME ---- */
  function home(){
    app.innerHTML=`
      <div class="img-duo art hero-home" style="height:200px">
        <img src="${C.heroImg}" alt="">
        <div class="on"><span class="kicker">Plataforma de aprendizagem</span>
          <h1 style="color:#fff;font-size:26px;margin:0">Aprenda fazendo</h1>
          <p style="color:#e9e6ff;margin:6px 0 0">Calcule, monte e teste — não só leia.</p></div>
      </div>
      <div class="grid two" style="margin-top:18px">
        <div class="ccard" id="c-trail">
          <div class="thumb img-duo"><img src="${C.modules[0].img}" alt=""></div>
          <div class="body"><h3>${C.title}</h3><p>${C.subtitle}</p>
            <div class="foot"><span class="chip">Curso #1</span><span class="go">Começar →</span></div></div>
        </div>
        <div class="ccard locked">
          <div class="thumb" style="background:linear-gradient(135deg,var(--bg-3),var(--bg-4));display:flex;align-items:center;justify-content:center;color:var(--tx-dim);font-size:30px">＋</div>
          <div class="body"><h3>Mais cursos</h3><p>A plataforma recebe qualquer tema.</p>
            <div class="foot"><span class="chip">em breve</span></div></div>
        </div>
      </div>`;
    document.getElementById("c-trail").onclick=()=>go("#/curso/trail");
  }

  /* ---- visão do curso ---- */
  function curso(){
    if(!S.track) openTriage(false);
    app.innerHTML=`
      <div class="img-duo art hero" style="height:230px">
        <img src="${C.heroImg}" alt="">
        <div class="on"><span class="kicker">Curso #1</span>
          <h1>${C.title}</h1><p>${C.subtitle}</p></div>
      </div>
      <div class="metaline">
        <span>${ICON.layers} <b>${C.duration}</b></span>
        <span>${ICON.clock} <b>${C.level}</b></span>
        <span class="stars">★★★★★ <b style="color:var(--tx)">${C.rating}</b></span>
      </div>
      <div class="eyebrow">Conteúdo do curso</div>
      <h2 class="section">Sua trilha de aprendizagem</h2>
      <div class="grid two" id="mods" style="margin-top:14px"></div>`;
    const grid=app.querySelector("#mods");
    C.modules.forEach(m=>{
      const c=document.createElement("div"); c.className="ccard"+(m.locked?" locked":"");
      const started=S.mod[m.id];
      c.innerHTML=`<div class="thumb img-duo"><img src="${m.img}" alt=""></div>
        <div class="body">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
            <span class="modnum">${m.id}</span><h3 style="margin:0">${m.title}</h3></div>
          <p>${m.summary}</p>
          <div class="foot">${m.locked?'<span class="chip">em breve</span>':
            `<span class="chip ${started?'done':''}">${started?'concluído':(m.sections.length+' seções')}</span>
             <span class="go">${started?'revisar':'começar'} →</span>`}</div>
        </div>`;
      if(!m.locked) c.onclick=()=>go("#/curso/trail/modulo/"+m.id);
      grid.appendChild(c);
    });
  }

  /* ---- MÓDULO em rolagem única ---- */
  function modulo(mod){
    if(mod.locked) return curso();
    let html=`<div class="img-duo art" style="height:180px">
        <img src="${mod.img}" alt=""><div class="on">
        <span class="kicker">Módulo ${mod.id}</span>
        <h1 style="color:#fff;font-size:26px;margin:0">${mod.title}</h1></div></div>
      <p class="lead" style="margin-top:14px">${mod.summary}</p>`;
    app.innerHTML=html;
    mod.sections.forEach(sec=>{
      const wrap=document.createElement("section"); wrap.className="lesson-sec";
      wrap.innerHTML=`<h3><span class="n">${sec.n}</span>${sec.title}</h3>`;
      sec.blocks.forEach(b=>wrap.appendChild(renderBlock(b)));
      app.appendChild(wrap);
    });
    // quiz inline
    if(mod.quiz){ const qs=document.createElement("section"); qs.className="lesson-sec";
      qs.id="quiz"; app.appendChild(qs); renderQuiz(mod,qs); }
    // tooltips do glossário
    attachGlossary(app);
    S.mod[mod.id]=true; save(); setBar();
    footCustom([
      {label:"← Módulos",ghost:true,on:()=>go("#/curso/trail")},
      {label:"Próximo módulo →",on:()=>{ const nx=C.modules.find(m=>m.id===mod.id+1);
        if(nx&&!nx.locked) go("#/curso/trail/modulo/"+nx.id); else go("#/curso/trail"); }}
    ]);
  }

  /* ---- blocos ---- */
  function renderBlock(b){
    switch(b.type){
      case "prose": return div("prose", b.html);
      case "callout":
        if(b.track && S.track && b.track!==S.track) return document.createComment("hid");
        return div("callout "+(b.track==="atleta"?"athlete":"coach"),
          (b.tag?`<span class="tag">${b.tag}</span>`:"")+b.html);
      case "faca": return div("faca","<span class='tag'>Faça você</span> "+b.html);
      case "visual": case "tool":
        return TOOLS[b.component]?TOOLS[b.component](b.caption):div("prose","");
      case "classify": return classifyBlock(b);
      case "check": return checkBlock(b);
      default: return div("prose", b.html||"");
    }
  }
  const div=(cls,html)=>{const d=document.createElement("div");d.className=cls;d.innerHTML=html;return d;};

  function checkBlock(b){
    const d=div("tool","<b>✔️ Checagem rápida</b><p style='margin:8px 0'>"+b.q+"</p>");
    b.options.forEach((opt,i)=>{ const btn=document.createElement("button");btn.className="opt";btn.textContent=opt;
      btn.onclick=()=>{ d.querySelectorAll(".opt").forEach(o=>o.disabled=true);
        const good=i===b.answer; btn.classList.add(good?"correct":"wrong");
        if(!good)d.querySelectorAll(".opt")[b.answer].classList.add("correct");
        const ex=div("explain "+(good?"good":"bad"),(good?"Correto! ":"Quase. ")+b.explain); d.appendChild(ex);
      }; d.appendChild(btn);
    });
    return d;
  }
  function classifyBlock(b){
    const d=div("tool","");
    b.items.forEach(it=>{ const row=div("classify-item","<div class='q'>"+it.text+"</div>");
      const ch=document.createElement("div"); ch.className="choices";
      [["continuo","Contínuo"],["fracionado","Fracionado"]].forEach(([val,lbl])=>{
        const btn=document.createElement("button"); btn.textContent=lbl;
        btn.onclick=()=>{ if(row.dataset.done)return; row.dataset.done=1;
          const good=val===it.answer; btn.innerHTML=lbl+(good?" <span class='tag-ok'>✓</span>":" <span class='tag-bad'>✗</span>");
          if(!good) ch.querySelectorAll("button").forEach(x=>{ if(x.textContent.replace(/[^A-Za-zçã]/g,"").startsWith(it.answer==="continuo"?"Cont":"Frac")) x.innerHTML+=" <span class='tag-ok'>✓</span>";});
        }; ch.appendChild(btn);
      }); row.appendChild(ch); d.appendChild(row);
    });
    return d;
  }

  /* ---- quiz ---- */
  function renderQuiz(mod,host){
    const q=mod.quiz; let answered=0,correct=0;
    host.innerHTML=`<h3><span class="n">✓</span>${q.title}</h3>
      <p class="lead">${q.questions.length} questões · feedback na hora.</p>`;
    q.questions.forEach((item,qi)=>{ const d=div("tool","<b>"+(qi+1)+". "+item.q+"</b>");
      item.options.forEach((opt,i)=>{ const btn=document.createElement("button");btn.className="opt";btn.textContent=opt;
        btn.onclick=()=>{ d.querySelectorAll(".opt").forEach(o=>o.disabled=true);
          const good=i===item.answer; if(good)correct++; answered++;
          btn.classList.add(good?"correct":"wrong"); if(!good)d.querySelectorAll(".opt")[item.answer].classList.add("correct");
          d.appendChild(div("explain "+(good?"good":"bad"),item.explain));
          if(answered===q.questions.length){ const pct=Math.round(correct/q.questions.length*100);
            S.quiz[mod.id]=pct; save();
            const bn=div("done-banner","<div class='big'>"+(pct>=80?"🎉":"💪")+"</div><h3>Você acertou "+correct+"/"+q.questions.length+" ("+pct+"%)</h3><p class='lead'>"+(pct>=80?"Módulo dominado!":"Bom começo — revise os pontos em vermelho.")+"</p>");
            host.appendChild(bn); bn.scrollIntoView({behavior:"smooth"});
          }
        }; d.appendChild(btn);
      }); host.appendChild(d);
    });
  }

  /* ---- glossário: página ---- */
  function glossario(){
    app.innerHTML=`<div class="eyebrow">Referência</div><h2 class="section">📖 Glossário</h2>
      <p class="lead">Os termos do curso, em linguagem simples. No conteúdo, eles aparecem <span class="term">sublinhados</span> — passe o mouse para ver.</p>
      <input class="gsearch" placeholder="Buscar termo…" id="gs">
      <div class="gloss" id="gl"></div>`;
    const gl=app.querySelector("#gl");
    function paint(f){ gl.innerHTML=""; C.glossary
      .filter(([t,d])=>!f||t.toLowerCase().includes(f)||d.toLowerCase().includes(f))
      .forEach(([t,d])=>gl.appendChild(div("gitem","<b>"+t+"</b><p>"+d+"</p>"))); }
    paint(""); app.querySelector("#gs").oninput=e=>paint(e.target.value.toLowerCase().trim());
  }

  /* ---- tooltip nos termos ---- */
  let tipEl=null;
  function showTip(target,text){ hideTip(); tipEl=document.createElement("div"); tipEl.className="tip";
    tipEl.innerHTML="<b>"+target.dataset.term+"</b><br>"+text; document.body.appendChild(tipEl);
    const r=target.getBoundingClientRect(); const tw=Math.min(280,innerWidth-24);
    tipEl.style.width=tw+"px";
    let left=Math.min(Math.max(8,r.left),innerWidth-tw-8);
    let top=r.top-tipEl.offsetHeight-8; if(top<8)top=r.bottom+8;
    tipEl.style.left=left+"px"; tipEl.style.top=top+"px";
  }
  function hideTip(){ if(tipEl){tipEl.remove();tipEl=null;} }
  function attachGlossary(root){
    // 1) spans explícitos data-term
    root.querySelectorAll("[data-term]").forEach(s=>{ const key=s.dataset.term.toLowerCase();
      if(G[key]){ s.classList.add("term"); bindTip(s,G[key]); } });
    // 2) auto-wrap: primeira ocorrência de cada termo no texto das .prose
    root.querySelectorAll(".prose").forEach(scope=>{
      C.glossary.forEach(([term])=>{
        wrapFirst(scope,term,G[term.toLowerCase()]);
      });
    });
  }
  function bindTip(el,def){
    el.dataset.term=el.dataset.term||el.textContent;
    el.addEventListener("mouseenter",()=>showTip(el,def));
    el.addEventListener("mouseleave",hideTip);
    el.addEventListener("click",e=>{e.stopPropagation();tipEl?hideTip():showTip(el,def);});
  }
  function wrapFirst(scope,term,def){
    if(!def)return;
    const rx=new RegExp("\\b("+term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")\\b","i");
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT,{
      acceptNode:n=> n.parentElement.closest(".term,[data-term],b,a")?NodeFilter.FILTER_REJECT
        :(rx.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP) });
    const node=walker.nextNode(); if(!node)return;
    const m=rx.exec(node.nodeValue); if(!m)return;
    const span=document.createElement("span"); span.className="term"; span.dataset.term=m[1];
    span.textContent=m[1]; bindTip(span,def);
    const after=node.splitText(m.index); after.nodeValue=after.nodeValue.slice(m[1].length);
    node.parentNode.insertBefore(span,after);
  }

  /* ---- ferramentas ---- */
  function ferramentas(){
    app.innerHTML=`<div class="eyebrow">Plataforma</div><h2 class="section">🧰 Ferramentas</h2>
      <p class="lead">Use quando quiser — no plano, na trilha, montando o treino.</p>`;
    [["Minhas zonas de intensidade","zonas"],["Correr ou caminhar na subida?","correrCaminhar"],
     ["Velocidade ascensional","ascensional"]].forEach(([t,fn])=>{
      const d=div("tool","<b style='font-size:16px'>"+t+"</b>"); d.appendChild(TOOLS[fn]()); app.appendChild(d);
    });
  }

  /* ---- rodapé ---- */
  function killFoot(){ const f=document.getElementById("footnav"); if(f)f.remove(); }
  function footCustom(btns){ killFoot(); const f=document.createElement("div");f.id="footnav";f.className="footnav";
    btns.forEach(b=>{const el=document.createElement("button");el.className="btn"+(b.ghost?" ghost":"");
      el.textContent=b.label;el.onclick=b.on;f.appendChild(el);}); document.body.appendChild(f); }

  document.addEventListener("scroll",hideTip,{passive:true});
  buildNav(); render();
})();
