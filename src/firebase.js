import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJRT_xCG9VHzVzpMTmw9kl_Uv732Y2NxU",
    authDomain: "bt3103-week-6-864a4.firebaseapp.com",
    projectId: "bt3103-week-6-864a4",
    storageBucket: "bt3103-week-6-864a4.appspot.com",
    messagingSenderId: "224978506417",
    appId: "1:224978506417:web:85516d7048390d2c114890",
    measurementId: "G-22M9Y6LFH2"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;