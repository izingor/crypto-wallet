import axios from 'axios';

const URL_VOLUME = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true';

async function getRates() {
    try {
        const res = await axios.get(URL_VOLUME);
        return res.date;
    } catch (err) {
        console.log('Had an error getting your date', err.message);
    }
}




export const cryptoService = {
    getRates
};