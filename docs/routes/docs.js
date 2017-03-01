var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.send('Docs page');
});

router.get('/readme', function(req, res) {
  res.send('readme.md');
});

router.get('/summary', function(req, res) {
  res.send('summary.md');
});

router.get('*', function(req, res) {
  res.send('Error: incorrect route');
});

module.exports = router;
