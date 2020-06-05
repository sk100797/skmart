import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBNH9Aga5l-qUiMkM6OSlc5lyMjGGHlGOg",
  authDomain: "skmart-db.firebaseapp.com",
  databaseURL: "https://skmart-db.firebaseio.com",
  projectId: "skmart-db",
  storageBucket: "skmart-db.appspot.com",
  messagingSenderId: "1051058154998",
  appId: "1:1051058154998:web:0ed07eba49d701d99f2bd7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
