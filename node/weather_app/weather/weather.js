const request = require('request');

var getWeather = (lat, lng, callback) => {
  let endpoint = 'https://api.darksky.net/forecast/711900c19b73be753a7f653fa636abb5'
  let url = `${endpoint}/${lat},${lng}`;

  request({
    url: url,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else if (response.statusCode == 404) {
      callback('Unable to fetch weather. Please try again later.');
    }
  });
};

module.exports = {
  getWeather
}
