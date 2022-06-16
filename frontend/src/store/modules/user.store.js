import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from '../../services/user.service';


const initialState = {
    user: null,
    loginStatus: '',
    signupStatus: ''
};

export const loginUser = createAsyncThunk('user/loginUser', async () => {
    const loggedUser = await userService.login();
    console.log(loggedUser);
    return loggedUser;
});

export const signupUser = createAsyncThunk('user/signUpUser', async (userData) => {
    const newUser = await userService.saveNewUser(userData);
    return newUser;
});

export const checkUserSession = createAsyncThunk('user/checkUserSession', async () => {
    const loggedUser = userService.getUser();
    console.log(loggedUser);
return loggedUser;
});

export const logout = createAsyncThunk('user/logout', async () => {
    await userService.logout();
});

export const purchaseCoin = createAsyncThunk('coin/buyCoin', async (purchaseData) => {
    // console.log('coin store res', res);
    const res = await userService.purchaseCoin(purchaseData);
    console.log('getting the res', res);
    return res;


});


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: ({ payload }) => {
            console.log('setting use from the user store', payload);
            // state.user = payload;
        }
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
            })
            .addCase((purchaseCoin.fulfilled), (state, { payload }) => {
                state.user = payload;

            });


    }


});
export const user = (state) => state.userStore.user;
export const { setUser } = userSlice.actions;
export default userSlice.reducer;