const cacheName = 'offline-cache-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/js/jquery.js',
    '/js/plugins.js',
    '/js/init.js',
    '/js/offline.js',
    '/css/plugins.css',
    '/css/modalboxes.css',
    '/css/css/style.css',
];

// Install the service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('Caching files...');
                return cache.addAll(filesToCache);
            })
    );
});

// Fetch the files from the cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

// Activate the service worker and remove old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== cacheName).map(name => caches.delete(name))
            );
        })
    );
});
