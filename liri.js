
require("dotenv").config();

var axios = require("axios");
var Spotify = require('node-spotify-api');
var omdb = require('omdb');
var moment = require('moment');
var bandsintown = require('bandsintown');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var require = require("request");


var pick = function(caseData, functionData) {
    switch (caseData) {
        case 'concert-this':
            concertSearch(functionData);
            break;
        case 'spotify-this-song':
            searchSpotify(functionData);
            break;
        case 'movie-this':
            movieSearch(functionData);
            break;
        case 'do-what-it-says':
            showSomeInfo(functionData);
            break;
    }
}

var artistName = function(artist) {
    return artist.name
}
// going to have to call function later

var searchSpotify = function(songName) {
    if (songName === undefined) {
        songName = "Whats my age again";
    }
    spotify.search (
        {
            type: "track",
            query: "songName",
        },
        function(err,data) {
            if (err) {
                console.log("Error: " + err);
                return; 
            }
            var songs = data.tracks.items;

            for (i = 0; i < songs.length; i++ ) {
                console.log(i);
                console.log("artist: " + songs[i].artists.map(artistName));
                console.log("songname: " + songs[i].name);
                console.log("album: " + songs[i].album.name);
            }
        }
    )
}
//band in town fuction 
var concertSearch = function(artist) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get (queryUrl).then(
        function(response) {
            var jsonData = response.data;
            if (!jsonData.length) {
                console.log("No info found" + functionData
        )
                return;
            }
            for (var i = 0; i < jsonData.length; i++) {
                var index = jsonData[i];

                console.log(show.venue.city + "," + (show.venue.region||show.venue.country) + "at" + show.venue.name + " " + moment(show.datetime).format("MM/DD/YYYY"));

            } 
        }
    )

    
}

// call to api .axios call. for loop of data. moment to fomat data


//movie search function,
var movieSearch = function(movieName) {
    if (movieName === undefined) {
        movieName = "Mr. Nobody"
        console.log("If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>");
    }
    var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=38fb3300";
    axios.get(urlHit).then(
        function(response)
        {
            if (error.response.statusCode === 200) {
                console.log("Title of the movie: " + JSON.parse(body).Title);
                console.log("Year the movie came out: " + JSON.parse(body).Year);
                console.log("IMDB Rating of the movie: " + JSON.parse(body).Rating);
                console.log("Country produced: " + JSON.parse(body).Country);
                console.log("Language of the movie: " + JSON.parse(body).Language);
                console.log("Plot of the movie: " + JSON.parse(body).Plot);
                console.log("Actors in the movie: " + JSON.parse(body).Actors);
    
                for(var i = 0; i < JSON.parse(body).Ratings.length; i++) {
                    if(JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
                        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[i].value);
                        if(JSON.parse(body).Ratings[i].Website !== undefined) {
                            console.log("Rotten Tomatoes URL: " + JSON.parse(body).Ratings[i].Website);
                        }
                    }
                }
            }
        } )
} 

//if state similar to spotify default song = movie,

//axios call to omdb, console.log, 

// do what it says function, set up err, switch case,
