'use strict';
importScripts('sw - toolbox.js'); toolbox.precache(["index.html", "/css/style.css", "/css/reset.css", "/js/script.js"]); toolbox.router.get('/images/*', toolbox.cacheFirst); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5 });