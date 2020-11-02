import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL-7pUpetc1QgvOo0nlPs8wdIp9Wiu5Y4",
  authDomain: "secret-santa-assigner.firebaseapp.com",
  databaseURL: "https://secret-santa-assigner.firebaseio.com",
  projectId: "secret-santa-assigner",
  storageBucket: "secret-santa-assigner.appspot.com",
  messagingSenderId: "873288072798",
  appId: "1:873288072798:web:04b60d8e043bc1dd89fecf"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export const onAuthStateChange = (callback) => {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callback({loggedIn: true});
    } else {
      callback({loggedIn: false});
    }
  });
};

export const loginUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const logoutUser = () => {
  return firebase.auth().signOut();
};
