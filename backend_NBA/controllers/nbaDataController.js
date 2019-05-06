var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());
const { execSync } = require('child_process');

router.get('/', function (req, res) {
  let data = execSync('./getData.sh');
  res.send(data);
})

module.exports = router;

