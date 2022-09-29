// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy4aP1Io1YI8Vu0wQFhcVHAMEUaZhMFUQ",
  authDomain: "react-comision38080.firebaseapp.com",
  projectId: "react-comision38080",
  storageBucket: "react-comision38080.appspot.com",
  messagingSenderId: "952233643921",
  appId: "1:952233643921:web:b2e5dab7e727a10ef35430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);