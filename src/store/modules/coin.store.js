import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { coinService } from '../../services/coin.service';


const initialState = {
    coins: null,
    coin: null,
    status: '',
    stats: null
    // updatedAt: null,
};

export const getCoins = createAsyncThunk('coin/getCoins', async () => {
    const res = await coinService.getCoins();
    return res;
});

export const getCoin = createAsyncThunk('coin/getCoin', async (coinId) => {
    const { coin } = await coinService.getCoin(coinId);
    console.log(coin);
    return coin;
});


const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {

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
            });
    }
});


export const coinState = (state) => state.coinStore;
export const coinReducer = coinSlice.reducer;