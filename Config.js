import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAPkgKnGPZX-Rb3l6OskYHi_sNtymPVBs8",
    authDomain: "wireless-buzzer-2d33e.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-2d33e-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-2d33e",
    storageBucket: "wireless-buzzer-2d33e.appspot.com",
    messagingSenderId: "412898255859",
    appId: "1:412898255859:web:64eb5d3ca7c14fb8526886"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();