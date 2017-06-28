const twit = require('twit');
const consumerKey = require('./../.env').consumerKey;
const consumerSecret = require('./../.env').consumerSecret;
const accessToken = require('./../.env').accessToken;
const accessTokenSecret = require('./../.env').accessTokenSecret;

function TwitterApi() {
  this.twit = new twit({
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
    access_token: accessToken,
    access_token_secret: accessTokenSecret
  });
}

TwitterApi.prototype.basicSearch = function(searchQuery) {
  console.log('hello');
  this.twit.get('search/tweets', {q: searchQuery, count: 10})
    .then(response => {
      response.data.statuses.forEach(status => {
        console.log(`Status: ${status.text}`)
      });
    })
    .catch(error => console.log('found an error!', error.stack));
};


exports.twitterModule = TwitterApi;



//execute below
//--------------------
const twitAPI = new TwitterApi();

twitAPI.basicSearch('javascript');
