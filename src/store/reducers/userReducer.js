const INITIAL_STATE = {
    loggedUser: null,
    moves: [],
    wallet: {
        totalValue: null,
    }
};

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN':
            const { loggedUser } = state;
            return { ...state, loggedUser:action.user };


        default:
            return state;
    }
}