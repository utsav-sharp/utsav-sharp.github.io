importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyBKfsEDGiXmo9QdVNEzJw4FMu2L2uAzOoY",
      authDomain: "flutterchat-57297.firebaseapp.com",
      databaseURL: "https://flutterchat-57297.firebaseio.com",
      projectId: "flutterchat-57297",
      storageBucket: "flutterchat-57297.appspot.com",
      messagingSenderId: "979005209166",
      appId: "1:979005209166:web:24eb3569a9b672c9e9a11f",
      measurementId: "G-57NFYLVN72"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
console.log('setBackgroundMessageHandler received: ', payload)
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
           // return registration.showNotification("New Message");
             return self.registration.showNotification(payload.data.title, {
               body: payload.data.body,
               icon: payload.data.icon,
               tag: payload.data.tag,
               data: payload.data.link
             });
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});