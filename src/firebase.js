import firebase from "firebase/app";
import "firebase/auth";

 export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyBrgtJWxXU-iuL452AZiQzOMsd5XPVk2Yc",
    authDomain: "my-messenger-f27b5.firebaseapp.com",
    projectId: "my-messenger-f27b5",
    storageBucket: "my-messenger-f27b5.appspot.com",
    messagingSenderId: "862873735105",
    appId: "1:862873735105:web:f27960e85cd53feaa6a940"
  }).auth();