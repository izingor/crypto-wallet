import { asyncStorageService } from './async.storage.service';
import { sessionService } from './session.service';
import { auth, provider } from '../firebase/firebase.config';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getDoc, collection, query, where, getDocs, doc, updateDoc, setDoc } from '@firebase/firestore';
import { db } from '../firebase/firebase.config';
import { firebaseService } from './firebase.service';

const USER_DB = 'usersDB';
const SESSION_DB = 'loggedDB';

export const userService = {
    getUser,
    getEmptyUser,
    saveNewUser,
    login,
    logout,
    updateUser,
    purchaseCoin
};

const usersRef = collection(db, 'users');

async function getUser() {
    const loggedUser = await sessionService.loadFromStorage(SESSION_DB);
    return loggedUser ? loggedUser : null;

};

function getEmptyUser() {
    const user = {
        name: null,
        password: null,
        USD: 1000,
        moves: []
    };
    return user;
}

function saveNewUser({ name, password, email }) {
    const newUser = {
        name,
        password,
        email,
        usdBalance: 1000,
        coins: [],
        transactions: []
    };
    const savedUser = asyncStorageService.post(USER_DB, newUser);
    return savedUser;
}

async function login() {
    const res = await firebaseService.loginWithGoogle();
    const { uid, email, displayName } = res.user;

    const userData = await getDoc(doc(db, 'users', uid));
    return _processUser(userData.data(), { uid, email, displayName });
    // const user = userData.data();
    // console.log(userData.data())
    // if (!userData.data()) {
    //     const newUser = {
    //         uid,
    //         email,
    //         displayName,
    //         usdBalance: 1000,
    //         coins: [],
    //         transactions: []
    //     };
    //     // const dbRes = await setDoc(doc(db, 'users', uid), newUser);
    //     await firebaseService.setDocument('users', uid, newUser);
    //     // console.log(dbRes);
    //     return sessionService.saveToStorage(SESSION_DB, newUser);
    // } else {
    //     return sessionService.saveToStorage(SESSION_DB, userData.data());
    // }
}



async function purchaseCoin(purchaseData) {
    const { totalCost, symbol, price, uuid, color } = purchaseData;
    const user = await getUser();
    if (!user) {
        return 'NO_USER';
    } else {
        if (user.usdBalance < totalCost.usdAmount) {
            return 'NO_FUNDS';
        } else {
            const coinAsset = user.coins.find(asset => asset.uuid === purchaseData.uuid);
            if (coinAsset) {
                coinAsset.amount += totalCost.coinAmount;
            } else {
                const coin = {
                    color,
                    uuid,
                    symbol,
                    amount: totalCost.coinAmount,
                };
                user.coins.push(coin);
            }
        }
        const transaction = {
            usdAmount: totalCost.usdAmount,
            coinAmount: totalCost.coinAmount,
            coinValue: price,
            symbol,
            timestamp: Date.now(),
        };

        user.transactions.unshift(transaction);
        user.usdBalance = user.usdBalance - totalCost.usdAmount;
        try {
            const updatedUser = await updateUser(user);
            return updatedUser;
        } catch (err) {
            console.log('had an error while getting your data', err.message);
        }
    }

}

async function _processUser(user, { uid, email, displayName }) {

    if (!user) {
        const newUser = {
            uid,
            email,
            displayName,
            usdBalance: 1000,
            coins: [],
            transactions: []
        };
        // const dbRes = await setDoc(doc(db, 'users', uid), newUser);
        await firebaseService.setDocument('users', uid, newUser);
        return sessionService.saveToStorage(SESSION_DB, newUser);
        // console.log(dbRes);
    } else {
        return sessionService.saveToStorage(SESSION_DB, user);
    }
}

async function updateUser(user) {
    await firebaseService.updateUserWallet('users', user.uid, user);
    return sessionService.saveToStorage(SESSION_DB, user);
}

async function logout() {
    await firebaseService.logout();
    return sessionService.clearStorage();
}
