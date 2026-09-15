// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_apiKey,
  authDomain: VITE_FIREBASE_authDomain,
  projectId: VITE_FIREBASE_projectId,
  storageBucket: VITE_FIREBASE_storageBucket,
  messagingSenderId:VITE_FIREBASE_messagingSenderId,
  appId: VITE_FIREBASE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);