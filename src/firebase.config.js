// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCwB6yNFYprNFDRRCkbU7LvCyaeEkUMH9w",
    authDomain: "wheres-waldo-5b183.firebaseapp.com",
    projectId: "wheres-waldo-5b183",
    storageBucket: "wheres-waldo-5b183.appspot.com",
    messagingSenderId: "238825908225",
    appId: "1:238825908225:web:7518cacdf97c7058b23800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db
