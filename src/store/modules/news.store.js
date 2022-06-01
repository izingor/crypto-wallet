import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newsService } from '../../services/news.service';


const initialState = {
    news: null,
    newStatus: ''
};


export const getNews = async () => {

    const res = newsService.getCryptoNews();
    console.log('loggin from the new store',res);
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.fulfilled, (state, { payload }) => {
                state.news = payload;
            })
            .addCase(getNews.pending, (state) => {
                state.newStatus = 'Loading';
            })
            .addCase(getNews.rejected, (state) => {
                state.newStatus = 'Failed to load, try again later.';
            });
    }
});


export const latesNews = (state) => state.newsStore.news
export const newsReducer = newsSlice.reducer