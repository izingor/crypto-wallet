
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
}