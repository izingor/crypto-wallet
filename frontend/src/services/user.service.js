import { sessionService } from './session.service';
import { coinService } from './coin.service';
import { firebaseService } from './firebase.service';

const SESSION_DB = 'loggedDB';

export const userService = {
    getUser,
    getMiniUsers,
    logout,
    _updateUser,
    purchaseCoin,
    sellCoins,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub,
};

async function getUser() {
    const userSession = sessionService.loadFromStorage(SESSION_DB);
    // try {
    //     const loggedUser = await firebaseService.checkCurrUser();
    //     console.log(loggedUser?.uid);

    // } catch (err) {
    //     console.log('Had an error while getting user session', err);
    // }
    return userSession ? userSession : null;

};

async function getMiniUsers() {
    const [users, { coins }] = await Promise.all([firebaseService.getUsers(), coinService.getCoins()]);
    let miniUsers = users.map(user => ({ uid: user.uid, name: user.displayName, walletValue: _getWalletValue(user, coins) }));
    miniUsers.sort((a, b) => b.walletValue - a.walletValue);
    return miniUsers;
}

function _getWalletValue(user, coins) {
    let coinsMap = {};
    let walletValue = 0;

    for (let coin of coins) {
        coinsMap[coin.symbol] = +coin.price;
    }
    user.coins.forEach(userCoin => {
        return walletValue += userCoin.amount * coinsMap[userCoin.symbol];
    });
    walletValue += user.usdBalance
    return walletValue;
}

async function loginWithGithub() {
    const res = await firebaseService.loginWithGithub();
    console.log(res);
    return res.user;
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

async function logout() {
    await firebaseService.logout();
    return sessionService.clearStorage();
}

async function purchaseCoin(purchaseData) {
    const { totalCost, symbol, price, uuid, color, iconUrl } = purchaseData;
    const user = await getUser();
    if (!user) {
        return Promise.reject('NO_USER');
    } else {
        if ((user.usdBalance < totalCost.usdAmount)) {
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
        const transaction = _createTransaction(-totalCost.usdAmount, totalCost.coinAmount, price, symbol);

        user.transactions.unshift(transaction);
        user.usdBalance = user.usdBalance - totalCost.usdAmount;
        try {
            const updatedUser = await _updateUser(user);
            return updatedUser;
        } catch (err) {
            console.log('had an error while getting your data', err.message);
        }
    }

}

async function sellCoins({ uid, amount, symbol, sellValue, coinValue }) {
    try {
        const loggedUser = await firebaseService.checkCurrUser();
        if (loggedUser.uid === uid && loggedUser.emailVerified) {
            const userData = await firebaseService.getCurrUserData(loggedUser.uid);
            const coinToUpdateIdx = userData.coins.findIndex(coin => coin.symbol === symbol);
            const transaction = _createTransaction(sellValue, amount, coinValue, symbol);

            userData.usdBalance += sellValue;
            userData.coins[coinToUpdateIdx].amount -= amount;
            userData.transactions.unshift(transaction);

            if (userData.coins[coinToUpdateIdx].amount === 0) {
                userData.coins.splice(coinToUpdateIdx, 1);
            }
            return _updateUser(userData);
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

async function _updateUser(user) {
    await firebaseService.updateUserWallet('users', user.uid, user);
    return sessionService.saveToStorage(SESSION_DB, user);
}

function _createTransaction(usdAmount, coinAmount, coinValue, symbol) {
    const transaction = { usdAmount, coinAmount, coinValue, symbol, timestamp: Date.now() };
    return transaction;
}