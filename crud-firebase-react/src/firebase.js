import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-199xTr67KNaFg9tdZbUG8qEImWCJ5rw",
    authDomain: "fir-crud-ef275.firebaseapp.com",
    databaseURL: "https://fir-crud-ef275.firebaseio.com",
    projectId: "fir-crud-ef275",
    storageBucket: "fir-crud-ef275.appspot.com",
    messagingSenderId: "451870006202",
    appId: "1:451870006202:web:f526fccfadfca6c5f39b83",
    measurementId: "G-VPYRC9R3RF"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();