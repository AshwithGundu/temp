var express = require('express')
const app = express.Router()
var bodyParser = require('body-parser');
let nodemail = require('./mail');


app.use(bodyParser());

app.get('/', (req, res) => {
    console.log("Get Data");
    res.render('./index.ejs', {
        title: new Date().toDateString()
    });
});

app.post('/sendmail', nodemail.nm);

module.exports = app