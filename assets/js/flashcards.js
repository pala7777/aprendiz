/* ============================================================
   FLASHCARDS — repetição espaçada (Leitner) sobre o glossário.
   Estado no localStorage. Retorna DOM para o app renderizar.
   ============================================================ */
window.FLASH = (function(){
  const KEY="aprendiz.flash.v1";
  const DAY=86400000;
  const INTERVAL=[0,1,2,4,9];   // dias por caixa (0..4); caixa 5 = dominado
  const load=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return{}}};
  const save=s=>localStorage.setItem(KEY,JSON.stringify(s));

  function st(term){ const s=load(); return s[term]||{box:0,due:0}; }
  function grade(term,ok){ const s=load(); const c=s[term]||{box:0,due:0};
    c.box = ok ? Math.min(5,c.box+1) : 1;
    c.due = Date.now() + (INTERVAL[Math.min(4,c.box)]||0)*DAY;
    s[term]=c; save(s); }

  const el=h=>{const t=document.createElement("template");t.innerHTML=h.trim();return t.content.firstChild;};

  function stats(cards){
    const now=Date.now(); let due=0,mastered=0,seen=0;
    cards.forEach(([t])=>{ const c=st(t); if(c.box>0)seen++; if(c.box>=5)mastered++;
      if(c.box<5 && c.due<=now) due++; });
    return { total:cards.length, due, mastered, seen };
  }

  function review(cards, onExit){
    const now=Date.now();
    let queue = cards.filter(([t])=>{const c=st(t);return c.box<5 && c.due<=now;});
    if(!queue.length) queue = cards.slice(); // nada vencido → revisa tudo
    // embaralha por índice (sem Math.random dependente): rotação simples
    queue = queue.map((c,i)=>[c,(i*7+3)%queue.length]).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);
    let i=0, done=0;
    const wrap=el(`<div class="flashwrap">
      <div class="fmeta"><span class="prog"></span><button class="btn ghost xclose">Sair</button></div>
      <div class="flashcard"><div class="fc-inner">
        <div class="fc-front"></div>
        <div class="fc-back"></div>
      </div></div>
      <div class="fbtns"></div>
    </div>`);
    const card=wrap.querySelector(".flashcard"), front=wrap.querySelector(".fc-front"),
      back=wrap.querySelector(".fc-back"), btns=wrap.querySelector(".fbtns"), prog=wrap.querySelector(".prog");
    wrap.querySelector(".xclose").onclick=()=>onExit&&onExit();
    let flipped=false;
    function show(){
      if(i>=queue.length){ finish(); return; }
      flipped=false; card.classList.remove("flip");
      const [term,def]=queue[i];
      front.innerHTML=`<span class="fc-tag">Termo</span><div class="fc-term">${term}</div><div class="fc-hint">toque para ver a definição</div>`;
      back.innerHTML=`<span class="fc-tag">Definição</span><div class="fc-def">${def}</div>`;
      prog.textContent=`${i+1} / ${queue.length}`;
      btns.innerHTML=`<button class="btn ghost flip">Ver definição</button>`;
      btns.querySelector(".flip").onclick=flip;
    }
    function flip(){ if(flipped)return; flipped=true; card.classList.add("flip");
      btns.innerHTML=`<button class="btn err">Errei</button><button class="btn ok">Acertei</button>`;
      btns.querySelector(".err").onclick=()=>rate(false);
      btns.querySelector(".ok").onclick=()=>rate(true);
    }
    card.onclick=()=>{ if(!flipped) flip(); };
    function rate(ok){ grade(queue[i][0],ok); done++; i++; show(); }
    function finish(){
      const s=stats(cards);
      wrap.innerHTML=`<div class="done-banner"><div class="big">🧠</div>
        <h3>Sessão concluída — ${done} cartões revisados</h3>
        <p class="lead">${s.mastered}/${s.total} dominados. Volte amanhã para fixar no tempo certo.</p>
        <div class="btnrow" style="justify-content:center"><button class="btn again">Revisar de novo</button>
        <button class="btn ghost out">Voltar</button></div></div>`;
      wrap.querySelector(".again").onclick=()=>{ i=0;done=0; queue=cards.slice(); show(); };
      wrap.querySelector(".out").onclick=()=>onExit&&onExit();
    }
    show();
    return wrap;
  }
  return { stats, review };
})();
