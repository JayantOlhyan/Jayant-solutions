const CACHE_VERSION = 'v1';
const APP_CACHE_NAME = `app-cache-${CACHE_VERSION}`;
const STATIC_CACHE_NAME = `static-cache-${CACHE_VERSION}`;
const IMAGE_CACHE_NAME = `image-cache-${CACHE_VERSION}`;

const PRECACHE_ASSETS = [
  '/offline.html',
  '/favicon.ico',
  '/logo.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/globe.svg',
  '/window.svg',
  '/file.svg'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Pre-caching offline shell and assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event (Cleanup Obsolete Caches)
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [APP_CACHE_NAME, STATIC_CACHE_NAME, IMAGE_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('[Service Worker] Deleting obsolete cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Helper: Check if request is a static chunk or bundle
function isStaticAsset(url) {
  return (
    url.includes('_next/static/') ||
    url.endsWith('.js') ||
    url.endsWith('.css') ||
    url.endsWith('.woff2') ||
    url.endsWith('.woff') ||
    url.endsWith('.ttf')
  );
}

// Helper: Check if request is an image
function isImage(url) {
  return (
    url.endsWith('.png') ||
    url.endsWith('.jpg') ||
    url.endsWith('.jpeg') ||
    url.endsWith('.gif') ||
    url.endsWith('.webp') ||
    url.endsWith('.svg') ||
    url.endsWith('.ico')
  );
}

// Stale-While-Revalidate Strategy
function staleWhileRevalidate(request, cacheName) {
  return caches.open(cacheName).then((cache) => {
    return cache.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch((err) => {
          console.warn('[Service Worker] Fetch failed for stale-while-revalidate:', request.url, err);
        });

      return cachedResponse || fetchPromise;
    });
  });
}

// Cache-First Strategy
function cacheFirst(request, cacheName) {
  return caches.open(cacheName).then((cache) => {
    return cache.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      });
    });
  });
}

// Fetch Event
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = request.url;

  // 1. Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // 2. Ignore non-http/https schemes (like chrome-extension://, mailto:, data:, or WhatsApp APIs)
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return;
  }

  // 3. Ignore webpack hot reload / local development web socket requests
  if (url.includes('webpack-hmr') || url.includes('next/webpack-hmr') || url.includes('/_next/data/')) {
    return;
  }

  // 4. Handle Navigation requests (HTML Pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // If successful network response, cache it dynamically for offline usage
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(APP_CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Network failed (offline). Look up matching cached page first.
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If page is not in cache, fallback to the branded offline page
            return caches.match('/offline.html');
          });
        })
    );
    return;
  }

  // 5. Handle static JS, CSS, and Fonts (Cache-First)
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE_NAME));
    return;
  }

  // 6. Handle Images (Cache-First)
  if (isImage(url)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE_NAME));
    return;
  }

  // 7. Fallback to network first for everything else (e.g. normal page data)
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});
