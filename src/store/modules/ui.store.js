import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkMode: false,
    isBuyModaLOpen: false,
    clickedCoin: null
};


const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onDarkModeChanged: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        onBuyModalChanged: (state, { payload = null }) => {
            state.isBuyModaLOpen = !state.isBuyModaLOpen;
            state.clickedCoin = payload;
        }
    }
});

export const uiState = (state) => state.uiStore;
export const { onBuyModalChanged } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;