import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "----------------------",
  authDomain: "----------------------",
  projectId: "----------------------",
  storageBucket: "----------------------",
  messagingSenderId: "----------------------",
  appId: "----------------------"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // getAuth nos permite obtener el servicio de autenticación de Firebase (mediante el método getAuth
const db = getFirestore(app); // getFirestore nos permite obtener el servicio de firestore de Firebase (mediante el método getFirestore


export { auth, db }