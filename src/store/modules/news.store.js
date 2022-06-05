import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newsService } from '../../services/news.service';


const initialState = {
    news: null,
    status: ''
};


export const getLatestNews = createAsyncThunk('news/getNews', async () => {
    const res = await newsService.getCryptoNews()
    return res
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getLatestNews.fulfilled, (state, { payload }) => {
                
                state.news = payload;
            })
            .addCase(getLatestNews.pending, (state) => {
                state.status = 'Loading';
            })
            .addCase(getLatestNews.rejected, (state) => {
                state.status = 'Failed to load, try again later.';
            });
    }
});


export const newsState = (state) => state.newsStore
export const newsReducer = newsSlice.reducer;