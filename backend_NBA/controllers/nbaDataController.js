const axios = require('axios');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


router.use(bodyParser.json());

// const { execSync } = require('child_process');

router.get('/', function (req, res) {
  axios
  .get(`http://data.nba.net/10s/prod/v1/2018/players.json`)
  .then(response => {
    res.send(response.data);
  })
    .catch(err => console.log(err));
})


router.get('/teams', function (req, res) {
  axios
  .get(`http://data.nba.net/10s/prod/v2/2018/teams.json`)
  .then(response => {
    res.send(response.data);
  })
    .catch(err => console.log(err));
})

router.post('/player', function (req, res) {
  console.log(req.body.id);
  axios
  .get(`http://data.nba.net/10s/prod/v1/2018/players/${req.body.id}_profile.json`)
  .then(response => {
    res.send(response.data);
  })
    .catch(err => console.log(err));
})

module.exports = router;

