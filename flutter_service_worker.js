'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/background.jpg": "0bf280388937448d38392b76c15bd441",
"assets/images/background2.jpg": "0bf280388937448d38392b76c15bd441",
"assets/images/background3.png": "1666eb722120ebffa5077891abcb60e0",
"assets/images/background_wallpaper.png": "35f3e9c4b86568b4919949a9307da2a9",
"assets/images/birdfly.gif": "e27c6546116bb0521ecb8c74eb04e6f2",
"assets/images/docx.png": "5c9b76e4833003467e089894965d3846",
"assets/images/img_not_available.jpeg": "1c98fa4a13575d5854365f27b8bf66dc",
"assets/images/loginUser.png": "d8ce4611411fed3fcac150ca36d7d37e",
"assets/images/mimi1.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/images/mimi12.gif": "82a783353a27abe59feafd40bc686af1",
"assets/images/mimi2.gif": "82a783353a27abe59feafd40bc686af1",
"assets/images/mimi3.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/images/mimi4.gif": "6b65742393c65511ba223ec388c85ecc",
"assets/images/mimi5.gif": "609127cb5129f8e218fb57f059497c87",
"assets/images/mimi6.gif": "1ce35a6b3c21cc308a7683dfbea81c63",
"assets/images/mimi7.gif": "ace546bd302229af3a0c7e7221d2dc10",
"assets/images/mimi8.gif": "6646a3dec849498313a17c7de5d2ea5c",
"assets/images/mimi9.gif": "b5ec7c32285b24c09eca4646a4511518",
"assets/images/missing.png": "7725ae5506fdf4b6af9bd9dd8ed178bb",
"assets/images/pdf.png": "0dfe1271c4feee62a37d4f324ddee500",
"assets/images/profile.png": "6d5f8b45fa283b1c6410b54e15cb2482",
"assets/images/utsav1.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/images/whatsappbg.jpg": "3c025ba0e7ab33fcb015de084b7c204d",
"assets/images/whatsappbg.png": "c92bbf63b7915e7bfee934b4224672fe",
"assets/NOTICES": "8a0e37b625c10468f3faaf929163cc8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "22daf88558b6e438210d091f812d17bf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e2b7c1b325db154dd4130c75dee98bd8",
"/": "e2b7c1b325db154dd4130c75dee98bd8",
"main.dart.js": "22ce3c5b90fca9fc3d6e475d90371249",
"manifest.json": "8fde876539cd3a2a79e2a3400585ca29",
"myjs.js": "f8350d24e89d424a6e109384accf75f3",
"version.json": "20837a6bedbf395c63167ef8450eefc6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
