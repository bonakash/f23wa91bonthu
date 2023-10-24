var express = require('express');
var router = express.Router();

/* GET Akash Bonthu data. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Akash Bonthu' });
});

module.exports = router;
