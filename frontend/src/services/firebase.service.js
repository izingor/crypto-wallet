import { db, auth, provider } from '../firebase/firebase.config';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc, setDoc, getDoc } from '@firebase/firestore';



async function loginWithGoogle() {
    try {
        const user = await signInWithPopup(auth, provider);
        return user;
    } catch (err) {
        console.log('Had an error while logging in', err);
    }
}

async function setDocument(collection, id, document) {
    try {
        const setDocument = await setDoc(doc(db, collection, id), document);
        return setDocument;

    } catch (err) {
        console.log('Had an error while setting the document', err);
    }
}

async function getCurrUserData(uid) {
    try {
        const res = await getDoc(doc(db, 'users', uid));
        return res.data()
    } catch (err) {
        console.log('Had and error while getting the user!', err.message);
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

async function checkCurrUser() {
    let currUser;
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            currUser = user;
        }
    });
    return currUser;
}


export const firebaseService = {
    loginWithGoogle,
    setDocument,
    updateUserWallet,
    logout,
    checkCurrUser,
    getCurrUserData
};


