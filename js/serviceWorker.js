const CACHE_NAME = 'video-cache-v1';
const CACHE_URLS = [
    'https://storage.googleapis.com/bari-cloud/valle-imperial/videos/PANTALLA-RES.mp4',
    'https://storage.googleapis.com/bari-cloud/valle-imperial/videos/VIDEO-POLLO.mp4',
    'https://storage.googleapis.com/bari-cloud/valle-imperial/videos/LOGO_IMPERIAL.mp4',
    'https://storage.googleapis.com/bari-cloud/valle-imperial/videos/VIDEO_MARISCO.mp4'
];

// Install event - precache the videos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_URLS);
        })
    );
});

// Fetch event - serve videos from cache if available
self.addEventListener('fetch', (event) => {
    if (CACHE_URLS.includes(event.request.url)) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request).then((response) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request.url, response.clone());
                        return response;
                    });
                });
            })
        );
    }
});