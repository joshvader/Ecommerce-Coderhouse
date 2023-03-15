// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7LEJkEHUgqzrzVtUqJgTWi7vYDeoP7hY",
  authDomain: "sneaker-app-aa044.firebaseapp.com",
  projectId: "sneaker-app-aa044",
  storageBucket: "sneaker-app-aa044.appspot.com",
  messagingSenderId: "156702972967",
  appId: "1:156702972967:web:5f94de5fe39444de984202"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase