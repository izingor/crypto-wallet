
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
}