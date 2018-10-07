// var express = require('express')
// var http = require('http')
// var path = require('path')
// let https = require('https');
// const app = express.Router()
// var bodyParser = require('body-parser');
// var mysql = require('mysql');
// var w = require('./weather');

// app.use(bodyParser());

// async function fn() {
//     var a = 34;
//     var b = 10;
//     var c = a + b;
//     return c;
// }

// app.get('/', (req, res, next) => {
//     console.log("Get Data");
//     fn().then((result) => {
//         var sum = {
//             c: result,
//         }
//         console.log(sum);
//         res.render('./index.ejs', {
//             title: new Date().toDateString(),
//             sum: JSON.stringify(sum.c)
//         });
//     })


// });

// module.exports = app