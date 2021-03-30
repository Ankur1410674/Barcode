import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBQo6y4L5WiNt9n52ZiqvzE4YxBDmdYTRE",
    authDomain: "wily-5c56f.firebaseapp.com",
    databaseURL: "https://wily-5c56f-default-rtdb.firebaseio.com",
    projectId: "wily-5c56f",
    storageBucket: "wily-5c56f.appspot.com",
    messagingSenderId: "464911430721",
    appId: "1:464911430721:web:c8dc123fb7fa1d881d02c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();