"use strict";

const filesToCache = [
    'css/all.min.css',
    'css/bootstrap.min.css',
    'css/index-styles.css',
    'files/BJDelaCruz_resume.pdf',
    'webfonts/fa-brands-400.eot',
    'webfonts/fa-brands-400.svg',
    'webfonts/fa-brands-400.ttf',
    'webfonts/fa-brands-400.woff',
    'webfonts/fa-brands-400.woff2',
    'webfonts/fa-duotone-900.eot',
    'webfonts/fa-duotone-900.svg',
    'webfonts/fa-duotone-900.ttf',
    'webfonts/fa-duotone-900.woff',
    'webfonts/fa-duotone-900.woff2',
    'webfonts/fa-light-300.eot',
    'webfonts/fa-light-300.svg',
    'webfonts/fa-light-300.ttf',
    'webfonts/fa-light-300.woff',
    'webfonts/fa-light-300.woff2',
    'webfonts/fa-regular-400.eot',
    'webfonts/fa-regular-400.svg',
    'webfonts/fa-regular-400.ttf',
    'webfonts/fa-regular-400.woff',
    'webfonts/fa-regular-400.woff2',
    'webfonts/fa-solid-900.eot',
    'webfonts/fa-solid-900.svg',
    'webfonts/fa-solid-900.ttf',
    'webfonts/fa-solid-900.woff',
    'webfonts/fa-solid-900.woff2',
    'img/cnmi.svg',
    'img/favicon.ico',
    'img/java.svg',
    'img/javascript.svg',
    'img/jlpt.svg',
    'img/python.svg',
    'img/sparty.svg',
    'js/app.js',
    'js/bootstrap.min.js',
    'index.html'
];

const cacheName = 'websiteCacheV1';

self.addEventListener('install', (event) => {
    const preCache = async () => {
        const cache = await caches.open(cacheName);
        return cache.addAll(filesToCache);
    };
    event.waitUntil(preCache());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(networkFirstStrategy(event.request));
});

const networkFirstStrategy = async (request) => {
    try {
        return await fetchRequestAndCache(request);
    }
    catch {
        return await caches.match(request);
    }
}

const fetchRequestAndCache = async (request) => {
    const networkResponse = await fetch(request);
    const clonedResponse = networkResponse.clone();
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse);
    return clonedResponse;
}
