// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API ,
  authDomain: "blog-website-e2f57.firebaseapp.com",
  projectId: "blog-website-e2f57",
  storageBucket: "blog-website-e2f57.firebasestorage.app",
  messagingSenderId: "385569264751",
  appId: "1:385569264751:web:4009caa8165f665fc5e99a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); // xport storage
