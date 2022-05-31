import axios from 'axios';

// const axios = require("axios");dd

const options = {
    method: 'GET',
    url: 'https://crypto-pulse.p.rapidapi.com/news',
    headers: {
        'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com',
    }
};


async function getCryptoNews() {
    try {
        const { data } = await axios.request(options);
        console.log('getting the news', data);

    } catch (err) {
        console.log(err);
    }

}

export const newsService = {
    getCryptoNews
};