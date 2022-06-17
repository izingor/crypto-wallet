import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;


async function getCoins(coinSymbols = null) {
  console.log(coinSymbols);
  try {
    const { data } = await axios.request({
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
        'X-RapidAPI-Key': API_KEY
      }
    });
    if (coinSymbols) {
      const walletCoinsValues = {};
      const walletCoins = data.data.coins.filter(coin => {
        return coinSymbols.includes(coin.symbol);
      });

      for (const walletCoin of walletCoins) {
        walletCoinsValues[walletCoin.symbol] = +walletCoin.price;
      }
      return walletCoinsValues;
    } else {
      return data.data;
    }

  } catch (err) {
    console.log('Had an error getting your coins', err.message);
  }
}

async function getCoin(coinId) {
  try {
    const { data } = await axios.request({
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
      params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
      headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': API_KEY
      }
    });
    return data.data;
  } catch (err) {
    console.log('Had an error getting your coin', err.message);
  }
}

async function getWalletCoins(coins) {
  console.log(coins);
  try {
    const { data } = await axios.request({
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'symbols[0]': coins,
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    });
    console.log(data);
  } catch (err) {
    console.log('had an error', err);
  }
}


export const coinService = {
  getCoins,
  getCoin,
  getWalletCoins
};