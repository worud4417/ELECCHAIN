/**
 * bank example server
 * use REST api
 * use mongodb, MUST install mongodb 
 * @project ELECCHAIN
 * @author JaeGyeong Lee
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// connect module for mongodb
var mongoose = require('mongoose')

// create and save the rolor account
var setRoleRouter = require('./routes/SetRole');
// transaction between roles
var transactionRouter = require('./routes/Transaction');

var app = express();

var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
  console.log("connected to mongod server");
});

mongoose.connect('mongodb://localhost/bank');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set router
app.use('/role',setRoleRouter);
app.use('/transaction',transactionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
