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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const authenticateUser = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log(checkIfUserHasAccess(result.user.email));
  }).catch(function(error) {
    console.log(error);
  });
};

const checkIfUserHasAccess = (userEmail) => {
  return userEmail.includes('@springboard.com');
};
