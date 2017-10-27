var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dash_boards', { title: 'Boards', page_name: 'boards', role_user: 'Admin' });
});

module.exports = router;
