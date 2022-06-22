import { sessionService } from './session.service';
import { getDoc, doc } from '@firebase/firestore';
import { db } from '../firebase/firebase.config';
import { firebaseService } from './firebase.service';

const SESSION_DB = 'loggedDB';

export const userService = {
    getUser,
    logout,
    updateUser,
    purchaseCoin,
    sellCoins,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub
};

async function getUser() {
    const loggedUser = await sessionService.loadFromStorage(SESSION_DB);
    return loggedUser ? loggedUser : null;

};

async function loginWithGithub() {
    const res = await firebaseService.loginWithGithub();
    console.log(res);
    return res.user
}

async function loginWithFacebook() {
    const res = await firebaseService.loginWithFacebook();
    console.log(res);
}


async function loginWithGoogle() {
    const res = await firebaseService.loginWithGoogle();
    const { uid, email, displayName } = res.user;
    const userData = await firebaseService.getCurrUserData(uid);

    return _processUser(userData, { uid, email, displayName });
}

async function purchaseCoin(purchaseData) {
    const { totalCost, symbol, price, uuid, color, iconUrl } = purchaseData;
    const user = await getUser();
    if (!user) {
        return Promise.reject('NO_USER');
    } else {
        if (user.usdBalance < totalCost.usdAmount) {
            return Promise.reject('NO_FUNDS');
        } else {
            const coinAsset = user.coins.find(asset => asset.uuid === purchaseData.uuid);
            if (coinAsset) {
                coinAsset.amount += totalCost.coinAmount;
            } else {
                const coin = {
                    uuid,
                    iconUrl,
                    color,
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

async function sellCoins({ uid, amount, symbol, sellValue }) {
    try {
        const loggedUser = await firebaseService.checkCurrUser();
        if (loggedUser.uid === uid && loggedUser.emailVerified) {
            const userData = await firebaseService.getCurrUserData(loggedUser.uid);
            const coinToUpdateIdx = userData.coins.findIndex(coin => coin.symbol === symbol);

            userData.usdBalance += sellValue;
            userData.coins[coinToUpdateIdx].amount -= amount;

            if (userData.coins[coinToUpdateIdx].amount === 0) {
                userData.coins.splice(coinToUpdateIdx, 1);
            }
            return updateUser(userData);
        } else {
            throw new Error('Had a problem getting your information');
        }
    } catch (err) {
        console.log(err);
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
        await firebaseService.setDocument('users', uid, newUser);
        return sessionService.saveToStorage(SESSION_DB, newUser);
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
