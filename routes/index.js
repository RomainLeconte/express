var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var articles  = [
    { image: "./images/sample-1.jpg", title: 'Titre article', description: 'Here is some more information about this product that is only revealed once clicked on.' },
    { image: "./images/sample-1.jpg", title: 'Titre', description: 'Here is some more information about this product.' },
    { image: "./images/sample-1.jpg", title: 'Titre d\'article', description: 'Here is some more.' },
    { image: "./images/sample-1.jpg", title: 'Titre article', description: 'Here is some more information about this product that is only.' },
    { image: "./images/sample-1.jpg", title: 'Titre new article', description: 'Here is some more information about this product that is only revealed once clicked on.' },
    { image: "./images/sample-1.jpg", title: 'Titre article', description: 'Here is some more information about this.' },
    { image: "./images/sample-1.jpg", title: 'Titre article', description: 'Here is some more information about this product that is only revealed once clicked on.' },
];

JSON.stringify(articles);

  res.render('index', { title: 'Pinterest', articles: articles, page_name: 'index', role_user: 'User' });
});

module.exports = router;
