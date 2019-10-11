var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var joinCustomerRouter = require('./routes/JoinCustomer');
var loginRouter = require('./routes/Login');
var joinProducerRouter = require('./routes/JoinProducer');
var chargeRouter = require('./routes/Charge');
var joinAgencyRouter = require('./routes/JoinAgency');
var balanceRouter = require('./routes/Balance');

var app = express();

var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
  console.log('connected to mongod server');
});

mongoose.connect('mongodb://localhost/main');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/customer',joinCustomerRouter);
app.use('/login',loginRouter);
app.use('/producer',joinProducerRouter);
app.use('/charge',chargeRouter);
app.use('/agency',joinAgencyRouter);
app.use('/balance',balanceRouter);

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
