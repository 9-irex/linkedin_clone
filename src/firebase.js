import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcYie9AmOicbKfqXZkQ76ABueIY8pH9-Q",
  authDomain: "linkedin-clone-13eb1.firebaseapp.com",
  projectId: "linkedin-clone-13eb1",
  storageBucket: "linkedin-clone-13eb1.appspot.com",
  messagingSenderId: "301670854586",
  appId: "1:301670854586:web:5b51f400ec1700e4eff783",
  measurementId: "G-L6GNNH5EPK",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = app.storage();

export { auth, provider, storage };
export default db;
