import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user.store'

export const store = configureStore({
    reducer: {
        userStore: userReducer
    }
});