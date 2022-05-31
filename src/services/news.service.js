import axios from 'axios';

// const axios = require("axios");dd

const options = {
    method: 'GET',
    url: 'https://crypto-pulse.p.rapidapi.com/news',
    headers: {
        'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com',
        'X-RapidAPI-Key': '9948d39de6msh6242314e690f005p133f56jsn4a971bf3973e'
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