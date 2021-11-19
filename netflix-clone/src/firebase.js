// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBUBNkqcAfdpI3wA4E9zfTigI6AHcrMuNk",
  authDomain: "netflix-clone-f669d.firebaseapp.com",
  projectId: "netflix-clone-f669d",
  storageBucket: "netflix-clone-f669d.appspot.com",
  messagingSenderId: "197341494806",
  appId: "1:197341494806:web:1a2579d0ca4988a7ba3f37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

