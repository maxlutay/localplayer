let CACHE_NAME = "localplayer_cache_v1";
let URLS_TO_CACHE = ["/localplayer/","/localplayer/index.html"];





self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache =>  (console.log("Cache opened"),cache.addAll(URLS_TO_CACHE)) )
    );
});

self.addEventListener("fetch", function (e) {
    e.respondWith(caches.match(e.request).then(req => req || fetch(e.request)));
});








