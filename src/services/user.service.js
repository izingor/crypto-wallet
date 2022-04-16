<<<<<<< HEAD

export const userService =  {
    getUser
};


const user = {
    name: 'Potato Joe',
    coins: 1000,
    moves: []
};


function getUser() {
    return user;
=======

export const userService =  {
    getUser
};


const user = {
    name: 'Potato Joe',
    coins: 1000,
    moves: []
};


function getUser() {
    console.log('hello');
    return Promise.resolve(user);
>>>>>>> f6d66b7863c03740ccad012a5dc2684109d2e624
}