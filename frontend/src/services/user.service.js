import { asyncStorageService } from './async.storage.service';
import { sessionService } from './session.service';
import { auth, provider } from '../firebase/firebase.config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../firebase/firebase.config';

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

const userCollection = collection(db, 'users');


function getUser() {
    return Promise.resolve(sessionService.loadFromStorage(SESSION_DB));
}

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
    console.log('loggin in');
    const res = await signInWithPopup(auth, provider);
    // console.log(res);
    const { uid, email, displayName } = res.user;


    const newUser = {
        uid,
        email,
        displayName,
        usdBalance: 1000,
        coins: [],
        transactions: []
    };
    console.log(newUser);
    await addDoc(userCollection, newUser);
    // console.log(doc);
    // sessionService.saveToStorage(SESSION_DB, loggedUser);
    // return loggedUser;
    // if (res.user) {
    //     console.log(res.user);
    //     sessionService.saveToStorage(SESSION_DB, res.user.accessToken);
    // }
    // const storedUser = await asyncStorageService.get(USER_DB, user.email);
    // if (storedUser.password === user.password) {
    //     const { password, ...loggedUser } = storedUser;
    //     sessionService.saveToStorage(SESSION_DB, loggedUser);
    //     return loggedUser;
    // } else {
    //     console.log('no user');
    //     return false;
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

async function updateUser(user) {
    try {
        const { password } = await asyncStorageService.get(USER_DB, user.email);
        const updatedUser = await asyncStorageService.put(USER_DB, { ...user, password });
        return sessionService.saveToStorage(SESSION_DB, updatedUser);
    } catch (err) {
        console.log('had an issue updating the user', err.message);

    }

}

async function logout() {
    await signOut(auth);
    return sessionService.clearStorage();
}