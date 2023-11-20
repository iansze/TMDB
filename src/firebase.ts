// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const API_KEY = import.meta.env.VITE_FIREBASE_APIKEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "moiv-4c40c.firebaseapp.com",
  projectId: "moiv-4c40c",
  storageBucket: "moiv-4c40c.appspot.com",
  messagingSenderId: "650575820554",
  appId: "1:650575820554:web:7e951f8e3a39c59655acf3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
