import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnUo2NBUKOzGtwg3cOWSL0LOANLccRcSA",
  authDomain: "yutube-clone-clone.firebaseapp.com",
  databaseURL: "https://yutube-clone-clone.firebaseio.com",
  projectId: "yutube-clone-clone",
  storageBucket: "yutube-clone-clone.appspot.com",
  messagingSenderId: "167274871462",
  appId: "1:167274871462:web:d5c1ebdb99419f84811267",
  measurementId: "G-NQYJC69N8H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
