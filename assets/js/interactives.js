/* ============================================================
   INTERATIVOS v2 — componentes "waoh" (Chart.js + p5.js)
   Registram-se em window.TOOLS. Usados via {type:"tool"/"visual", component:"..."}.
   ============================================================ */
(function () {
  const T = window.TOOLS || (window.TOOLS = {});
  const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };
  function cap(node, caption) {
    if (!caption) return node;
    const f = document.createElement("div"); f.appendChild(node);
    const c = document.createElement("div"); c.className = "caption"; c.textContent = caption; f.appendChild(c);
    return f;
  }
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ---------- SISTEMA DE ENERGIA (p5) — combustível × intensidade ---------- */
  T.energySystem = function (caption) {
    const wrap = el(`<div class="tool ix">
      <label>Intensidade do esforço: <b class="v">40%</b></label>
      <input type="range" min="5" max="100" value="40" class="ix-int">
      <div class="p5host"></div>
      <div class="ix-note">Arraste e veja de onde vem a energia — a gordura domina no fácil; os carboidratos e o sistema anaeróbio assumem conforme aperta.</div>
    </div>`);
    const host = wrap.querySelector(".p5host");
    const slider = wrap.querySelector(".ix-int");
    const vlbl = wrap.querySelector(".v");
    // alvo dos 3 combustíveis (%)
    function targets(i) {
      const fat = Math.max(4, 88 - i * 1.05);
      const ana = Math.max(0, (i - 58) * 1.9);
      let carb = 100 - fat - ana; if (carb < 0) carb = 0;
      const s = fat + carb + ana; return [fat / s * 100, carb / s * 100, ana / s * 100];
    }
    new p5((p) => {
      let cur = [60, 38, 2];
      const cols = () => [p.color(46, 168, 106), p.color(240, 176, 40), p.color(180, 70, 230)];
      p.setup = () => { const c = p.createCanvas(640, 230); c.parent(host); p.textFont("Arial"); };
      p.draw = () => {
        const i = +slider.value; vlbl.textContent = i + "%";
        const tg = targets(i);
        for (let k = 0; k < 3; k++) cur[k] = lerp(cur[k], tg[k], 0.12);
        p.clear(); p.background(18, 19, 28, 0);
        const W = p.width, x0 = 14, y0 = 20, bw = W - 28, bh = 96;
        // barra empilhada horizontal
        let x = x0; const C = cols(); const names = ["Gordura", "Carboidrato", "Anaeróbio"];
        p.noStroke();
        for (let k = 0; k < 3; k++) {
          const w = bw * cur[k] / 100;
          p.fill(C[k]); p.rect(x, y0, w, bh, k === 0 ? 10 : 0, k === 2 ? 10 : 0, k === 2 ? 10 : 0, k === 0 ? 10 : 0);
          if (w > 42) { p.fill(255); p.textSize(13); p.textAlign(p.CENTER, p.CENTER);
            p.text(Math.round(cur[k]) + "%", x + w / 2, y0 + bh / 2 - 8);
            p.textSize(11); p.text(names[k], x + w / 2, y0 + bh / 2 + 12); }
          x += w;
        }
        // legenda + dominante
        const dom = cur.indexOf(Math.max(...cur));
        p.textAlign(p.LEFT, p.CENTER); p.textSize(13);
        let lx = x0, ly = y0 + bh + 34;
        for (let k = 0; k < 3; k++) { p.fill(C[k]); p.rect(lx, ly - 7, 14, 14, 3); p.fill(200); p.text(names[k], lx + 20, ly); lx += p.textWidth(names[k]) + 56; }
        p.fill(255); p.textSize(15); p.textAlign(p.LEFT, p.CENTER);
        p.text("Sistema dominante: ", x0, y0 + bh + 66); p.fill(C[dom]); p.textStyle(p.BOLD);
        p.text(names[dom], x0 + p.textWidth("Sistema dominante: "), y0 + bh + 66); p.textStyle(p.NORMAL);
      };
    }, host);
    return cap(wrap, caption);
  };

  /* ---------- SIMULADOR DE PROVA / PACING (p5) ---------- */
  T.paceSim = function (caption) {
    const wrap = el(`<div class="tool ix">
      <label>Escolha a estratégia de prova e clique em Correr:</label>
      <div class="ix-btns">
        <button data-s="forte">Sair forte</button>
        <button data-s="const" class="on">Ritmo constante</button>
        <button data-s="neg">Negativo (guardar)</button>
      </div>
      <div class="p5host"></div>
      <div class="btnrow"><button class="btn ix-run">▶ Correr</button></div>
      <div class="ix-result"></div>
    </div>`);
    const host = wrap.querySelector(".p5host");
    let strat = "const";
    wrap.querySelectorAll(".ix-btns button").forEach(b => b.onclick = () => {
      strat = b.dataset.s; wrap.querySelectorAll(".ix-btns button").forEach(x => x.classList.toggle("on", x === b));
    });
    const res = wrap.querySelector(".ix-result");
    let sim = null;
    new p5((p) => {
      let d = 0, t = 0, effort = 0, fatigue = 0, running = false, speedHist = [];
      const startPace = { forte: 1.28, const: 1.0, neg: 0.86 };
      p.setup = () => { const c = p.createCanvas(640, 220); c.parent(host); reset(); p.noLoop(); };
      function reset() { d = 0; t = 0; effort = 0; fatigue = 0; running = false; speedHist = []; res.textContent = ""; p.redraw(); }
      sim = { run() { reset(); running = true; p.loop(); } };
      p.draw = () => {
        p.clear();
        const W = p.width, H = p.height, trackY = 60, x0 = 20, x1 = W - 20, len = x1 - x0;
        // pista
        p.noStroke(); p.fill(30, 32, 46); p.rect(x0, trackY, len, 16, 8);
        p.fill(124, 92, 255, 90); p.rect(x0, trackY, len * d, 16, 8);
        // km markers
        p.fill(90); p.textSize(10); p.textAlign(p.CENTER, p.TOP);
        for (let k = 0; k <= 10; k++) { const mx = x0 + len * k / 10; p.stroke(60); p.line(mx, trackY - 4, mx, trackY + 20); p.noStroke(); }
        // corredor
        const rx = x0 + len * d, blow = fatigue > 1;
        p.fill(blow ? p.color(230, 80, 80) : p.color(124, 92, 255));
        p.circle(rx, trackY + 8, 18); p.fill(255); p.textSize(11); p.textAlign(p.CENTER, p.CENTER); p.text("🏃", rx, trackY + 8);
        // curva de esforço
        speedHist.push({ d, e: Math.min(1.15, effort) });
        p.noFill(); p.stroke(blow ? p.color(230, 80, 80) : p.color(124, 92, 255)); p.strokeWeight(2.5);
        p.beginShape(); speedHist.forEach(s => p.vertex(x0 + len * s.d, 190 - s.e * 96)); p.endShape();
        p.noStroke(); p.fill(150); p.textSize(11); p.textAlign(p.LEFT, p.CENTER);
        p.text("esforço →", x0, 96); p.stroke(70); p.line(x0, 190, x1, 190); p.line(x0, 94, x0, 190); p.noStroke();
        // limiar
        p.stroke(230, 120, 60, 120); p.strokeWeight(1); p.line(x0, 190 - 1 * 96, x1, 190 - 1 * 96); p.noStroke();
        p.fill(230, 140, 80); p.textSize(9); p.text("limiar", x1 - 34, 190 - 96 - 8);

        if (running) {
          let pace = startPace[strat];
          if (strat === "neg" && d > 0.55) pace = 1.18;           // acelera no fim
          if (strat === "forte") pace = 1.28 - d * 0.15;
          effort = pace + fatigue * 0.9;
          if (effort > 1) fatigue += (effort - 1) * 0.02;          // acima do limiar acumula fadiga
          let speed = pace * (fatigue > 1 ? Math.max(0.45, 1 - (fatigue - 1) * 1.4) : 1);
          d += speed * 0.0045; t += 1 / speed;
          if (d >= 1) { d = 1; running = false; p.noLoop(); finish(); }
        }
      };
      function finish() {
        const score = Math.round(t);
        const msg = {
          forte: "💥 Você <b>estourou</b> no fim (positive split) — o esforço passou do limiar cedo e a fadiga cobrou. Tempo pior.",
          const: "👍 Ritmo <b>constante</b>: sólido e previsível. Bom resultado.",
          neg: "🏆 <b>Split negativo</b>: você guardou e acelerou no fim — o melhor tempo, terminando forte."
        }[strat];
        const best = strat === "neg";
        res.innerHTML = "<div class='ix-card " + (best ? "good" : (strat === "forte" ? "bad" : "")) + "'>" + msg + "</div>";
      }
    }, host);
    wrap.querySelector(".ix-run").onclick = () => sim && sim.run();
    return cap(wrap, caption);
  };

  /* ---------- ZONAS DE TREINO (Chart.js) — gráfico interativo ---------- */
  T.zonasChart = function (caption) {
    const wrap = el(`<div class="tool ix">
      <label>Sua frequência cardíaca máxima (bpm)</label>
      <input type="number" class="ix-fc" value="190" min="120" max="220">
      <div style="position:relative;height:230px;margin-top:10px"><canvas class="ix-canvas"></canvas></div>
      <div class="ix-note">As 5 zonas de treino calculadas a partir da sua FC máxima — cada cor é uma intensidade.</div>
    </div>`);
    const canvas = wrap.querySelector(".ix-canvas");
    const input = wrap.querySelector(".ix-fc");
    const Z = [
      ["Z1 · Recuperação", 50, 60, "#3b82f6"],
      ["Z2 · Base aeróbia", 60, 70, "#22c55e"],
      ["Z3 · Tempo/limiar", 70, 80, "#eab308"],
      ["Z4 · Limiar/VO₂", 80, 90, "#f97316"],
      ["Z5 · Máximo", 90, 100, "#ef4444"],
    ];
    let chart = null;
    function build() {
      const fc = Math.max(120, Math.min(220, +input.value || 190));
      const data = Z.map(z => [Math.round(fc * z[1] / 100), Math.round(fc * z[2] / 100)]);
      const labels = Z.map(z => z[0]); const colors = Z.map(z => z[3]);
      if (chart) { chart.data.datasets[0].data = data; chart.update(); return; }
      chart = new Chart(canvas.getContext("2d"), {
        type: "bar",
        data: { labels, datasets: [{ data, backgroundColor: colors, borderRadius: 6, borderSkipped: false, barPercentage: 0.8 }] },
        options: {
          indexAxis: "y", responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => c.raw[0] + "–" + c.raw[1] + " bpm" } } },
          scales: {
            x: { min: Math.round(fc * 0.45), max: fc, ticks: { color: "#9aa3bd", callback: v => v + "" }, grid: { color: "rgba(255,255,255,.06)" }, title: { display: true, text: "batimentos por minuto", color: "#9aa3bd" } },
            y: { ticks: { color: "#cfd3e0", font: { size: 12 } }, grid: { display: false } }
          }
        }
      });
    }
    input.addEventListener("input", build);
    // Chart.js precisa do canvas no DOM; inicia no próximo frame
    requestAnimationFrame(() => requestAnimationFrame(build));
    return cap(wrap, caption);
  };

  /* ---------- DESCOLAMENTO DAS CARGAS (Chart.js) — interna × externa ---------- */
  T.decouple = function (caption) {
    const wrap = el(`<div class="tool ix">
      <label>Condição do dia: <b class="dv">fresco e descansado</b></label>
      <input type="range" min="0" max="100" value="10" class="ix-cond">
      <div style="position:relative;height:240px;margin-top:10px"><canvas class="ix-canvas"></canvas></div>
      <div class="ix-note ix-dnote">A <b>carga externa</b> (o ritmo/watts que você segura) fica constante — mas a <b>carga interna</b> (sua FC) sobe sozinha conforme cansaço, calor e desidratação apertam. Esse descolamento é a fadiga aparecendo.</div>
    </div>`);
    const canvas = wrap.querySelector(".ix-canvas");
    const cond = wrap.querySelector(".ix-cond");
    const dv = wrap.querySelector(".dv");
    const dnote = wrap.querySelector(".ix-dnote");
    const mins = Array.from({ length: 13 }, (_, k) => k * 5);         // 0..60 min
    let chart = null;
    function condLabel(c) {
      if (c < 25) return "fresco e descansado";
      if (c < 55) return "aquecendo / leve fadiga";
      if (c < 80) return "calor + fadiga";
      return "muito calor, desidratado, exausto";
    }
    function build() {
      const c = +cond.value;
      dv.textContent = condLabel(c);
      const ext = mins.map(() => 75);                                  // % — ritmo/potência constante
      const drift = c / 100;                                           // 0..1
      const intr = mins.map(m => {
        const base = 75;
        const rise = (m / 60) * (6 + drift * 34);                      // deriva cardíaca cresce no tempo e com a condição
        return Math.min(100, +(base + rise).toFixed(1));
      });
      const gap = (intr[12] - ext[12]).toFixed(0);
      dnote.innerHTML = "No fim de 1h, a FC subiu <b>" + gap + " pontos</b> para segurar o <b>mesmo</b> ritmo — "
        + (gap < 8 ? "descolamento pequeno: você estava fresco." : gap < 20 ? "descolamento moderado: fadiga chegando." : "descolamento grande: o corpo está pagando caro pelo mesmo esforço.");
      if (chart) { chart.data.datasets[0].data = ext; chart.data.datasets[1].data = intr; chart.update(); return; }
      chart = new Chart(canvas.getContext("2d"), {
        type: "line",
        data: {
          labels: mins.map(m => m + "'"),
          datasets: [
            { label: "Carga externa (ritmo/watts)", data: ext, borderColor: "#22c55e", backgroundColor: "transparent", borderWidth: 3, tension: .2, pointRadius: 0 },
            { label: "Carga interna (FC)", data: intr, borderColor: "#ef4444", backgroundColor: "rgba(239,68,68,.08)", borderWidth: 3, tension: .3, pointRadius: 0, fill: true }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          interaction: { intersect: false, mode: "index" },
          plugins: { legend: { labels: { color: "#cfd3e0", usePointStyle: true, boxWidth: 8 } },
            tooltip: { callbacks: { label: (x) => x.dataset.label + ": " + x.raw + "%" } } },
          scales: {
            x: { ticks: { color: "#9aa3bd" }, grid: { color: "rgba(255,255,255,.05)" }, title: { display: true, text: "tempo de esforço", color: "#9aa3bd" } },
            y: { min: 60, max: 100, ticks: { color: "#9aa3bd", callback: v => v + "%" }, grid: { color: "rgba(255,255,255,.06)" }, title: { display: true, text: "% do máximo", color: "#9aa3bd" } }
          }
        }
      });
    }
    cond.addEventListener("input", build);
    requestAnimationFrame(() => requestAnimationFrame(build));
    return cap(wrap, caption);
  };
})();
