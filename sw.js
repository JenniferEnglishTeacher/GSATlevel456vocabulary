// Service worker for the Vocabulary Board (makes the site installable and usable on a weak connection).
// Network first: students always get the newest pages and questions; the saved copy is used only when offline.
// Results to the teacher's Google Sheet (script.google.com) are never touched here; tracker.js queues and resends them.
const CACHE = "vocab-board-v2"; // bump when shared files change, so installed apps refresh their saved copy
const CORE = [
  "./", "./index.html", "./styles.css", "./books.js", "./dashboard.js",
  "./tracker.js", "./tracker-config.js", "./pwa.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
  "./app.js", "./gsat-words.js", "./dialogue-tts.js", "./colloc-app.js", "./colloc.css",
  "./cf.js", "./cf.css", "./cf-index.js", "./wf.js", "./wf.css", "./wf-index.js"
];
const MAX_ENTRIES = 600;

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => Promise.all(CORE.map(url => cache.add(url).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_ENTRIES; i++) await cache.delete(keys[i]);
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // TTS, dictionary, Google Sheet: straight to the network
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const res = await fetch(req);
      if (res && res.ok && res.type === "basic") {
        cache.put(req, res.clone()).then(() => trim(cache)).catch(() => {});
      }
      return res;
    } catch (error) {
      const hit = await cache.match(req) || await cache.match(req, { ignoreSearch: true });
      if (hit) return hit;
      if (req.mode === "navigate") {
        const home = await cache.match("./index.html", { ignoreSearch: true });
        if (home) return home;
      }
      return new Response("Offline 目前沒有網路", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }
  })());
});
