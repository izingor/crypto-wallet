import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { coinService } from '../../services/coin.service';
import { setUser } from './user.store';

const initialState = {
    coins: null,
    coin: null,
    status: '',
    stats: null,
    walletCoinValues: null
};

export const getCoins = createAsyncThunk('coin/getCoins', async () => {
    const res = await coinService.getCoins();
    return res;
});

export const getCoin = createAsyncThunk('coin/getCoin', async (coinId) => {
    const { coin } = await coinService.getCoin(coinId);
    return coin;
});

export const getWalletCoins = createAsyncThunk('coin/getWalletCoins', async (coinSymbols) => {
    const walletCoins = await coinService.getCoins(coinSymbols);
    return walletCoins;
});

const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setUser

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCoins.fulfilled, (state, { payload }) => {
                const { stats, coins } = payload;
                state.coins = coins;
                state.stats = stats;
            })
            .addCase(getCoin.fulfilled, (state, { payload }) => {
                state.coin = payload;
            })
            .addCase(getWalletCoins.fulfilled, (state, { payload }) => {
                state.walletCoinValues = payload;
            });
        // .addCase((purchaseCoin.fulfilled), (state, { payload }) => {
        //     state.coin = null;

        // });
    }
});


export const coinState = (state) => state.coinStore;
export const coinReducer = coinSlice.reducer;