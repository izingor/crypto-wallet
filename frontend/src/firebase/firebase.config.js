import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";

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
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
// export const FbProvider = new FacebookAuthProvider();
export const auth = getAuth(app);
