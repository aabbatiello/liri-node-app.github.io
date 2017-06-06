//Twitter
var Twitter = require('twitter');	

exports.twitterKeys = {
  consumer_key: 'W4XI49KAmf6A2YDTrCqbM0MwX',
  consumer_secret: '2vRIQJDh2cc0P5rAuC4qnMmXRIFjrelFrss7j27dBXyM0DTFLj',
  access_token_key: '2799018333-D5WvTpHaBggChrKM7e4ChyghrAwNa4shrFKpZiS',
  access_token_secret: 'i1ZcZrnvtymY0p6ar0JXoOdXhqluxXWRI7rgjI6KdqTtZ',
}

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


//Spotify 
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: <779079e9b30f47d1b744f2c3856a26e4>,
  secret: <026e504dc26243939150d1fd49469eba>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


//OMDB
