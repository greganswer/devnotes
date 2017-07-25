const Twit = require('twit');

const secrets = require('./secrets');

var T = new Twit({
  consumer_key: secrets.consumer_key,
  consumer_secret: secrets.consumer_secret,
  access_token: secrets.access_token,
  access_token_secret: secrets.access_token_secret,
});

var params = { q: 'banana', count: 3 };

function callback(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}

T.get('search/tweets', params, callback);
