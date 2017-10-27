var express = require('express');
var router = express.Router();

var Users  = [
  { id: "001", firstName: "Tiago", lastName: "Arti", dateInscription: "12/03/2010", boards : "22", images : "100", status : "online" , icon: "fiber_manual_record" },
  { id: "002", firstName: "Carlos", lastName: "Malo", dateInscription: "12/03/2010", boards : "22", images : "100", status : "offline" , icon: "do_not_disturb_alt" },
  { id: "003", firstName: "Victor", lastName: "Furtu", dateInscription: "12/03/2010", boards : "22", images : "100", status : "online" , icon: "fiber_manual_record" },
  { id: "004", firstName: "Robnan", lastName: "Resh", dateInscription: "12/03/2010", boards : "22", images : "100", status : "offline" , icon: "do_not_disturb_alt" },
  { id: "005", firstName: "Romain", lastName: "Fureur", dateInscription: "12/03/2010", boards : "22", images : "100", status : "offline" , icon: "do_not_disturb_alt" },
  { id: "006", firstName: "Maxime", lastName: "Tisti", dateInscription: "12/03/2010", boards : "22", images : "100", status : "online" , icon: "fiber_manual_record" },
  { id: "007", firstName: "Marie-Claire", lastName: "Junus", dateInscription: "12/03/2010", boards : "22", images : "100", status : "offline" , icon: "do_not_disturb_alt" },
  { id: "008", firstName: "Justine", lastName: "Fost", dateInscription: "12/03/2010", boards : "22", images : "100", status : "online" , icon: "fiber_manual_record" },
  { id: "009", firstName: "Fabienne", lastName: "Carlis", dateInscription: "12/03/2010", boards : "22", images : "100", status : "offline" , icon: "do_not_disturb_alt" }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dash_users', { title: 'Users',Users : Users, page_name: 'users', role_user: 'Admin' });
});

module.exports = router;
