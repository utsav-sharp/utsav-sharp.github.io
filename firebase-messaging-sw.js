importScripts("https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.15.1/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js");



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
  firebase.analytics();
const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);


});
messaging.setBackgroundMessageHandler(function (payload) {
console.log('[firebase-messaging-sw.js] Received background message ', payload);
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
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});

