var express = require('express');
var router  = express.Router();

router.get('/readme.md', function(req, res) {
  res.render('docs/README.md')
});
