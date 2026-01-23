// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI-m9xLT4sOV9dANXBFCPCkGdIGareEMo",
  authDomain: "blogapp-34d9c.firebaseapp.com",
  projectId: "blogapp-34d9c",
  storageBucket: "blogapp-34d9c.firebasestorage.app",
  messagingSenderId: "887119298377",
  appId: "1:887119298377:web:ab43f2f494d9a898c8a498",
  measurementId: "G-VY642Q9V50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);