// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "crypsim-e6cc8.firebaseapp.com",
    projectId: "crypsim-e6cc8",
    storageBucket: "crypsim-e6cc8.appspot.com",
    messagingSenderId: "125487645276",
    appId: "1:125487645276:web:1ce69789ef0e6671b21c99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
