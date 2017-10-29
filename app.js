var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var index = require('./routes/index');
var profile = require('./routes/profile');
var boards = require('./routes/boards');
var inscription = require('./routes/inscription');
var login = require('./routes/login');
var forget = require('./routes/forget'); 

var dashboard = require('./routes/dashboard');
var dash_users = require('./routes/dash_users');
var dash_boards = require('./routes/dash_boards');
var dash_images = require('./routes/dash_images');

var app = express();

var secret = 'YUN2&-4(-FBVdfz&h_C(4D6(-__46yrtyty5y';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressJwt({ secret: secret}).unless({path: ['/', '/login', '/forget', '/inscription']}));

app.use('/', index);
app.use('/profile', profile);
app.use('/boards', boards);
app.use('/login', login);
app.use('/inscription', inscription);
app.use('/forget', forget);

app.use('/administration', dashboard);
app.use('/administration-users', dash_users);
app.use('/administration-boards', dash_boards);
app.use('/administration-images', dash_images);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
