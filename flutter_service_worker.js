'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "290550dd27bcbf31ad8306abd7c52d90",
".git/config": "00608fae57e6d2876ba80b43e629f0f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8e1a9c3710328d7813005aba6e0ad27d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c84c3c6dfc49c23f9087ef849ac613c6",
".git/logs/refs/heads/master": "c84c3c6dfc49c23f9087ef849ac613c6",
".git/logs/refs/remotes/origin/master": "e7a673f8cd17e911134b2623711ac169",
".git/objects/01/468a1cd13beaea9effcbf3ed35e290bb424597": "fd89ac7faabe4e849b5170d89740f0a8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/79b79e1a28deeb3d34a4343ea4c6e1a7ab1ae1": "3dab95425aa9329c0730ca760828dbd7",
".git/objects/0e/6ddb771e71c92c8b9b16c29d56bdf670242b56": "0619f6bb116c95e2fa0a8e888e58af0d",
".git/objects/0f/567988745f42ce374458de493c85b0a45e5120": "d9c33f194bf572454baf96bab991ccd2",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/8095ceae85f2de443f5fd84971da8c623b77ce": "60e2933ecf7fa1055aecd998093d9c10",
".git/objects/34/71ba8607f3dd0703bb5a71b0a9c4f79b5359ff": "a8e5994ee28307c8046a3ccbd1857f1d",
".git/objects/37/16bfe1998be6a3c532f3858f7b7b3e15b17f47": "b6447f310b0de23826a6b9384e2f72e6",
".git/objects/37/aa2e6c8c37878e4b36c4c4be88685d381dd811": "eb886672919538753513988e5111f4c5",
".git/objects/3b/8d160688ce426a13fdecaa2b0bf13f4616a1c0": "5c5cbff1dd1c6cad9d21bc4026cbbbad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/8fe6e479ace8d85ab7981c1e10eb83f4670862": "3ad79c4c502d9a22490e32d628765201",
".git/objects/57/75be6fc14f6d8383a4439ae8130aaf33bccac5": "dedc2ea00cab27455a0c837bc67b4834",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/61/03163671929fdf7c52f07baea15f2f5735f70c": "f94a98460f680d11915d32fac780316f",
".git/objects/67/8c077c3d8d8cd453ebfd5531bea9f9415be501": "61f0669e40fa10a4fdba93aa8f770c71",
".git/objects/6f/9d605d1e94626726c1f5b9ad7a9f3dc87145c4": "fea6d7a12dde75c26105127e06a20811",
".git/objects/71/530822aea77162b6fca84323a2a815bd791f9f": "f5fc1045172496bad541ec4eceeccd0a",
".git/objects/73/6bee223eb19c021f38589f6d95c6b55de51672": "b5cc561d286e67361e04ffe456fca1ae",
".git/objects/77/61f9c9069f1900ceb10ec123ca8fde4ebb463f": "02400303e2a308d1d8cc3701d1dcca91",
".git/objects/78/9c02cc4f2bcb74a68f933f954e80aed778263e": "1744197ca1e46fdb0c616a8955285075",
".git/objects/82/759cae174a3ea6af31131aa65df12e1edaca60": "79d41c927abf090a19875eeecc6789d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b0c91d367b6ade94c1fd51d8f7a0cf227be19c": "d603c031601361fb3c47dbe0d574c419",
".git/objects/8d/ad0d2fbee9925144a6b73228fed4191ef9f0dd": "8cd0b812d1299f9ab763c75bf48432d0",
".git/objects/a5/9dab942367912579c726f3757a2a8e08809b1e": "bbfb2817b286517cf90e8c7187b70867",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b1/384e8ff3a32806e628bc1553ac7028f3245ca0": "77d0f7b4d307a7157dfcd2482fdb6a6d",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c8/25f41e9a33f39179fa74a0aa0377f653109f5f": "78f0eb33fa945693214f87ac32c0494c",
".git/objects/ce/bc61b415d5252043d5ea389183e2a329d5a3e9": "f6c32d3f384352abb1feb8ef69634795",
".git/objects/cf/dacbe70b82db13e595ace80f7681a59574fa15": "79db8807e6d32938bad505489d1018ef",
".git/objects/dd/9287500450a1353fd45d64ff0b067e4e830fda": "4634521249b32013897771376a46ccbb",
".git/objects/e1/6284e8d19226771db87e7ce00aa2033f7c5c4e": "1d4c3084eb302c47af6a67dbfe22a67e",
".git/objects/ea/c2c79ad78f983f04a8c33c205afb128829173c": "748a0a829f18ace16942ac2230610ef5",
".git/objects/ef/4e337cc298c6cfbb92203618e7b4ea8e40b869": "18fe521a2996c2558dcf40f91f844c77",
".git/objects/f1/0843ac34234354789083078e6ca4e32896ced2": "f8d8ca1eba1db168fe46cd5b42576b63",
".git/objects/f1/cfde50f3bcd8aa731e9cab5e810e5002949faa": "918895afc38e56021c2933f607f646ea",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/4d57b824851bbc328b446fd6417c9eb8af8ae9": "ca84e38873d0c30d9f94fe0706babc80",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/master": "fd694c8e9475a7d14e5e9a1118867604",
".git/refs/remotes/origin/master": "fd694c8e9475a7d14e5e9a1118867604",
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
"firebase-messaging-sw.js": "938b6ae3ff8f220336aeed204550c4fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "09911137118d653bc716d58263305f84",
"/": "09911137118d653bc716d58263305f84",
"main.dart.js": "d16e4a706190404d4b797f877d736f91",
"manifest.json": "8fde876539cd3a2a79e2a3400585ca29",
"myjs.js": "79cf8f18d61ebf645a1a5836474a0704",
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
