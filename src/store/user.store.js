import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'loggedUser',
    initialState: {
        user: null
    },
    reducers: {
        userLogin: (state) => {
            state.user = 'logged';
            console.log('logging from the store', state.user);
        }
    }

});
export const user = (state) => state.userStore.user;
export const { userLogin } = userSlice.actions;
export default userSlice.reducer;