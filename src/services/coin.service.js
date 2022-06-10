import axios from 'axios';
import { userService } from './user.service';

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;


async function getCoins() {
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
    return data.data;
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

// async function buyCoin(purchaseData) {

//   const { totalCost, symbol, price, uuid, } = purchaseData;

//   const user = await userService.getUser();
//   if (!user) {
//     return 'NO_USER';
//   } else {
//     if (user.usdBalance < purchaseData.totalCost) {
//       return 'NO_FUNDS';
//     } else {
//       const transaction = {
//         usdAmount: totalCost.usdAmount,
//         coinAmount: totalCost.coinAmount,
//         coinValue: price,
//         symbol,
//         timestamp: Date.now(),
//       };
//       const coin = {
//         uuid,
//         symbol,
//         amount: totalCost.coinAmount,
//       };
//       user.coins.push(coin);
//       user.transactions.push(transaction);
//       user.usdBalance = user.usdBalance - totalCost.usdAmount;
//     }

//     try {
//       const updatedUser = await userService.updateUser(user);
//       return updatedUser;
//     } catch (err) {
//       console.log('had an error while getting your data', err.message);
//     }
//   }

// }


export const coinService = {
  getCoins,
  getCoin,
};