var firebaseConfig = {
 apiKey: "AIzaSyBKfsEDGiXmo9QdVNEzJw4FMu2L2uAzOoY",
      authDomain: "flutterchat-57297.firebaseapp.com",
      databaseURL: "https://flutterchat-57297.firebaseio.com",
      projectId: "flutterchat-57297",
      storageBucket: "flutterchat-57297.appspot.com",
      messagingSenderId: "979005209166",
      appId: "1:979005209166:web:24eb3569a9b672c9e9a11f",
      measurementId: "G-57NFYLVN72"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messaging = firebase.messaging()

messaging.usePublicVapidKey('BPHQ6HgWkO-khxdZCy1EZVDsCe1BQei5cb8J9Y_Y5PzUAsibU_OvwJzt270JwIZrVldW6CI5tZOehOzK1MsU7Mw');

messaging.getToken().then((currentToken) => {
    console.log(currentToken)
})