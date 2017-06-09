//Requires
var Twitter = require('twitter');	
var Spotify = require('node-spotify-api');
var twitterKeys = require('./twitter.js');
var spotifyKeys = require('./spotify.js');
var request = require('request');

console.log('tweets');

//set up a for loop that will grab past 20 tweets


var client = new Twitter(twitterKeys.twitterKeys);
var params = {screen_name: '@j_abbatiello'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//Spotify 
console.log(spotifyKeys.spotifyKeys);
var spotify = new Spotify(spotifyKeys.spotifyKeys);



spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});



//Request
request('http://www.omdbapi.com/?t=The+Matrix&apikey=40e9cece', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});



