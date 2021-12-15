import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBNw61O5t0pYglJuVMToLq2r2-WeoB2tq4",
    authDomain: "gamingpage.firebaseapp.com",
    databaseURL: "https://gamingpage.firebaseio.com",
    projectId: "gamingpage",
    storageBucket: "gamingpage.appspot.com",
    messagingSenderId: "399170187946",
    appId: "1:399170187946:web:3abc321560310e970216d3"
  }


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export {db}