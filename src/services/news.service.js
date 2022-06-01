import axios from 'axios';

// const axios = require("axios");dd




const options = {
    method: 'GET',
    url: 'https://crypto-pulse.p.rapidapi.com/news',
    headers: {
        'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY
    }
};


async function getCryptoNews() {
    try {
        const { data } = await axios.request(options);
        // console.log('getting the news', process.env.REACT_APP_NEWS_API_KEY);
        return data
    } catch (err) {
        console.log(err);
    }

}

export const newsService = {
    getCryptoNews
};