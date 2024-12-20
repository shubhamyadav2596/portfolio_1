// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUN-4czpQHtQt0g3B3URhbaEt_J1O7vI",
  authDomain: "portfolio-f0d32.firebaseapp.com",
  projectId: "portfolio-f0d32",
  storageBucket: "portfolio-f0d32.firebasestorage.app",
  messagingSenderId: "422819013705",
  appId: "1:422819013705:web:b4be65316fc7895c6ccb98",
  measurementId: "G-G7VFXM3EC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

