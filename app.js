var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./app_api/models/db');

var index = require('./app_server/routes/index');
var s1 = require('./app_server/routes/one');
var s2 = require('./app_server/routes/two');
var s3 = require('./app_server/routes/three');
var s4 = require('./app_server/routes/four');
var s5 = require('./app_server/routes/five');
//var s6 = require('./app_server/routes/six');
//var s7 = require('./app_server/routes/seven');

//var routesApi = require('./app_api/routes/index');
//var test = require('./app_test/routes/test');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
//app.set('views', path.join(__dirname, 'app_test', 'views'));

app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/future', index);
app.use('/sampleone', s1);
app.use('/sampletwo',s2);
app.use('/samplethree', s3);
app.use('/samplefour', s4);
app.use('/samplefive', s5);
//app.use('/samplesix', s6);
//app.use('/sockhunt', s7);

//app.use('/api', routesApi);

//app.use('/test', test);
app.get('/',(req,res) => {
  res.render('newyang');
});
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
