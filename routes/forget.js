var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('forget', { title: 'Forget', page_name: 'forget', role_user: 'User' });
});

module.exports = router;
