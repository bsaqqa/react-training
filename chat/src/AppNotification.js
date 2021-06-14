import React, { useState, useEffect } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function App() {
  console.log(process.env.REACT_APP_Variable,process.env.ahmed);
  useEffect(function(){
    var firebaseConfig = {
      apiKey: "AIzaSyB9ojdtZPOdBkvws66__l-LE0-kZN7Cwig",
      authDomain: "react-training-3137e.firebaseapp.com",
      projectId: "react-training-3137e",
      storageBucket: "react-training-3137e.appspot.com",
      messagingSenderId: "630322911286",
      appId: "1:630322911286:web:f95a3d8013fa2b6d43e097"
    };
    // Initialize Firebase
    // eslint-disable-next-line
    firebase.initializeApp(firebaseConfig);
    // eslint-disable-next-line
    const messaging = firebase.messaging();
    const vapidKey= "BFb-RSSYMG0im3L0aw4NzcgfvzKBMed1yQu3C-MAP0UlS7gp-KUB02rLvsANo1UQhHDg5cn5tWYK2S3QAZ0jsBQ";
    // Add the public key generated from the console here.
    messaging.getToken({}); 
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging.getToken({ vapidKey }).then((currentToken) => {
      if (currentToken) {
        console.log(currentToken);
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });

    messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      // ...
      NotificationManager.info(payload.notification.body, payload.notification.title);

    });
  },[]);
    
  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto mt-5">
      <h1>Notifications</h1>
      <NotificationContainer/>
     
    </div>
  );
}

export default App;