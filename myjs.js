function shunno_push_api() {
  if (!Notification) {
    // alert('Hello World!');
return;
}
  if (Notification.permission !== "granted") {​​​​​​​​
    Notification.requestPermission();
  }
  var notification = new Notification('', {​​​​​​​​
    icon: 'https://preview.keenthemes.com/metronic/angular/demo3/assets/media/logos/logo-letter-2.png',
body: "Hello World!",
});
notification.onclick = function() {
    window.open("https://codepen.io");
};
}
