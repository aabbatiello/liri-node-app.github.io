//Requires
var Twitter = require('twitter');	
var Spotify = require('node-spotify-api');
var twitterKeys = require('./twitter.js');
var spotifyKeys = require('./spotify.js');
var request = require('request');

//Take in Commands my-tweets grabbing arguments node liri.js command then what the value is
// node lirir.js my-tweets
// have to get the arguments from the request 

//takes in the input from the user
var action = process.argv[2];
var value = process.argv[3];

//side which action to do based on command input
//how to decide which action can do
// if else if 

//created a control flow to handle the input 
if (action === "my-tweets") {
	//console.log("tweets");
	//turn my tweets function into an actual function when someonecalls get tweets
	gettweets();	

} else if (action === "spotify-this-song"){
	 console.log("spotify")

	spotifythissong();

}else if (action === "movie-this"){
	 console.log("movie")

	moviethis();

}else if (action === "do-what-it-says"){
 	console.log("dowhatitsays")

	dowhatitsays();
}else {
	console.log("You did not pick a valid action!")
}


function gettweets () {
	var client = new Twitter(twitterKeys.twitterKeys);
	var params = {screen_name: '@j_abbatiello', count: 20 };
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
 	 if (!error) {
    	//console.log(tweets);
     	//set up a for loop that will grab past 20 tweets
     	 for (var i = 0; i <  tweets.length; i++) {
    	 console.log( tweets[i].text);
    	 };
  	 	}
 	});

}


//Spotify -wrap in a function
function spotifythissong () { 
//console.log(spotifyKeys.spotifyKeys);
var spotify = new Spotify(spotifyKeys.spotifyKeys);
//Replace song query with a variable = to value
spotify.search({ type: 'track', query: value }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

 //console.log(data); 
//go through data object to get what is specifically asked in HW, based
//The song's name
//A preview link of the song from Spotify
//The album that the song is from
	else {
            var spotifydata = data.tracks.items[0];
            console.log("the artist is", spotifydata.artists[0].name);
            console.log("the song name is", spotifydata.name);
            console.log("here is a preview link", spotifydata.preview_url);
            console.log("the album is called", spotifydata.album.name);
		 }
	});

}


//Request -wrap in a function 
//Replace movie name with a variable = to value
function moviethis() {
request('http://www.omdbapi.com/?t=value&apikey=40e9cece', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred 
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  //console.log('body:', body); // Print the HTML for the Google homepage. 
 if (value) {
            moviethis();
        } else {
            moviethis(value = "Mr. Nobody");
        }

        var movieObject = JSON.parse(body);
        console.log("the title is ", movieObject.Title);
        console.log("the year is ", movieObject.Year);
        console.log("the IMDB Rating is ", movieObject.imdbRating);
        console.log("the country is ", movieObject.Country);
        console.log("the language is ", movieObject.Language);
        console.log("the plot is ", movieObject.Plot);
        console.log("the actors are ", movieObject.Actors);
    });
};

moviethis();