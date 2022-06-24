import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkMode: false,
    isBuyModaLOpen: false,
    isWalletModal: false,
};


const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onDarkModeChanged: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        onBuyModalChanged: (state) => {
            state.isBuyModaLOpen = !state.isBuyModaLOpen;
        },
        onWalletModalChanged: (state) => {
            state.isWalletModal = !state.isWalletModal;
        }
    }
});

export const uiState = (state) => state.uiStore;
export const { onBuyModalChanged, onWalletModalChanged } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;