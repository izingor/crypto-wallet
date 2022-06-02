import axios from 'axios';

const COIN_API_KEY = process.env.REACT_APP_COIN_API_KEY;
const coinSymbols = ['BTC', 'ETH', 'SHIB', 'ADA', 'XRP', 'AVAX', 'TRX', 'DOGE', 'BUSD', 'BNB', 'LTC', 'DOT'];
const coins = coinSymbols.join(',');

const URL_VOLUME = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins}&tsyms=USD&api_key=${COIN_API_KEY}`;


async function getRates() {
    try {
        const { data } = await axios.get(URL_VOLUME);
        console.log(data);
        // return res.data;
        // return rates;
    } catch (err) {
        console.log('Had an error getting your date', err.message);
    }
}




export const coinService = {
    getRates
};