var CACHE_NAME = 'ertrades-pwa-v82g';
self.addEventListener('install', function (event) { self.skipWaiting(); });
self.addEventListener('activate', function (event) { event.waitUntil(caches.keys().then(function(keys){ return Promise.all(keys.map(function(key){ if(key.indexOf('ertrades-pwa-')===0 && key!==CACHE_NAME){ return caches.delete(key); } return Promise.resolve(); })); }).then(function(){ return self.clients.claim(); })); });
self.addEventListener('fetch', function (event) { return; });
