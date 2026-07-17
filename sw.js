// Minimal service worker - enables "Add to Home Screen" installability.
// Intentionally does not cache video/photo files (they change often and are large).
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {
  // pass-through, no caching of media
});
