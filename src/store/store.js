import { configureStore } from "@reduxjs/toolkit";
import userReducer from './modules/user.store'
import { newsReducer} from './modules/news.store'

export const store = configureStore({
    reducer: {
        userStore: userReducer,
        newsStore: newsReducer
    }
});