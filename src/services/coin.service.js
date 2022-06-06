import axios from 'axios';

// const COIN_API_KEY = process.env.REACT_APP_COIN_API_KEY;
// const coinSymbols = ['BTC', 'ETH', 'SHIB', 'ADA', 'XRP', 'AVAX', 'TRX', 'DOGE', 'BUSD', 'BNB', 'LTC', 'DOT'];
// const coins = coinSymbols.join(',');

// const URL_VOLUME = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins}&tsyms=USD&api_key=${COIN_API_KEY}`;
// const URL_VOLUME = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins}&tsyms=USD&api_key=${COIN_API_KEY}`;

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };


async function getRates() {
    try {
        const { data } = await axios.request(options);
        console.log(data)
        // const coins = Object.entries(data.DISPLAY);
        // return coins;
    } catch (err) {
        console.log('Had an error getting your date', err.message);
    }
}




export const coinService = {
    getRates
};