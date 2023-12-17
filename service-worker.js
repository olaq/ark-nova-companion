self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '',
        'index.html',
        'manifest.json',
        'css/styles.css',
        'js/script.js',
        'img/icons/128_africa.png',
        'img/icons/128_americas.png',
        'img/icons/128_aquatic.png',
        'img/icons/128_asia.png',
        'img/icons/128_australia.png',
        'img/icons/128_bears.png',
        'img/icons/128_birds.png',
        'img/icons/128_europe.png',
        'img/icons/128_herbivores.png',
        'img/icons/128_petting.png',
        'img/icons/128_predators.png',
        'img/icons/128_primates.png',
        'img/icons/128_reptiles.png',
        'img/icons/128_research.png',
        'img/icons/128_rock.png',
        'img/icons/128_water.png',

        'img/android-chrome-192x192.png',
        'img/android-chrome-512x512.png',
        'img/apple-touch-icon.png',
        'img/favicon.ico',
        'img/favicon-16x16.png',
        'img/favicon-32x32.png'
      ]);
    })
  );
});



self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});