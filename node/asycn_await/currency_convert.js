const axios = require('axios');

const getExchangeRate = async (from, to) => {
  from = from.toUpperCase();
  to = to.toUpperCase();
  const response = await axios.get(`https://api.fixer.io/latest?base=${from}`);
  return response.data.rates[to];
};

const getCountries = async currencyCode => {
  currencyCode = currencyCode.toLowerCase();
  const response = await axios.get(
    `https://restcountries.eu/rest/v2/currency/${currencyCode}`,
  );
  return response.data.map(country => country.name);
};

const convertCurrency = async (from, to, amount) => {
  const countries = await getCountries(to);
  const rate = await getExchangeRate(from, to);
  const exchangeAmount = rate * amount;

  return `$${amount} ${from} is worth $${exchangeAmount} ${to}.You can spend these in the following countries: ${countries.join(
    ', ',
  )}`;
};

convertCurrency('cad', 'usd', 40)
  .then(output => console.log(output))
  .catch(e => console.log(e));
