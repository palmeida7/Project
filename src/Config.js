import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkB24_fNXwbUZlgo6dY6ZS43WSDivlWlo",
  authDomain: "tracker-d3957.firebaseapp.com",
  databaseURL: "https://tracker-d3957.firebaseio.com",
  projectId: "tracker-d3957",
  storageBucket: "tracker-d3957.appspot.com",
  messagingSenderId: "177454063165",
  appId: "1:177454063165:web:edddc99ce2043b199e5454",
};

const fb = firebase.initializeApp(firebaseConfig);
export default fb;
export const auth = fb.auth();
export const db = fb.firestore();
