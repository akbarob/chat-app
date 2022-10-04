// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZzN3Q3frEz9JNuocDJkGm7_sywrB_9kE",
  authDomain: "chat-app-efacc.firebaseapp.com",
  projectId: "chat-app-efacc",
  storageBucket: "chat-app-efacc.appspot.com",
  messagingSenderId: "913838337895",
  appId: "1:913838337895:web:32299d633679d2149549c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
