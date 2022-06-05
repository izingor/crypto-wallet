import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkMode: false,
}


const darkModeSlice = createSlice({
    name:'darkmode',
    initialState,
    reducers:{
        onDarkModeChanged(state){
            state.isDark = !state.isDark;
            console.log('changed the view mode')
        }
    }
})

export const darkModeState = (state) => state.darkModeState
export const darkModeReducer = darkModeSlice.reducer;