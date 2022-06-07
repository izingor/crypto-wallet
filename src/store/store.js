import { configureStore } from "@reduxjs/toolkit";
import userReducer from './modules/user.store'
import { newsReducer} from './modules/news.store'
import { coinReducer } from "./modules/coin.store";
import { uiReducer } from './modules/ui.store';

export const store = configureStore({
    reducer: {
        userStore: userReducer,
        newsStore: newsReducer,
        coinStore: coinReducer,
        uiStore: uiReducer

    }
});