import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from '../services/user.service';


const initialState = {
    user: null
};

export const validateUser = createAsyncThunk('userStatus/loginUser', async (userData) => {
    const loggedUser = await userService.login(userData);
    return loggedUser;
});


export const userSlice = createSlice({
    name: 'userStatus',
    initialState,
    reducers: {
        userLogin: (state, { payload }) => {
            // state.user = 'logged';
            console.log('the state', state);
            console.log('payload', payload);
            // const loggedUser = userService.login(payload)

            // loggedUser ? state.user = loggedUser : state.user = null; 
        }
    },
    extraReducers: (builder) => {
        builder.addCase(validateUser.fulfilled, (state, {payload}) => {
            state.user = payload
        });
    }

});
export const user = (state) => state.userStore.user;
export const { userLogin } = userSlice.actions;
export default userSlice.reducer;