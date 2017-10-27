var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', page_name: 'login', role_user: 'User' });
});

const fakeUser = {email: 'test@test.fr', password: 'test'};

/* POST home page. */
router.post('/', function(req, res, next) {
 if(!req.body){
   console.log('login poste', req.body);
   res.sendStatus(500);
 }else{
   if(fakeUser.email === req.body.email && fakeUser.password === req.body.password){
     res.json({
       test : 'heureux'
     })
   }
 }
  res.render('login', { title: 'Login' });
});

module.exports = router;  