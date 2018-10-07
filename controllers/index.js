var express = require('express')
var http = require('http')
var path = require('path')
let https = require('https');
const app = express.Router()
var bodyParser = require('body-parser');
var mysql = require('mysql');
var w = require('./weather');

app.use(bodyParser());

app.get('/', (req, res) => {
    console.log("Get Data");
    res.render('./index.ejs', {
        title: new Date().toDateString()
    });
});


async function fn() {
var lat = 17.3875977;
var lon = 78.4922316;
var wURL = `https://api.darksky.net/forecast/40283bcf75c8e68c566ab2f7a029985a/${lat},${lon}`;
console.log(res.data.results[0].formatted_address);
return fetch.get(wURL).then((res) => {
    var temp = res.data.currently.temperature;
    var aTemp = res.data.currently.apparentTemperature;

    console.log(`it is ${temp}.It feels like ${aTemp}`);
});


}





module.exports = app