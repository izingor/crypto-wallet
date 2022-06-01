import { configureStore } from "@reduxjs/toolkit";
import userReducer from './modules/user.store'

export const store = configureStore({
    reducer: {
        userStore: userReducer
    }
});