import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCcYie9AmOicbKfqXZkQ76ABueIY8pH9-Q",
  authDomain: "linkedin-clone-13eb1.firebaseapp.com",
  projectId: "linkedin-clone-13eb1",
  storageBucket: "linkedin-clone-13eb1.appspot.com",
  messagingSenderId: "301670854586",
  appId: "1:301670854586:web:5b51f400ec1700e4eff783",
  measurementId: "G-L6GNNH5EPK",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const authorization = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { authorization, provider, storage };
export default db;
//
