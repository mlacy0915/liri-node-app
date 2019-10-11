console.log (process.argv)

require("dotenv").config();

var axios = require("axios");
var Spotify = require('node-spotify-api');
var omdb = require('omdb');
var moment = require('moment');
var bandsintown = require('bandsintown')(codingbootcamp);
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);


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