var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inscription', { title: 'Inscription', page_name: 'inscription', role_user: 'User' });
});

module.exports = router;
