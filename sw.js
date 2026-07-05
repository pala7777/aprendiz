/* Service Worker — Aprendiz (offline-first app shell) */
const VERSION = "aprendiz-v28";
const ASSETS = [
  "./",
  "index.html",
  "assets/css/styles.css",
  "content/platform.js",
  "assets/js/imp.js",
  "assets/js/tools.js",
  "assets/vendor/chart.umd.min.js",
  "assets/vendor/p5.min.js",
  "assets/js/interactives.js",
  "assets/js/analyzer.js",
  "assets/js/flashcards.js",
  "assets/js/app.js",
  "manifest.webmanifest",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/img/logo-emblem.png",
  "assets/img/hero.jpg",
  "assets/img/m0.jpg","assets/img/m1.jpg","assets/img/m2.jpg",
  "assets/img/m3.jpg","assets/img/m4.jpg","assets/img/m5.jpg",
  "assets/img/diagrams/musculo-inclinacao.jpg","assets/img/diagrams/modalidades.jpg",
  "assets/img/diagrams/respiracao.jpg","assets/img/diagrams/periodizacao.jpg",
  "assets/img/diagrams/correr-caminhar.jpg","assets/img/diagrams/excentrico.jpg",
  "assets/img/diagrams/dominios.jpg","assets/img/diagrams/fartlek.jpg","assets/img/diagrams/espectro.jpg",
  "assets/img/diagrams/f-quatro.jpg","assets/img/diagrams/f-penacao.jpg","assets/img/diagrams/f-fibras.jpg",
  "assets/img/diagrams/f-caibras.jpg","assets/img/diagrams/f-periodizacao.jpg","assets/img/diagrams/f-concorrencia.jpg",
  "assets/img/diagrams/f-carater.jpg","assets/img/diagrams/f-sessao.jpg","assets/img/diagrams/f-progressao.jpg",
  "assets/img/covers/ccover-forca.jpg",
  "assets/img/covers/fcover-1.jpg","assets/img/covers/fcover-2.jpg","assets/img/covers/fcover-3.jpg",
  "assets/img/covers/fcover-4.jpg","assets/img/covers/fcover-5.jpg","assets/img/covers/fcover-6.jpg","assets/img/covers/fcover-7.jpg",
  "assets/img/covers/ccover-fisiologia.jpg",
  "assets/img/covers/mcover-1.jpg","assets/img/covers/mcover-2.jpg","assets/img/covers/mcover-3.jpg",
  "assets/img/covers/mcover-4.jpg","assets/img/covers/mcover-5.jpg","assets/img/covers/mcover-6.jpg","assets/img/covers/mcover-7.jpg",
  "assets/img/diagrams/fis-energia.jpg","assets/img/diagrams/fis-crossover.jpg","assets/img/diagrams/fis-limiares.jpg",
  "assets/img/diagrams/fis-vo2.jpg","assets/img/diagrams/fis-pilares.jpg","assets/img/diagrams/fis-coracao.jpg",
  "assets/img/diagrams/fis-adaptacoes.jpg","assets/img/diagrams/fis-polarizado.jpg","assets/img/diagrams/fis-fadiga.jpg",
  "assets/img/covers/ccover-nutricao.jpg",
  "assets/img/diagrams/nut-macros.jpg","assets/img/diagrams/nut-tanque.jpg","assets/img/diagrams/nut-timing.jpg",
  "assets/img/diagrams/nut-prova.jpg","assets/img/diagrams/nut-intestino.jpg","assets/img/diagrams/nut-hidratacao.jpg",
  "assets/img/diagrams/nut-recuperacao.jpg","assets/img/diagrams/nut-composicao.jpg","assets/img/diagrams/nut-suplementos.jpg",
  "assets/img/covers/ccover-rua.jpg",
  "assets/img/diagrams/rua-provas.jpg","assets/img/diagrams/rua-vam.jpg","assets/img/diagrams/rua-zonas.jpg",
  "assets/img/diagrams/rua-metodos.jpg","assets/img/diagrams/rua-progressao.jpg","assets/img/diagrams/rua-combustivel.jpg",
  "assets/img/diagrams/rua-muro.jpg","assets/img/diagrams/rua-forca.jpg","assets/img/diagrams/rua-testes.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      // cacheia respostas do próprio site
      if (res.ok && e.request.url.startsWith(self.location.origin)) {
        const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
