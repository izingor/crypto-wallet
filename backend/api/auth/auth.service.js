import bcrypt from 'bcrypt';

export const authService = {
    login,
    signUp
};


async function login(email, password) {
    console.log('user information', email, password);
    return Promise.resolve('logged in')
}


async function signUp(data) {
    console.log('getting your data for the signup', data);
}

