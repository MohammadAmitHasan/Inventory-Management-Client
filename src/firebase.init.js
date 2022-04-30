// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyM900tAE6yrO9tAz2DeRUcafHvGJAMkc",
    authDomain: "nasah-inventory-management.firebaseapp.com",
    projectId: "nasah-inventory-management",
    storageBucket: "nasah-inventory-management.appspot.com",
    messagingSenderId: "1099247630651",
    appId: "1:1099247630651:web:b8c9391518adb621d15f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;