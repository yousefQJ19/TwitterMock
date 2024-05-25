
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAev73Izt7-w2rwrrjHDGV3t-aHttikWno",
    authDomain: "twitter-clone2-9cb3b.firebaseapp.com",
    projectId: "twitter-clone2-9cb3b",
    storageBucket: "twitter-clone2-9cb3b.appspot.com",
    messagingSenderId: "414970048696",
    appId: "1:414970048696:web:7c9753e39aae32f623444d",
    measurementId: "G-L60W4PWVQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const fireStore= getFirestore(app)