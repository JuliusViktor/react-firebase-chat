import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"



const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-54263.firebaseapp.com",
    projectId: "reactchat-54263",
    storageBucket: "reactchat-54263.firebasestorage.app",
    messagingSenderId: "475618483825",
    appId: "1:475618483825:web:7d741b82fcd0d2b50445d0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

