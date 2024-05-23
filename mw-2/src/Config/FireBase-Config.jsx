
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCarWDYNjlKZNbUbl1tTxTvQmTzzm_Cdfk",
    authDomain: "twitter-clone-3797c.firebaseapp.com",
    projectId: "twitter-clone-3797c",
    storageBucket: "twitter-clone-3797c.appspot.com",
    messagingSenderId: "979631406179",
    appId: "1:979631406179:web:9780023d94ca5a76128c56",
    measurementId: "G-TNDRRRVFW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const fireStore= getFirestore(app)