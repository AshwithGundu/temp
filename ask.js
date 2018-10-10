const express = require('express')
const path = require('path')
const app = express()
const routes = require('./controllers')

app.set('port', (process.env.PORT || 8800));
app.set('views', path.join(__dirname, '/views'))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules/')))
app.use(express.static(__dirname + '/ask_assets/'))
app.use('/', routes)

// Start node server
app.listen(app.get('port'), function () {
    console.log('Node server is running on port ' + app.get('port'));
});