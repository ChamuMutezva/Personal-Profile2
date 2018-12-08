const cacheName = "v1";

const cacheAssets = [
    'index.html',
    "main.css",
    "main.js",
    "images/arcadePic.JPG",
    "images/feature.JPG",
    "images/logo.jpg",
    "images/logo2.jpg",
    "images/memoryGamePicSmall.jpg",
    "images/Pixelimage.jpg",
    "images/webDev.png",
    "images/webDev2.jpg",
]
//call install event
self.addEventListener("install", e => {
    console.log("Sevice worker: Installed");

    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log("Service worker: Caching files");
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    )
});

//call activate event
self.addEventListener("activate", e => {
    console.log("Sevice worker: activated successfully");

    //remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log("Service worker clearing old caches");
                        return caches.delete(cache);
                    }
                })
            )
        })
    )

});

//call the fetch event
self.addEventListener("fetch", e =>{
    console.log("Service worker: Fetching");
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});