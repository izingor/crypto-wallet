import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from '../../services/user.service';


const initialState = {
    user: null,
    users: null,
    loginStatus: '',
    signupStatus: '',
    purchaseStatus: '',
    sellStatus: ''
};

export const loginUser = createAsyncThunk('user/loginUser', async () => {
    const loggedUser = await userService.loginWithGoogle();
    return loggedUser;
});

export const signupUser = createAsyncThunk('user/signUpUser', async (userData) => {
    const newUser = await userService.saveNewUser(userData);
    return newUser;
});

export const checkUserSession = createAsyncThunk('user/checkUserSession', async () => {
    const loggedUser = await userService.getUser();
    return loggedUser;
});

export const logout = createAsyncThunk('user/logout', async () => {
    await userService.logout();
});

export const purchaseCoin = createAsyncThunk('coin/buyCoin', async (purchaseData) => {
    const res = await userService.purchaseCoin(purchaseData);
    return res;


});

export const sellCoins = createAsyncThunk('coin/sellCoins', async (sellData) => {
    const res = await userService.sellCoins(sellData);
    return res;
});

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    const res = await userService.getUsers();
    return res;
});


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: ({ payload }) => {
            console.log('setting use from the user store', payload);
        },
        resetPurchaseStatus: (state) => {
            state.purchaseStatus = '';
        },
        resetSellStatus: (state) => {
            state.sellStatus = '';
        },
        resetLoginStatus: (state) => {
            state.loginStatus = '';
        }

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loginStatus = 'processing';
        })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.loginStatus = 'success';
            })
            .addCase(loginUser.rejected, (state) => {
                state.loginStatus = 'failed';
            })
            .addCase(signupUser.pending, (state) => {
                state.signupStatus = 'Loading';
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.signupStatus = 'Successful';
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
                state.purchaseStatus = 'success';
            })
            .addCase((purchaseCoin.pending), state => {
                state.purchaseStatus = 'proccessing';
            })
            .addCase((purchaseCoin.rejected), (state, { error }) => {
                if (error.message === 'NO_FUNDS') state.purchaseStatus = 'funds';
                else state.purchaseStatus = 'failed';
            })
            .addCase((sellCoins.fulfilled), (state, { payload }) => {
                state.user = payload;
                state.sellStatus = 'success';
            })
            .addCase((sellCoins.pending), state => {
                state.sellStatus = 'proccessing';

            }).addCase((sellCoins.rejected), state => {
                state.sellStatus = 'failed';
            })
            .addCase((getUsers.fulfilled), (state, { payload }) => {
                state.users = payload;
            });


    }


});
export const userState = (state) => state.userStore;
export const { setUser, resetPurchaseStatus, resetSellStatus, resetLoginStatus } = userSlice.actions;
export default userSlice.reducer;