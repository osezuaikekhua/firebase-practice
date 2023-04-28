// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQzGP8QT_FVC8CdY82fQUwnnTk1Gm6b1s",
  authDomain: "fir-practice-83dff.firebaseapp.com",
  projectId: "fir-practice-83dff",
  storageBucket: "fir-practice-83dff.appspot.com",
  messagingSenderId: "843734183961",
  appId: "1:843734183961:web:3b4e2a150c4a981b1bfa88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();