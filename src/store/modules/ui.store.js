import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkMode: false,
    isBuyModaL: false,
    chosenCoin: null
};


const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onDarkModeChanged: (state) => {
            state.isDarkMode = !state.isDarkMode;
            console.log('changed the view mode');
        },
        onBuyModalChanged: (state, {payload}) => {
            state.isBuyModaL = !state.isBuyModaL;
            state.chosenCoin = payload
        }
    }
});

export const uiState = (state) => state.uiStore;
export const { onBuyModalChanged } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;