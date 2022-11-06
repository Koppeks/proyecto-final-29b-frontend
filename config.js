import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDY7_J-L_d24oc28DS_g7yR6XLAWI2I0vw",
  authDomain: "test-48e4b.firebaseapp.com",
  projectId: "test-48e4b",
  storageBucket: "test-48e4b.appspot.com",
  messagingSenderId: "941188550023",
  appId: "1:941188550023:web:e5f680bd346956b1205722",
  measurementId: "G-X09Y35FQYP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
