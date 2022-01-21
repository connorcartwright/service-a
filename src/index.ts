import CoinGecko from 'coingecko-api';
 
const CoinGeckoClient = new CoinGecko();
 
async function getBitcoinValue() {
  const response = await CoinGeckoClient.simple.price({
    ids: ['bitcoin'], // i.e. add 'ethereum', 'dogecoin'
    vs_currencies: ['usd'], // i.e. add 'eur', 'gbp'
  });

  if (response.code === 200) {
    let bitcoinValue = response.data.bitcoin.usd

    console.log(`Bitcoin value: $${bitcoinValue}`)
  } else {
    console.log(`There was a problem fetching Bitcoin value (Status code: ${response.code})`)
  }

}

getBitcoinValue() // so we immediately print the value
setInterval(getBitcoinValue, 5000)
