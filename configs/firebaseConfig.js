// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
  authDomain: "moto-hub-89bbb.firebaseapp.com",
  projectId: "moto-hub-89bbb",
  storageBucket: "moto-hub-89bbb.firebasestorage.app",
  messagingSenderId: "32410184242",
  appId: "1:32410184242:web:64b30de78fbf6ad92a6a2b",
  measurementId: "G-SHB2J5E4ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);