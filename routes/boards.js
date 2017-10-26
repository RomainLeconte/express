var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var boards  = [
    { title: 'Titre article', description: 'Here is some more information about this product that is only revealed once clicked on.', pins: "22", repins: "64" },
    { title: 'Titre', description: 'Here is some more information about this product.', pins: "2", repins: "64" },
    { title: 'Titre d\'article', description: 'Here is some more.', pins: "182", repins: "64" },
    { title: 'Titre article', description: 'Here is some more information about this product that is only.', pins: "18", repins: "64" },
    { title: 'Titre new article', description: 'Here is some more information about this product that is only revealed once clicked on.', pins: "2", repins: "64" },
    { title: 'Titre article', description: 'Here is some more information about this.', pins: "22", repins: "64" },
    { title: 'Titre article', description: 'Here is some more information about this product that is only revealed once clicked on.', pins: "14", repins: "64" },
];

JSON.stringify(boards);

  res.render('boards', { title: 'Boards', boards : boards });
});

module.exports = router;
