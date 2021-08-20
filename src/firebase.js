import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClb47hzHGAYS--U8LdM8f_Zi5mCnjy8nQ",
  authDomain: "social-networking-app-fb88d.firebaseapp.com",
  projectId: "social-networking-app-fb88d",
  storageBucket: "social-networking-app-fb88d.appspot.com",
  messagingSenderId: "702899011295",
  appId: "1:702899011295:web:10b144b415b61b0187f36a",
  measurementId: "G-LKD5V11RKF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
