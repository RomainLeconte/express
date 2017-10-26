var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var profileCat  = [
    { picto: "filter_drama", categorie: "Mes Informations", content: "" },
    { picto: "place", categorie: "Mes Notifications", content: "" },
    { picto: "whatshot", categorie: "Mes paramètres", content: ""}
];

JSON.stringify(profileCat);

  res.render('profile', { title: 'Profile', profileCat: profileCat });
});

module.exports = router;
