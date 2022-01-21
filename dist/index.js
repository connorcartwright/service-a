"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const coingecko_api_1 = (0, tslib_1.__importDefault)(require("coingecko-api"));
const CoinGeckoClient = new coingecko_api_1.default();
async function getBitcoinValue() {
    const response = await CoinGeckoClient.simple.price({
        ids: ['bitcoin'],
        vs_currencies: ['usd'], // i.e. add 'eur', 'gbp'
    });
    if (response.code === 200) {
        let bitcoinValue = response.data.bitcoin.usd;
        console.log(`Bitcoin value: $${bitcoinValue}`);
    }
    else {
        console.log(`There was a problem fetching Bitcoin value (Status code: ${response.code})`);
    }
}
getBitcoinValue();
setInterval(getBitcoinValue, 5000);
