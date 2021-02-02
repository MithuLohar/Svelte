import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb8uU8aPsjdrZHlRYKWhrYFn9ZMsB8g0s",
  authDomain: "toki-toki-wnbocx.firebaseapp.com",
  databaseURL: "https://toki-toki-wnbocx.firebaseio.com",
  projectId: "toki-toki-wnbocx",
  storageBucket: "toki-toki-wnbocx.appspot.com",
  messagingSenderId: "643815405236",
  appId: "1:643815405236:web:b9ae9fd9f352f16d4049e1",
};
console.log(firebase);
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
