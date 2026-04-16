// Service Worker for CAM SITE RETREATS Admin PWA
const CACHE_NAME = 'csr-admin-v2';
const STATIC_ASSETS = [
  '/admin/',
  '/admin/index.html',
];

// Install: cache static shell
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[SW] Cache addAll failed:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch strategy:
// - API calls → Network only (always fresh data)
// - Static assets → Network first, fallback to cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // API calls: always go to network (đừng cache data)
  if (url.pathname.startsWith('/api/')) {
    return; // Let browser handle normally
  }

  // Static assets: network first → cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful GET responses
        if (event.request.method === 'GET' && response.status === 200) {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
        }
        return response;
      })
      .catch(() => {
        // Offline fallback: serve from cache
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/admin/');
          }
        });
      })
  );
});

// Push notifications (sẵn sàng cho tương lai)
self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  const title = data.title || 'CAM SITE RETREATS';
  const options = {
    body: data.body || 'Có thông báo mới',
    icon: '/admin/icon-192.png',
    badge: '/admin/icon-192.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/admin/' }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/admin/';
  event.waitUntil(clients.openWindow(targetUrl));
});
