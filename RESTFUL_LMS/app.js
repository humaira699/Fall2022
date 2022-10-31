var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LMS');
// connection.then((db) => {
//   console.log("Connected");
// }, (err)=>{
//   console.log(err);
// });
//end
var indexRouter = require('./routes/index');
var stdRouter = require('./routes/student');
var userRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var teacherRouter = require('./routes/teachers');
var teacherNewRouter = require('./routes/teacherNew');
// var studentRouter = require('./routes/students');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/student', stdRouter);
app.use('/users', userRouter);
app.use('/admin', adminRouter);
app.use('/teacher', teacherRouter);
app.use('/teacherNew', teacherNewRouter);
//app.use('/students', studentRouter);
// app.use('/head', headRouter);

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
