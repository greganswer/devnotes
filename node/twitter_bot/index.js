const Twit = require('twit');

const secrets = require('./secrets');

var T = new Twit({
  consumer_key: secrets.consumer_key,
  consumer_secret: secrets.consumer_secret,
  access_token: secrets.access_token,
  access_token_secret: secrets.access_token_secret,
});
