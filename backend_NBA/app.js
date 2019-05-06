var express = require('express');
var app = express();
var cors = require('cors');
var nbaDataController = require('./controllers/nbaDataController');

//CORS Access lift (we eventually want to add security using JWT and whitelist our platforms)
app.use(cors());

//Include Controller Routes
app.use('/nba', nbaDataController);

app.all('*', function(req, res){
    res.status(404).send('Not here bro')
})

module.exports = app;