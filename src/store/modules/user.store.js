import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from '../../services/user.service';


const initialState = {
    user: null,
    loginStatus: '',
    signupStatus: ''
};

export const loginUser = createAsyncThunk('userStatus/loginUser', async (userData) => {
    const loggedUser = await userService.login(userData);
    return loggedUser;
});

export const signupUser = createAsyncThunk('userStatus/signUpUser', async (userData) => {
    const newUser = await userService.saveNewUser(userData);
    return newUser;
});

export const checkUserSession = createAsyncThunk('userStatus/checkUserSession', async () => {
    const loggedUser = userService.getUser();
    return loggedUser;
});

export const logout = createAsyncThunk('userStatus/logout', async () => {
    await userService.logout();
});



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // checkUserSession: (state) => {
        //     const userSession = userService.checkActiveUser();
        //     state.user = userSession;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loginStatus = 'Signing in';
        })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.loginStatus = 'Logged';
            })
            .addCase(loginUser.rejected, (state) => {
                state.loginStatus = 'Failed';
            })
            .addCase(signupUser.pending, (state) => {
                state.signupStatus = 'Loading';
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.signupStatus = 'Successful';
                console.log('singning up');
            })
            .addCase(signupUser.rejected, (state) => {
                state.signupStatus = 'Failed';
            })
            .addCase(checkUserSession.fulfilled, (state, { payload }) => {
                state.user = payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            });


    }


});
export const user = (state) => state.userStore.user;
// export const {  } = userSlice.actions;
export default userSlice.reducer;