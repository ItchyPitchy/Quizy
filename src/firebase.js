import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABzrcEy1JtvKtaORtXo1cRAlMp4cZO33Q",
  authDomain: "quizy-c6178.firebaseapp.com",
  databaseURL: "https://quizy-c6178.firebaseio.com",
  projectId: "quizy-c6178",
  storageBucket: "quizy-c6178.appspot.com",
  messagingSenderId: "108998361270",
  appId: "1:108998361270:web:6ac40783b182bfe2d72617"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;