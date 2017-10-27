var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard', page_name: 'Dashboard', role_user: 'Admin' });
});

module.exports = router;