var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page: 'home' });
});

router.get('/fundamentals', function(req, res, next) {
  res.render('index', {page: 'fundamentals' });
});

router.get('/layout', function(req, res, next) {
  res.render('index', {page: 'layout' });
});

router.get('/components', function(req, res, next) {
  res.render('index', {page: 'components' });
});

module.exports = router;
