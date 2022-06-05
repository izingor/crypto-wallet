import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { coinService } from '../../services/coin.service';


const initialState = {
    coins: null,
    status: '',
    // updatedAt: null,
};

export const getCoins = createAsyncThunk('coin/getCoins', async () => {
    const res = await coinService.getRates();
    return res
});


const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCoins.fulfilled, (state, { payload }) => {
                state.coins = payload;
                
            });
    }
});


export const coinState = (state) => state.coinStore;
export const coinReducer = coinSlice.reducer;