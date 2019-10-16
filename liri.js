
require("dotenv").config();

var axios = require("axios");
var Spotify = require('node-spotify-api');
var omdb = require('omdb');
var moment = require('moment');
var bandsintown = require('bandsintown')(APP_ID);
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var require = require("request");

function UserImputs (userOption, inputParameter) {
    switch (userOption) {
        case 'concert-this':
            showConcertInfo(inputParameter);
            break;
        case 'spotify-this-song':
            showSongInfo(inputParameter);
            break;
        case 'movie-this':
            showMovieInfo(inputParameter);
            break;
        case 'do-what-it-says':
            showSomeInfo();
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

// call to api .axios call. for loop of data. moment to fomat data


//movie search function,
var movieThis = funtion(inputParameter) {
    if (inputParameter === undefined) {
        inputParameter = "Mr. Nobody"
        console.log("If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>");
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + inputParameter + "&y=&plot=short&apikey=codingbootcamp";
    request(queryUrl, funtion(err.response,body) {
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
    })
} 

//if state similar to spotify default song = movie, 
//axios call to omdb, console.log, 
var movieName=process.argv[2]

var queryUrl = "http://www.omdbapi.com/?apikey=[codingbootcamp]&" + movieName + "&y=&plot=short&apikey=codingbootcamp"; 
console.log(queryUrl);

axios.get(queryUrl).then(
    function(response) {
        console.log("Release Year" + response.data.Year);
    }
)
.catch(function(err) {
    if (err.response) {

      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
        console.log(err.request);
    } else {
        console.log("Error", error.message);
    }
    console.log(err.config);
})
// do what it says function, set up err, switch case,







// console.log(process.argv)



// var string1 = process.argv[2];
// var num2 = parseInt(process.argv[3]);
// var num3 = parseInt(process.argv[4]);
// var num4 = parseInt(process.argv[5]);
// var num5 = parseInt(process.argv[6])

// console.log(string1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);

// if (string1 === "add") {
//     console.log(num2+num3+num4+num5);
// }

// else if (string1 === "multiply") {
//     console.log(num2*num3*num4*num5);
// }

// else if (string1 === "divide") {
//     console.log(num2/num3/num4/num5);
// }