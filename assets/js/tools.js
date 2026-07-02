/* ============================================================
   FERRAMENTAS INTERATIVAS — "aprender fazendo"
   Cada função devolve um elemento DOM pronto. Sem dependências.
   ============================================================ */
window.TOOLS = (function(){

  const el = (html) => { const t=document.createElement("template"); t.innerHTML=html.trim(); return t.content.firstChild; };
  const fmtPace = (sec) => { sec=Math.round(sec); const m=Math.floor(sec/60), s=sec%60; return m+":"+String(s).padStart(2,"0"); };
  const parsePace = (str) => { const m=/^(\d{1,2})[:.](\d{1,2})$/.exec((str||"").trim()); if(!m) return null; return (+m[1])*60+(+m[2]); };

  /* ---------- VISUAL: descolamento carga interna x externa ---------- */
  function decouple(caption){
    const wrap = el(`<div class="tool decouple">
      <label>Terreno: <b class="tl">Plano</b></label>
      <input type="range" min="0" max="4" step="1" value="2">
      <div class="bars">
        <div class="barwrap"><div class="bar ext"></div><small>Externa<br>(velocidade)</small></div>
        <div class="barwrap"><div class="bar int"></div><small>Interna<br>(esforço)</small></div>
      </div>
      <div class="terrainlbl"></div>
    </div>`);
    // estados: 0 descida forte,1 descida,2 plano,3 subida,4 subida forte
    const states = [
      {t:"Descida forte", ext:95, int:30, note:"Vai rápido, coração tranquilo — externa ≫ interna."},
      {t:"Descida",       ext:80, int:45, note:"Velocidade alta com esforço moderado."},
      {t:"Plano",         ext:60, int:60, note:"As duas cargas andam juntas."},
      {t:"Subida",        ext:40, int:80, note:"Você desacelera, mas o esforço dispara."},
      {t:"Subida forte",  ext:22, int:96, note:"Lento e ofegante — interna ≫ externa."}
    ];
    const rng=wrap.querySelector("input"), ext=wrap.querySelector(".ext"), intb=wrap.querySelector(".int");
    const tl=wrap.querySelector(".tl"), note=wrap.querySelector(".terrainlbl");
    function upd(){ const s=states[+rng.value]; ext.style.height=s.ext+"%"; intb.style.height=s.int+"%";
      tl.textContent=s.t; note.textContent=s.note; }
    rng.addEventListener("input",upd); upd();
    return withCaption(wrap,caption);
  }

  /* ---------- VISUAL: três domínios ---------- */
  function domains(caption){
    const info = {
      mod:"🟢 <b>Moderado</b> — abaixo do 1º limiar. Você conversa em frases inteiras. Base aeróbia, gordura como combustível, recuperação. É onde deve ficar a MAIOR parte do volume.",
      hard:"🟡 <b>Pesado</b> — entre os dois limiares. Respiração forte, frases curtas. Sustentável por dezenas de minutos. A famosa 'zona cinzenta' se você VIVE aqui.",
      sev:"🔴 <b>Severo</b> — acima do 2º limiar. Falar é quase impossível. O lactato acumula sem parar; só aguenta poucos minutos. Reservado para estímulos curtos e potentes."
    };
    const wrap = el(`<div class="tool">
      <div class="domains">
        <div class="d" data-k="mod" style="background:var(--z-mod)"><b>Moderado</b><span>abaixo do VT1</span></div>
        <div class="d" data-k="hard" style="background:var(--z-hard)"><b>Pesado</b><span>VT1–VT2</span></div>
        <div class="d" data-k="sev" style="background:var(--z-sev)"><b>Severo</b><span>acima do VT2</span></div>
      </div>
      <div class="domain-info">Toque num domínio acima 👆</div>
    </div>`);
    const box=wrap.querySelector(".domain-info");
    wrap.querySelectorAll(".d").forEach(d=>{
      const act=()=>{wrap.querySelectorAll(".d").forEach(x=>x.classList.remove("sel"));
        d.classList.add("sel"); box.innerHTML=info[d.dataset.k];};
      d.addEventListener("click",act); d.addEventListener("mouseenter",act);
    });
    return withCaption(wrap,caption);
  }

  /* ---------- VISUAL: espectro fartlek-interval-repetições ---------- */
  function spectrum(caption){
    const data=[
      {p:0,  name:"Fartlek", rec:"Recuperação INTENSA", desc:"Você recupera em ritmo de corrida contínua. A fadiga acumula. Simula as descidas do trail."},
      {p:50, name:"Interval training", rec:"Recuperação curta e incompleta", desc:"Recupera caminhando 30s–1'30. Acumula fadiga de propósito, treina o corpo cansado."},
      {p:100,name:"Método de repetições", rec:"Recuperação AMPLA e suave", desc:"Recupera bem (caminhando/parado) para fazer cada repetição perto da velocidade máxima."}
    ];
    const wrap=el(`<div class="tool">
      <input type="range" min="0" max="100" step="50" value="0">
      <div class="readout"><span>← recuperação intensa</span><span>recuperação ampla →</span></div>
      <div class="pill-result nm"></div>
      <div style="margin-top:8px" class="rc"></div>
      <div class="explain ds"></div>
    </div>`);
    const rng=wrap.querySelector("input");
    function upd(){ const d=data.find(x=>x.p==+rng.value); wrap.querySelector(".nm").textContent=d.name;
      wrap.querySelector(".rc").innerHTML="<b>"+d.rec+"</b>"; wrap.querySelector(".ds").textContent=d.desc;}
    rng.addEventListener("input",upd); upd();
    return withCaption(wrap,caption);
  }

  /* ---------- TOOL: minhas zonas de intensidade ---------- */
  function zonas(caption){
    const wrap=el(`<div class="tool">
      <label>Seu ritmo de limiar (VT2) — o pace que você aguenta ~1h forte, por km</label>
      <input type="text" class="inp" placeholder="ex.: 5:00" value="5:00">
      <div class="out hide">
        <div class="zonebar">
          <div style="background:var(--z-mod)" class="zmod"></div>
          <div style="background:var(--z-hard)" class="zhard"></div>
          <div style="background:var(--z-sev)" class="zsev"></div>
        </div>
        <div class="readout"><span class="l1"></span><span class="l2"></span></div>
        <div class="explain">Aproximação didática a partir do ritmo de limiar — não substitui um teste de laboratório.</div>
      </div>
      <div class="btnrow"><button class="btn calc">Calcular meus domínios</button></div>
    </div>`);
    const out=wrap.querySelector(".out");
    function calc(){
      const t=parsePace(wrap.querySelector(".inp").value);
      if(t===null){ out.classList.add("hide"); alert("Use o formato m:ss, ex.: 5:00"); return;}
      // VT2 = t. VT1 ~ +45s/km mais lento. Severo < VT2.
      const vt2=t, vt1=t+45;
      out.querySelector(".zmod").textContent="🟢 > "+fmtPace(vt1);
      out.querySelector(".zhard").textContent="🟡 "+fmtPace(vt1)+"–"+fmtPace(vt2);
      out.querySelector(".zsev").textContent="🔴 < "+fmtPace(vt2);
      out.querySelector(".l1").textContent="Fácil mais lento que "+fmtPace(vt1)+"/km";
      out.querySelector(".l2").textContent="Forte mais rápido que "+fmtPace(vt2)+"/km";
      out.classList.remove("hide");
    }
    wrap.querySelector(".calc").addEventListener("click",calc);
    return withCaption(wrap,caption);
  }

  /* ---------- TOOL: correr ou caminhar? (bônus, teaser do Módulo 2) ---------- */
  function correrCaminhar(caption){
    const wrap=el(`<div class="tool">
      <label>Inclinação da subida: <b class="gv">12</b>%</label>
      <input type="range" min="4" max="30" step="1" value="12" class="grad">
      <label>Seu nível: <b class="lv">Recreativo</b></label>
      <input type="range" min="0" max="2" step="1" value="0" class="lvl">
      <div class="verdict"></div>
    </div>`);
    const grad=wrap.querySelector(".grad"), lvl=wrap.querySelector(".lvl");
    const gv=wrap.querySelector(".gv"), lv=wrap.querySelector(".lv"), verd=wrap.querySelector(".verdict");
    const levels=[{n:"Recreativo",thr:12},{n:"Treinado",thr:15},{n:"Elite",thr:18}];
    function upd(){ const g=+grad.value, L=levels[+lvl.value]; gv.textContent=g; lv.textContent=L.n;
      if(g>=L.thr){ verd.innerHTML="🚶 <span style='color:var(--z-mod)'>Caminhe</span><small>Acima de ~"+L.thr+"%, para o seu nível, caminhar gasta MENOS energia que correr. Antecipe — não espere estourar.</small>"; }
      else { verd.innerHTML="🏃 <span style='color:var(--brand-2)'>Corra</span><small>Abaixo de ~"+L.thr+"%, correr ainda compensa. O ponto de troca sobe conforme você fica mais forte.</small>"; }
    }
    grad.addEventListener("input",upd); lvl.addEventListener("input",upd); upd();
    return withCaption(wrap,caption);
  }

  /* ---------- TOOL: velocidade ascensional ---------- */
  function ascensional(caption){
    const wrap=el(`<div class="tool">
      <label>Desnível positivo (metros)</label><input type="number" class="d" value="800" min="0">
      <label>Tempo de subida (minutos)</label><input type="number" class="t" value="80" min="1">
      <div class="btnrow"><button class="btn calc">Calcular</button></div>
      <div class="out hide"><div class="pill-result r"></div><div class="explain e"></div></div>
    </div>`);
    const out=wrap.querySelector(".out");
    function band(v){ if(v<400)return["Iniciante","var(--z-sev)"]; if(v<600)return["Intermediário","var(--z-hard)"]; if(v<800)return["Bem treinado","var(--z-mod)"]; return["Nível elite","var(--brand)"]; }
    wrap.querySelector(".calc").addEventListener("click",()=>{
      const d=+wrap.querySelector(".d").value, t=+wrap.querySelector(".t").value;
      if(!t){return;} const vam=Math.round(d/(t/60)); const b=band(vam);
      wrap.querySelector(".r").innerHTML=vam+" m/h <span style='color:"+b[1]+"'>· "+b[0]+"</span>";
      wrap.querySelector(".e").textContent="Velocidade ascensional = metros de subida por hora. ~600 m/h num circuito já é estar muito bem treinado.";
      out.classList.remove("hide");
    });
    return withCaption(wrap,caption);
  }

  function withCaption(node,caption){
    if(!caption) return node;
    const f=document.createElement("div"); f.appendChild(node);
    const c=document.createElement("div"); c.className="caption"; c.textContent=caption;
    f.appendChild(c); return f;
  }

  return { decouple, domains, spectrum, zonas, correrCaminhar, ascensional };
})();
