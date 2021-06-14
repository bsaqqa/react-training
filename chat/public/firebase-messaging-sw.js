// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyB9ojdtZPOdBkvws66__l-LE0-kZN7Cwig",
    authDomain: "react-training-3137e.firebaseapp.com",
    projectId: "react-training-3137e",
    storageBucket: "react-training-3137e.appspot.com",
    messagingSenderId: "630322911286",
    appId: "1:630322911286:web:f95a3d8013fa2b6d43e097",
    // measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


