import { asyncStorageService } from "./async.storage.service";
import { sessionService } from "./session.service";
const USER_DB = 'usersDB';
const SESSION_DB = 'loggedDB'
export const userService = {
    getUser,
    getEmptyUser,
    saveNewUser,
    login
};


const user = {
    name: 'Potato Joe',
    coins: 1000,
    moves: []
};


function getUser() {
    console.log('hello');
    return Promise.resolve(user);
}

function getEmptyUser() {
    const user = {
        name: null,
        password: null,
        coins: 1000,
        moves: []
    };
    return user;
}
function saveNewUser(user) {
    console.log('saving new user', user);
    const savedUser = asyncStorageService.post(USER_DB, user);
    return savedUser;
}


async function login(user) {
    const loggedUser = await asyncStorageService.get(USER_DB, user._id)
    console.log(loggedUser);
    if(loggedUser) {
        sessionService.saveToStorage(SESSION_DB,loggedUser)
        return loggedUser;
    }else{
        console.log('no user');
        return false;
    }

}