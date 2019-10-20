import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA_oLfRBDIOsaXfjebCC0axN4CPkN-M1DY",
  authDomain: "perfectplanner-82d07.firebaseapp.com",
  databaseURL: "https://perfectplanner-82d07.firebaseio.com",
  projectId: "perfectplanner-82d07",
  storageBucket: "perfectplanner-82d07.appspot.com",
  messagingSenderId: "44845674118",
  appId: "1:44845674118:web:caca606c56b99699ed2b07",
  measurementId: "G-CWNN2GHK7H"
});

export { firebaseConfig as firebase };