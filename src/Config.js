import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGrejtN0wY643_VyUBMHFFdXcvnUff56s",
  authDomain: "react-app-b453a.firebaseapp.com",
  databaseURL: "https://react-app-b453a.firebaseio.com",
  projectId: "react-app-b453a",
  storageBucket: "react-app-b453a.appspot.com",
  messagingSenderId: "508391766850",
  appId: "1:508391766850:web:c6b988ef9e327f3acd26db",
  measurementId: "G-RLRFEE6N8P"
};

const fb = firebase.initializeApp(firebaseConfig);
export default fb;
export const auth = fb.auth();
export const db = fb.firestore();
