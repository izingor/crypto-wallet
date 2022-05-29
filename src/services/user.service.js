import { asyncStorageService } from "./async.storage.service";
import { sessionService } from "./session.service";
const USER_DB = 'usersDB';
const SESSION_DB = 'loggedDB';
export const userService = {
    getUser,
    getEmptyUser,
    saveNewUser,
    login
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
function saveNewUser(userData) {
    const newUser = {
        ...userData,
        usdBalance: 1000,
        coins: [],

    };
    const savedUser = asyncStorageService.post(USER_DB, newUser);
    return savedUser;
}


async function login(user) {
    const activeUser = await asyncStorageService.get(USER_DB, user.name);
    if (activeUser.password === user.password) {
        const { password, ...loggedUser } = activeUser;
        sessionService.saveToStorage(SESSION_DB, loggedUser);
        return loggedUser;
    } else {
        console.log('no user');
        return false;
    }

}