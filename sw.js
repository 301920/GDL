/* ===========================
   SERVICE WORKER
   PWA Support for offline access
   =========================== */

const CACHE_NAME = 'gardiens-du-lys-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/favicon.svg',
    '/assets/styles/main.css',
    '/assets/styles/responsive.css',
    '/assets/scripts/app.js',
    '/pages/home.html',
    '/pages/about.html',
    '/pages/contact.html',
    '/pages/components/navbar.html',
    '/pages/components/footer.html',
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return cached version if available
            if (response) {
                return response;
            }

            // Otherwise fetch from network
            return fetch(event.request).then((response) => {
                // Cache successful responses
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                // Offline fallback
                console.log('[ServiceWorker] Network request failed, returning offline page');
                return new Response('Offline - Page not available', {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: new Headers({
                        'Content-Type': 'text/plain'
                    })
                });
            });
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[ServiceWorker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
