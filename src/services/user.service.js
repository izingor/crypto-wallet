import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { asyncStorageService } from "./async.storage.service";
import { sessionService } from "./session.service";
const USER_DB = 'usersDB';
const SESSION_DB = 'loggedDB';

export const userService = {
    getUser,
    getEmptyUser,
    saveNewUser,
    login,
    logout,
    updateUser
};




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


async function login(user) {
    const storedUser = await asyncStorageService.get(USER_DB, user.email);
    if (storedUser.password === user.password) {
        const { password, ...loggedUser } = storedUser;
        sessionService.saveToStorage(SESSION_DB, loggedUser);
        return loggedUser;
    } else {
        console.log('no user');
        return false;
    }
}

async function buyCoin(purchaseData) {

    const { totalCost, symbol, price, uuid, } = purchaseData;

    const user = await getUser();
    if (!user) {
        return 'NO_USER';
    } else {
        if (user.usdBalance < purchaseData.totalCost) {
            return 'NO_FUNDS';
        } else {
            const transaction = {
                usdAmount: totalCost.usdAmount,
                coinAmount: totalCost.coinAmount,
                coinValue: price,
                symbol,
                timestamp: Date.now(),
            };
            const coin = {
                uuid,
                symbol,
                amount: totalCost.coinAmount,
            };
            user.coins.push(coin);
            user.transactions.push(transaction);
            user.usdBalance = user.usdBalance - totalCost.usdAmount;
        }

        try {
            const updatedUser = await userService.updateUser(user);
            return updatedUser;
        } catch (err) {
            console.log('had an error while getting your data', err.message);
        }
    }

}


async function updateUser(user) {
    try {
        const updatedUser = await asyncStorageService.put(USER_DB, user);
        return sessionService.saveToStorage(SESSION_DB, updatedUser);
    } catch (err) {
        console.log('had an issue updating the user', err.message);

    }

}


function logout() {
    return sessionService.clearStorage();
}