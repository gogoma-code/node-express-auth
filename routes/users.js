var express = require('express');
var router = express.Router();

router.post('/login_process', (req, res, next) => {
  let post = req.body;

  let email = post.email;
  let password = post.password;
  let expires_year = 60 * 60 * 24 * 365;
  
  req.session.is_logined = true;
  req.session.ss_email = email; 

  req.session.save(function () {
    res.redirect(`/`);
  });
});

router.get('/logout_process', (req, res, next) => {
  req.session.destroy(function(err){
    res.redirect('/');
  });
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('users/login', { title: 'Express - Login' });
});

module.exports = router;
