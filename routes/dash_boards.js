var express = require('express');
var router = express.Router();

var listBoards  = [
  { picto: "aspect_ratio", categorie: "Board1", content: "" },
  { picto: "aspect_ratio", categorie: "Board2", content: "" },
  { picto: "aspect_ratio", categorie: "Board3", content: ""}
];

var articles  = [
  { image: "./images/sample-1.jpg", title: 'Titre article', description: 'Here is some more information about this product that is only revealed once clicked on.' },
  { image: "./images/sample-1.jpg", title: 'Titre', description: 'Here is some more information about this product.' },
  { image: "./images/sample-1.jpg", title: 'Titre d\'article', description: 'Here is some more.' },
  { image: "./images/sample-1.jpg", title: 'Titre article', description: 'Here is some more information about this product that is only.' },
  { image: "./images/sample-1.jpg", title: 'Titre new article', description: 'Here is some more information about this product that is only revealed once clicked on.' },
  { image: "./images/sample-1.jpg", title: 'Titre article', description: 'Here is some more information about this.' },
  { image: "./images/sample-1.jpg", title: 'Titre article', description: 'Here is some more information about this product that is only revealed once clicked on.' },
];

JSON.stringify(listBoards, articles);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dash_boards', { title: 'Boards',articles: articles, listBoards: listBoards , page_name: 'boards', role_user: 'Admin' });
});

module.exports = router;
