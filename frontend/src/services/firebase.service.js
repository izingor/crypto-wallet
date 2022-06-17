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

async function updateUserWallet(collection, id, data) {
    try {
        await updateDoc(doc(db, collection, id),
            {
                coins: data.coins,
                transactions: data.transactions,
                usdBalance: data.usdBalance,
            });
    } catch (err) {
        console.log('had an issue updating the user', err.message);

    }
}

async function logout() {
    await signOut(auth);
}


export const firebaseService = {
    loginWithGoogle,
    setDocument,
    updateUserWallet,
    logout
};


