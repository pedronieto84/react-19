import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxfdjAqbcw7rZ-2uXEilAB9r-T1ghZjbY",
  authDomain: "curso-sincrotron.firebaseapp.com",
  projectId: "curso-sincrotron",
  storageBucket: "curso-sincrotron.firebasestorage.app",
  messagingSenderId: "778999318384",
  appId: "1:778999318384:web:3a5902baa5cc390e62f1b5",
  measurementId: "G-MBHC62KWWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };



import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);
export { db };
