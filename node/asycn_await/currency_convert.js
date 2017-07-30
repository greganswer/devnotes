const axios = require('axios');

/**
 * Get the exchange rate between 2 currencies
 * @param  {String} from The currency being exchanged
 * @param  {String} to The final currency
 * @return {Promise} The exchange rate
 */
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

/**
 * Get the list of countries that except a currency
 * @param  {String} currencyCode The currency code
 * @return {Promise} An array of countries that except a currency
 */
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

/**
 * Convert the currency and get the list of countries that except the currency
 * @param  {String} from The currency being exchanged
 * @param  {String} to The final currency
 * @param  {Number} amount The amount to be exchanged
 * @return {Promise} A string
 */
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
