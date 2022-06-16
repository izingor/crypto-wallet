import { db, auth, provider } from '../firebase/firebase.config';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getDoc, collection, query, where, getDocs, doc, updateDoc, setDoc } from '@firebase/firestore';



async function loginWithGoogle() {
    try {
        const user = await signInWithPopup(auth, provider);
        return user;
    } catch (err) {
        console.log('Had an error while logging in', err);
    }
}

async function setDocument(collection, id, doc) {
    try {
        const setDoc = await setDoc(doc(db, collection, id), doc);
        return setDoc;

    } catch (err) {
        console.log('Had an error while setting the document', err);
    }
}


export const firebaseService = {
    loginWithGoogle,
    setDocument,
};


