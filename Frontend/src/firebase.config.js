// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFWq0w_f1zmVnpt9K8kGZXvjjwwPIcfOE",
  authDomain: "millennial-clothing.firebaseapp.com",
  projectId: "millennial-clothing",
  storageBucket: "millennial-clothing.firebasestorage.app",
  messagingSenderId: "931351311273",
  appId: "1:931351311273:web:db457b3f7f521772e70ab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;