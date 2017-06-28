const TwitterApi = require('./../js/twitter-api.js').twitterModule;
// const twit = require('twit');


$(() => {
  const twitAPI = new TwitterApi();
  $("#output").text(twitAPI.basicSearch('javascript'));
});
