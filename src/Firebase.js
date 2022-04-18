import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDk_aetxejJEQzAzxr1dkOtdADQ-z_bfTM",
    authDomain: "zeon-store-910ae.firebaseapp.com",
    projectId: "zeon-store-910ae",
    storageBucket: "zeon-store-910ae.appspot.com",
    messagingSenderId: "645813969220",
    appId: "1:645813969220:web:7e0dae1bcec3cdb41b3711"
});

export const auth = getAuth()
export const firestore = getFirestore(firebaseApp)