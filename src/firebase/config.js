import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAlmmP9nBQwmXe9tuASuEkUchkSNRXOul0",
    authDomain: "diplomski-galerija.firebaseapp.com",
    projectId: "diplomski-galerija",
    storageBucket: "diplomski-galerija.appspot.com",
    messagingSenderId: "436153611760",
    appId: "1:436153611760:web:d9fadd3bd0b2c357e9d935"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const galerijaStorage = firebase.storage();
  const galerijaFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {galerijaStorage, galerijaFirestore, timestamp}