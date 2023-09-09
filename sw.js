const precacheAssets = [
    "./",
    "./src/style.css",
    "./images/logo192.png",
    "./images/telogo.png",
    "./images/favicon.png"
]
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(precacheAssets);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});