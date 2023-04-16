// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiFyAsNR7jaVtlA7VlS9x58XMQJ9YQNdU",
    authDomain: "react-exam-b3b9a.firebaseapp.com",
    projectId: "react-exam-b3b9a",
    storageBucket: "react-exam-b3b9a.appspot.com",
    messagingSenderId: "317003460153",
    appId: "1:317003460153:web:58a82cb134580491bfa7e8"
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);