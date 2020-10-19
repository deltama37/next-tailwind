import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuvkCnRjdF8d2ULh4mLC4MWQoWJqkBe3c",
  authDomain: "next-template-f29e4.firebaseapp.com",
  databaseURL: "https://next-template-f29e4.firebaseio.com",
  projectId: "next-template-f29e4",
  storageBucket: "next-template-f29e4.appspot.com",
  messagingSenderId: "669391183112",
  appId: "1:669391183112:web:894107f06de383a270e0bd",
  measurementId: "G-KG4QJVD88Z",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const db = firebase.firestore();
export const storage = firebase.storage();
