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
            console.log('changed the view mode');
        },
        onBuyModalChanged: (state, { payload = null }) => {
            console.log(payload);
            state.isBuyModaLOpen = !state.isBuyModaLOpen;
            state.clickedCoin = payload;
        }
    }
});

export const uiState = (state) => state.uiStore;
export const { onBuyModalChanged } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;