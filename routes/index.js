var express = require('express');
var router = express.Router();
var login = require('../lib/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  console.log(req.session);
  res.render('index', {
    title: 'Express',
    loginStatusUI: login.loginStatusUI(req, res),
  })
});

module.exports = router;
