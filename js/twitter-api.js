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

TwitterApi.prototype.userSearch = function(searchQuery) {
  this.twit.get('users/lookup', {screen_name: searchQuery})
    .then(response => {
      console.log(response.data[0]);
    })
    .catch(error => console.log('errrrrrrrrrrrr', error.stack));
};

TwitterApi.prototype.getUserTimeline = function(username) {
  this.twit.get('statuses/user_timeline', {screen_name: username})
    .then(response => {
      response.data.forEach(status => {
        console.log(`Status: ${status.text}`)
      });
    })
    .catch(error => console.log('errrrrrrrrrrrr', error.stack));
};


exports.twitterModule = TwitterApi;

//execute below
//--------------------
const twitAPI = new TwitterApi();

// twitAPI.basicSearch('javascript');
// twitAPI.userSearch('senorfairchild');
// twitAPI.getUserTimeline('senorfairchild');
