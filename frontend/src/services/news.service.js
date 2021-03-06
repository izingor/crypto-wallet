import axios from 'axios';
import { sessionService } from './session.service';

const LATEST_NEWS = 'latestNews';


const options = {
    method: 'GET',
    url: 'https://crypto-pulse.p.rapidapi.com/news',
    headers: {
        'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};


async function getCryptoNews() {
    try {
        const { data } = await axios.request(options);
        sessionService.saveToStorage(LATEST_NEWS, data);
        console.log('loaded from the api');
        return data;
    } catch (err) {
        console.log('had an error getting the latest news', err);
    }
}

export const newsService = {
    getCryptoNews
};