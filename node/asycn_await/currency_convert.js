const axios = require('axios');

const getExchangeRate = async (from, to) => {
  from = from.toUpperCase();
  to = to.toUpperCase();

  try {
    const response = await axios.get(
      `https://api.fixer.io/latest?base=${from}`,
    );
    const rate = response.data.rates[to];
    if (!rate) {
      throw new Error();
    }
    return rate;
  } catch (e) {
    throw new Error(`Unable to get exchange rate for ${from} and ${to}`);
  }
};

const getCountries = async currencyCode => {
  currencyCode = currencyCode.toLowerCase();

  try {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/currency/${currencyCode}`,
    );
    return response.data.map(country => country.name);
  } catch (e) {
    throw new Error(`Unable to find countries that use ${currencyCode}`);
  }
};

const convertCurrency = async (from, to, amount) => {
  const countries = await getCountries(to);
  const rate = await getExchangeRate(from, to);
  const exchangeAmount = rate * amount;
  const countriesList = countries.join(', ');

  return `$${amount} ${from} is worth $${exchangeAmount} ${to}.You can spend these in the following countries: ${countriesList}`;
};

convertCurrency('cad', 'xxx', 40)
  .then(output => console.log(output))
  .catch(e => console.log(e.message));
