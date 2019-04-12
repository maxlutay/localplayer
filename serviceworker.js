let CACHE_NAME = "localplayer_cache_v1";
let URLS_TO_CACHE = ["/"];





self.addEventListener("install", e => {
    e.waitUntill(
        caches.open(CACHE_NAME)
        .then(cache =>  (console.log("Cache opened"),cache.addAll(URLS_TO_CACHE)) )
    );
});

self.addEventListener("fetch", function (e) {
    e.respondWith(caches.match(e.request).then(req => req || fetch(e.request)));
});








