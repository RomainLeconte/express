var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var boards  = [
    { title: 'Titre article', description: 'Here is some more information about.', pins: "22", repins: "24" },
    { title: 'Titre', description: 'Here is some more information about this product.', pins: "2", repins: "60" },
    { title: 'Titre d\'article', description: 'Here is some more.', pins: "182", repins: "64" },
    { title: 'Titre article', description: 'Here is some more information about this.', pins: "18", repins: "52" },
    { title: 'Titre new article', description: 'Here is some more information.', pins: "2", repins: "38" },
    { title: 'Titre article', description: 'Here is some more information about this.', pins: "22", repins: "64" },
    { title: 'Titre article', description: 'Here is some more information about.', pins: "14", repins: "4" },
];

JSON.stringify(boards);

  res.render('boards', { title: 'Boards', boards : boards, page_name: 'boards' });
});

module.exports = router;
