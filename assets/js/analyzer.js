/* ============================================================
   ANALISADOR DE TREINO — GPX/TCX no navegador (sem backend)
   Elevação, velocidade ascensional, detecção correr × caminhar.
   ============================================================ */
window.ANALYZER = (function(){
  const R = 6371000;
  const rad = d => d*Math.PI/180;
  function haversine(a,b){
    const dLat=rad(b.lat-a.lat), dLon=rad(b.lon-a.lon);
    const s=Math.sin(dLat/2)**2 + Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLon/2)**2;
    return 2*R*Math.asin(Math.min(1,Math.sqrt(s)));
  }
  const el = h => { const t=document.createElement("template"); t.innerHTML=h.trim(); return t.content.firstChild; };
  const fmtDur = s => { s=Math.round(s); const h=Math.floor(s/3600),m=Math.floor(s%3600/60),ss=s%60;
    return (h?h+"h ":"")+String(m).padStart(h?2:1,"0")+"m "+String(ss).padStart(2,"0")+"s"; };
  const fmtPace = s => { if(!isFinite(s)||s<=0)return "—"; const m=Math.floor(s/60),ss=Math.round(s%60);
    return m+":"+String(ss).padStart(2,"0"); };

  /* ---- parse GPX/TCX ---- */
  function parse(text){
    const doc = new DOMParser().parseFromString(text,"application/xml");
    if(doc.querySelector("parsererror")) throw new Error("Arquivo inválido");
    const local = tag => Array.from(doc.getElementsByTagName("*")).filter(n=>n.localName===tag);
    let pts = local("trkpt");                 // GPX
    let isTcx = false;
    if(!pts.length){ pts = local("Trackpoint"); isTcx = true; }  // TCX
    const out = [];
    pts.forEach(p=>{
      let lat,lon,ele,time,hr,cad;
      if(!isTcx){
        lat=+p.getAttribute("lat"); lon=+p.getAttribute("lon");
        const g=t=>{const e=p.getElementsByTagName("*"); for(const n of e) if(n.localName===t) return n.textContent; return null;};
        ele=parseFloat(g("ele")); time=g("time");
        for(const n of p.getElementsByTagName("*")){ if(n.localName==="hr"||n.localName==="heartrate") hr=+n.textContent; if(n.localName==="cad"||n.localName==="cadence") cad=+n.textContent; }
      } else {
        const g=t=>{for(const n of p.getElementsByTagName("*")) if(n.localName===t) return n.textContent; return null;};
        const pos=Array.from(p.getElementsByTagName("*")).filter(n=>n.localName==="LatitudeDegrees"||n.localName==="LongitudeDegrees");
        lat=pos[0]?+pos[0].textContent:NaN; lon=pos[1]?+pos[1].textContent:NaN;
        ele=parseFloat(g("AltitudeMeters")); time=g("Time");
        const h=g("HeartRateBpm"); if(h) hr=+h.replace(/[^0-9.]/g,""); const c=g("RunCadence")||g("Cadence"); if(c) cad=+c;
      }
      if(isFinite(lat)&&isFinite(lon)) out.push({lat,lon,ele:isFinite(ele)?ele:null,time:time?Date.parse(time):null,hr:hr||null,cad:cad||null});
    });
    return out;
  }

  /* ---- suavização de elevação ---- */
  function smoothEle(pts){
    const e=pts.map(p=>p.ele);
    if(e.some(v=>v==null)) return null;
    const w=4, out=e.slice();
    for(let i=0;i<e.length;i++){ let s=0,c=0; for(let j=-w;j<=w;j++){const k=i+j; if(k>=0&&k<e.length){s+=e[k];c++;}} out[i]=s/c; }
    return out;
  }

  /* ---- análise ---- */
  function analyze(pts){
    const n=pts.length; if(n<2) throw new Error("Poucos pontos no arquivo.");
    const ele = smoothEle(pts);
    const hasTime = pts.every(p=>p.time!=null);
    const hasCad = pts.filter(p=>p.cad!=null).length > n*0.5;
    const hasHr  = pts.filter(p=>p.hr!=null).length  > n*0.5;
    let dist=0, gain=0, loss=0, movingTime=0;
    const profile=[]; const segs=[]; // seg: {d, grad, spd, walk}
    let cumWalkTime=0, cumRunTime=0, cumClimbTime=0, climbGain=0;
    for(let i=1;i<n;i++){
      const dd=haversine(pts[i-1],pts[i]); dist+=dd;
      let de=0; if(ele){ de=ele[i]-ele[i-1]; if(de>0.3) gain+=de; else if(de<-0.3) loss+=-de; }
      const grad = dd>0 && ele ? (de/dd*100) : 0;
      let dt=0, spd=0;
      if(hasTime){ dt=Math.max(0,(pts[i].time-pts[i-1].time)/1000); if(dt>0&&dt<20){ movingTime+=dt; spd=dd/dt; } }
      // classificação correr × caminhar
      let walk=false;
      if(hasCad){ walk = pts[i].cad < 140; }
      else if(hasTime){ walk = (spd*3.6) < 7 && dd>0; }
      if(hasTime){ if(walk) cumWalkTime+=dt; else cumRunTime+=dt; if(grad>3){cumClimbTime+=dt; if(de>0)climbGain+=de;} }
      profile.push({x:dist, y:ele?ele[i]:0, walk});
    }
    const durTotal = hasTime ? (pts[n-1].time-pts[0].time)/1000 : null;
    const hours = durTotal ? durTotal/3600 : (movingTime/3600);
    return {
      n, dist, gain:ele?gain:null, loss:ele?loss:null, hasEle:!!ele, hasTime, hasCad, hasHr,
      durTotal, movingTime, avgPace: dist>0 && hours ? (hours*3600)/(dist/1000) : null,
      ascensional: ele && hours>0 ? gain/hours : null,
      ratioDN: ele && dist>0 ? gain/(dist/1000) : null,
      walkPct: hasTime && (cumWalkTime+cumRunTime)>0 ? cumWalkTime/(cumWalkTime+cumRunTime)*100 : null,
      profile,
      avgHr: hasHr ? Math.round(pts.filter(p=>p.hr).reduce((s,p)=>s+p.hr,0)/pts.filter(p=>p.hr).length) : null
    };
  }

  /* ---- gráfico de elevação (SVG) com trechos caminhando ---- */
  function chart(a){
    if(!a.hasEle) return "<div class='caption'>Sem dados de altitude neste arquivo.</div>";
    const W=680,H=180,pad=4;
    const xs=a.profile.map(p=>p.x), ys=a.profile.map(p=>p.y);
    const xmax=Math.max(...xs)||1, ymin=Math.min(...ys), ymax=Math.max(...ys);
    const yr=(ymax-ymin)||1;
    const X=x=>pad+x/xmax*(W-2*pad), Y=y=>H-pad-(y-ymin)/yr*(H-2*pad-20);
    let area=`M ${X(0)} ${H-pad}`;
    a.profile.forEach(p=>area+=` L ${X(p.x).toFixed(1)} ${Y(p.y).toFixed(1)}`);
    area+=` L ${X(xmax)} ${H-pad} Z`;
    // strip caminhar/correr
    let strip="";
    a.profile.forEach((p,i)=>{ if(i===0)return; const x0=X(a.profile[i-1].x),x1=X(p.x);
      strip+=`<rect x="${x0.toFixed(1)}" y="${H-14}" width="${(x1-x0+0.6).toFixed(1)}" height="10" fill="${p.walk?'#fbbf24':'#7c5cff'}" opacity="${p.walk?0.95:0.5}"/>`; });
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="margin-top:8px">
      <defs><linearGradient id="eg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7c5cff" stop-opacity="0.55"/><stop offset="1" stop-color="#7c5cff" stop-opacity="0.05"/></linearGradient></defs>
      <path d="${area}" fill="url(#eg)" stroke="#a78bfa" stroke-width="1.5"/>
      ${a.hasTime?strip:""}
      </svg>
      ${a.hasTime?"<div class='readout'><span>🟪 correndo</span><span>🟨 caminhando</span></div>":""}`;
  }

  function band(v){ if(v==null)return["—",""]; if(v<400)return["Iniciante","var(--z-sev)"]; if(v<600)return["Intermediário","var(--z-hard)"]; if(v<800)return["Bem treinado","var(--z-mod)"]; return["Elite","var(--brand-2)"]; }

  function stat(label,val,sub){ return `<div class="astat"><div class="v">${val}</div><div class="l">${label}</div>${sub?`<div class="s">${sub}</div>`:""}</div>`; }

  function render(a){
    const km=(a.dist/1000).toFixed(2);
    const asc=band(a.ascensional);
    let insights=[];
    if(a.ascensional!=null) insights.push(`Sua <span class="term" data-term="velocidade ascensional">velocidade ascensional</span> foi <b>${Math.round(a.ascensional)} m/h</b> — nível <b style="color:${asc[1]}">${asc[0]}</b>. Referência de "bem treinado" ≈ 600 m/h (Módulo 2).`);
    if(a.walkPct!=null) insights.push(`Você passou <b>${Math.round(a.walkPct)}%</b> do tempo em ritmo de caminhada. Nas subidas fortes, caminhar cedo e de forma proativa é o esperado (Módulo 2).`);
    if(a.ratioDN!=null) insights.push(`Densidade de desnível: <b>${Math.round(a.ratioDN)} m/km</b> ${a.ratioDN>60?"(percurso bem montanhoso)":a.ratioDN>30?"(percurso ondulado)":"(percurso suave)"}.`);
    if(!a.hasCad && a.hasTime) insights.push("<i>Sem dados de cadência: a divisão correr×caminhar foi estimada pela velocidade. Com um arquivo que tenha cadência, fica mais preciso.</i>");
    return `<div class="analysis">
      <div class="astats">
        ${stat("Distância", km+" km")}
        ${stat("Desnível +", a.hasEle?Math.round(a.gain)+" m":"—")}
        ${stat("Duração", a.durTotal?fmtDur(a.durTotal):"—")}
        ${stat("Ritmo médio", a.avgPace?fmtPace(a.avgPace)+"/km":"—")}
        ${stat("Vel. ascensional", a.ascensional!=null?Math.round(a.ascensional)+" m/h":"—", a.ascensional!=null?asc[0]:"")}
        ${a.avgHr?stat("FC média", a.avgHr+" bpm"):""}
      </div>
      ${chart(a)}
      <div class="insights">${insights.map(i=>`<div class="ins">💡 ${i}</div>`).join("")}</div>
    </div>`;
  }

  /* ---- UI (input + resultado) ---- */
  function ui(){
    const wrap = el(`<div class="tool analyzer">
      <p style="margin:0 0 10px;color:var(--tx-dim);font-size:14px">Suba um treino em <b>.gpx</b> ou <b>.tcx</b> (exporte do Garmin Connect, Strava ou seu relógio) e veja a metodologia do curso nos <b>seus</b> dados. Tudo processado no seu navegador — nada é enviado.</p>
      <label class="drop">
        <input type="file" accept=".gpx,.tcx,application/gpx+xml" hidden>
        <span>📁 Escolher arquivo GPX/TCX</span>
      </label>
      <div class="result"></div>
    </div>`);
    const inp=wrap.querySelector("input"), res=wrap.querySelector(".result"), lbl=wrap.querySelector(".drop span");
    inp.addEventListener("change",()=>{
      const f=inp.files[0]; if(!f)return; lbl.textContent="⏳ Lendo "+f.name+"…";
      const r=new FileReader();
      r.onload=()=>{ try{
          const pts=parse(r.result); const a=analyze(pts);
          res.innerHTML=render(a); lbl.textContent="📁 "+f.name+" ✓ (trocar arquivo)";
          if(window.__attachGlossary) window.__attachGlossary(res);
        }catch(e){ res.innerHTML="<div class='ins' style='color:var(--err)'>⚠ "+(e.message||"Não consegui ler o arquivo.")+"</div>"; lbl.textContent="📁 Escolher arquivo GPX/TCX"; }
      };
      r.readAsText(f);
    });
    return wrap;
  }
  return { ui, analyze, parse };
})();
