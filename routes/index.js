var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); 

/*

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/', (req, res) => {
  res.render('content');
});

*/ 

module.exports = router;
