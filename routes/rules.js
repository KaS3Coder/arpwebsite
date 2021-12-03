var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rules', function(req, res, next) {
  res.render('rules', { title: 'Express' });
});

module.exports = router;