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
  apiKey: "AIzaSyDSsZfiiGDJ-vE0hdgq0h55_C4dKGGXCz8",
  authDomain: "bracketsapp.firebaseapp.com",
  projectId: "bracketsapp",
  storageBucket: "bracketsapp.firebasestorage.app",
  messagingSenderId: "290907020724",
  appId: "1:290907020724:web:a0ffa8e2df1256350326e1",
  measurementId: "G-490XYMFKHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);