//////////////////////////////////////
// DXSJ INFINITE RADIO
// SERVICE WORKER
//////////////////////////////////////

const CACHE_NAME = "dxsj-radio-v1";

const ASSETS = [
  "/",
  "/index.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
