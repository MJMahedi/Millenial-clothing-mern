// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEvT7vJxkdgapTS6ESqwGOAb7TKiw8jng",
  authDomain: "millennial-clothing-auth.firebaseapp.com",
  projectId: "millennial-clothing-auth",
  storageBucket: "millennial-clothing-auth.appspot.com",
  messagingSenderId: "334082356378",
  appId: "1:334082356378:web:d214f057fe7a95d9055b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;