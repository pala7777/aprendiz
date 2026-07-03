/* Service Worker — Aprendiz (offline-first app shell) */
const VERSION = "aprendiz-v22";
const ASSETS = [
  "./",
  "index.html",
  "assets/css/styles.css",
  "content/platform.js",
  "assets/js/imp.js",
  "assets/js/tools.js",
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
  "assets/img/covers/fcover-4.jpg","assets/img/covers/fcover-5.jpg","assets/img/covers/fcover-6.jpg","assets/img/covers/fcover-7.jpg"
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
