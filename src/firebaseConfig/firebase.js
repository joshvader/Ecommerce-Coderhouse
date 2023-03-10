// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB59w-PtG4gOhp0bi03vNwzInVEslUsOGo",
  authDomain: "sneakersproducts-3111b.firebaseapp.com",
  projectId: "sneakersproducts-3111b",
  storageBucket: "sneakersproducts-3111b.appspot.com",
  messagingSenderId: "450555292795",
  appId: "1:450555292795:web:16f78dba2cf0e82ef046de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)