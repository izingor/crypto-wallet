import { db, auth, googleProvider, facebookProvider, githubProvider } from '../firebase/firebase.config';
import { signInWithPopup, signOut, onAuthStateChanged, linkWithPopup } from 'firebase/auth';
import { doc, updateDoc, setDoc, getDoc, getDocs, collection } from '@firebase/firestore';

export const firebaseService = {
    loginWithGoogle,
    setDocument,
    updateUserWallet,
    logout,
    checkCurrUser,
    getCurrUserData,
    loginWithFacebook,
    loginWithGithub,
    getUsers
};


async function loginWithGithub() {
    console.log('logging with gitHub');
    try {
        const user = await linkWithPopup(auth.currentUser, githubProvider);
        console.log(user);
        return user;
    } catch (err) {
        console.log('Had an error while logging in with github', err);
    }
}

async function loginWithGoogle() {
    console.log('logging in');
    try {
        const user = await signInWithPopup(auth, googleProvider);
        return user;
    } catch (err) {
        console.log('Had an error while logging in', err);
    }
}

async function loginWithFacebook() {
    try {
        const user = await signInWithPopup(auth, facebookProvider);
        return user;
    } catch (err) {
        console.log('Had an error while signing in with facebook', err);
    }

}

async function getUsers() {
    const users = [];
    try {
        const data = await getDocs(collection(db, 'users'));
        data.forEach(doc => { users.push(doc.data()); });
        return users;
    } catch (err) {
        console.log('Had an error while getting users for the leaderboard', err);
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
        return res.data();
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




