var express = require('express');
var router = express.Router();

var userDB = require('../db/user');

router.post('/login_process', (req, res, next) => {
  let post = req.body;

  let email = post.email;
  let password = post.password;

  userDB.auth(email, password, function (err, user) {
    if (err) {
      if (err.message == 'not exist rows') { // login failed
        res.status(401).send("login failed");
      } else { // another error
        res.status(400).send("error !!");
      }
    } else {
      req.session.is_logined = true;
      req.session.ss_email = email;

      req.session.save(function () {
        res.redirect(`/`);
      });
    }
  });
});

router.get('/logout_process', (req, res, next) => {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('users/login', { title: 'Express - Login' });
});

module.exports = router;
