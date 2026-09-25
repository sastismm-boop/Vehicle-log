const CACHE_NAME = 'vehicle-log-live';

// Install event: purane cache ka wait na kare
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Activate event: turant naye version ka control le
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// NETWORK-FIRST STRATEGY: Pehle internet se fresh file layega, offline hone par cache chalayega
self.addEventListener('fetch', (e) => {
  // Sirf GET requests handle karein
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        // Agar internet se fresh copy mil gayi, toh use background me cache me bhi save kar do
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Agar internet nahi hai/offline ho, tab cache se file uthayega
        return caches.match(e.request);
      })
  );
});
