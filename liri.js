console.log (process.argv)

require("dotenv").config();

var axios = require("axios");
var Spotify = require('node-spotify-api');
var omdb = require('omdb');
var moment = require('moment');
var bandsintown = require('bandsintown')(APP_ID);
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

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
var bandsearch = function(bandsTown) {
    if (bandsTown === undefined) { 
        console.log("No Upcoming Shows")
    }
    bandsintown.search ( 
        {
        type: "info",
        query:"events",
        }
        function(err,data) {
            if (err) {
                console.log("Error: " + err);
                return;
    )
}
// call to api .axios call. for loop of data. moment to fomat data


//movie search function,
//if state similar to spotify default song = movie, 
//axios call to omdb, console.log, 
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