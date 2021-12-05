"use strict";

const filesToCache = [
    'css/bootstrap.min.css',
    'css/favicon.ico',
    'css/font-awesome.min.css',
    'css/styles.css',
    'files/BJDelaCruz_resume.pdf',
    'fonts/fontawesome-webfont.ttf',
    'fonts/fontawesome-webfont.woff',
    'fonts/fontawesome-webfont.woff2',
    'img/cnmi.svg',
    'img/java.svg',
    'img/javascript.svg',
    'img/jlpt.svg',
    'img/python.svg',
    'img/sparty.svg',
    'js/bootstrap.min.js',
    'js/index.js',
    'app.js',
    'index.html',
    'katas.html'
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
