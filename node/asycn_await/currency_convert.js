const axios = require('axios');

const getExchangeRate = (from, to) => {
  let url = `https://api.fixer.io/latest?base=${from}`;
  to = to.toUpperCase();
  return axios.get(url).then(response => response.data.rates[to]);
};

const getCountries = currencyCode => {
  let url = `https://restcountries.eu/rest/v2/currency/${currencyCode}`;
  return axios
    .get(url)
    .then(response => response.data.map(country => country.name));
};

const convertCurrency = async (from, to, amount) => {
  const countries = await getCountries(to);
  const rate = await getExchangeRate(from, to);
  const exchangeAmount = rate * amount;

  return `$${amount} ${from} is worth $${exchangeAmount} ${to}.You can spend these in the following countries: ${countries.join(
    ', ',
  )}`;
};

convertCurrency('cad', 'usd', 40).then(output => console.log(output));
