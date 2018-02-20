var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Local Imports
var userdata = require('./routes/userdata');
var api = require('./routes/api');
require('dotenv').config(); // load env vars

var app = express();


//Connect to MongoDB
// mongoose.connect('');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log("Connection open");
});

mongoose.connection.on('error', (err) => {
  console.log("Mongoose connection error");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/userdata', userdata);
app.use('/api', api);

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
