var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', page_name: 'login', role_user: 'User' });
});

const fakeUser = {email: 'test@test.fr', password: 'test'};
const secret = 'YUN2&-4(-FBVdfz&h_C(4D6(-__46yrtyty5y';

/* POST home page. */
router.post('/', function(req, res, next) {
 if(!req.body){
   console.log('login poste', req.body);
   res.sendStatus(500);
 }else{
   if(fakeUser.email === req.body.email && fakeUser.password === req.body.password){
    const token = jwt.sign({iss:'http://site.fr', user:'Sam', role:'user'}, secret);
    res.json(token);
   }else{
     res.sendStatus(401);
   }
 }
  res.render('login', { title: 'Login' });
});

module.exports = router;