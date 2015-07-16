var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/two', function(req, res, next) {
  res.render('two', { title: 'Page Two' });
});

/* GET home page. */
router.get('/three', function(req, res, next) {
  res.render('three', { title: 'Page Three' });
});

module.exports = router;
