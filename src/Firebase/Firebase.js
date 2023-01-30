import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyD7DTOaMuDOFs2dC0HI76xUJXHhbEjbc-w",
  authDomain: "chat-byron.firebaseapp.com",
  projectId: "chat-byron",
  storageBucket: "chat-byron.appspot.com",
  messagingSenderId: "258047261037",
  appId: "1:258047261037:web:9f864b29ed9ab5ae490264",
  measurementId: "G-MBTRPCDDQ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };