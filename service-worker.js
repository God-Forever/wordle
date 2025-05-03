const CACHE_NAME = "pwa-example-cache-v1";
const urlsToCache = [
  "/",
  "/css/font.css",
  "/css/icon.css",
  "/css/index.css",
  "/javascript/extend_wordlist.js",
  "/javascript/mini_wordlist.js",
  "/javascript/wordlist.js",
  "/javascript/word_meanings.js",
  "/javascript/index.js",
  "/images/icon.png",
  "/webfonts/courier-new.woff2",
  "/webfonts/fa-brands-400.ttf",
  "/webfonts/fa-brands-400.woff2",
  "/webfonts/fa-regular-400.ttf",
  "/webfonts/fa-regular-400.woff2",
  "/webfonts/fa-solid-900.ttf",
  "/webfonts/fa-solid-900.woff2",
  "/webfonts/fa-v4compatibility.ttf",
  "/webfonts/fa-v4compatibility.woff2",
  "/webfonts/montserrat-cyrillic-ext.woff2",
  "/webfonts/montserrat-cyrillic.woff2",
  "/webfonts/montserrat-latin-ext.woff2",
  "/webfonts/montserrat-latin.woff2",
  "/webfonts/montserrat-vietnamese.woff2",
  "/webfonts/open-sans-cyrillic-ext.woff2",
  "/webfonts/open-sans-cyrillic.woff2",
  "/webfonts/open-sans-greek-ext.woff2",
  "/webfonts/open-sans-greek.woff2",
  "/webfonts/open-sans-hebrew.woff2",
  "/webfonts/open-sans-latin-ext.woff2",
  "/webfonts/open-sans-latin.woff2",
  "/webfonts/open-sans-math.woff2",
  "/webfonts/open-sans-symbols.woff2",
  "/webfonts/open-sans-vietnamese.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
