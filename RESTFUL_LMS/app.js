var mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var studentRouter = require('./routes/student');
var teacherRouter = require('./routes/teacher');
var headRouter = require('./routes/head');
var cors = require('cors')
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require("passport");
var authenticate = require('./authenticate');

var session = require('express-session');
var FileStore = require('session-file-store')(session);
// Session file store is a provision for storing session data in the session file

const connection = mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true });
var app = express();
connection.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Authentication using passport and passport-local-mongoose
app.use(session({
    name: 'session-id',
    secret: '12345-67890-09876-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
  }));
app.use(passport.initialize());
app.use(passport.session());

//app.use('/', indexRouter);
//app.use('/user', usersRouter);

//function authorize (req, res, next) {
//    console.log(req.user);
//    if (!req.user) {        
//        var err = new Error('You are not authenticated!');
//        err.status = 403;
//        return next(err);    
//    }
//    else {
//        next();
//  }
//}

//signing up and logging in where the username is stored in db
// app.use(session({
//     name: 'session-id',
//     secret: '12345-67890-09876-54321',
//     saveUninitialized: false,
//     resave: false,
//     store: new FileStore()
//   }));
// app.use('/', indexRouter);
// app.use('/user', usersRouter);  

// function authorize (req, res, next) {
//     console.log(req.session);  
//     if (!req.session.user) {        
//         var err = new Error('You are not authenticated!');
//         err.status = 401;
//         return next(err);    
//     }        
//     else {
//         if (req.session.user === 'authenticated') {
//             next();
//         }
//         else {
//             var err = new Error('You are not authenticated!');
//             err.status = 401;
//             return next(err);
//         }
//     }
// }
// ============
//using sessions
// app.use(session({
//     name: 'session-id',
//     secret: '12345-67890-09876-54321',
//     saveUninitialized: false,
//     resave: false,
//     store: new FileStore()
//   }));
  
//   function authorize (req, res, next) {
//       console.log(req.session);  
//       if (!req.session.user) {
//           var authHeader = req.headers.authorization;
//           if (!authHeader) {
//               var err = new Error('You are not authenticated!');
//               res.setHeader('WWW-Authenticate', 'Basic');                        
//               err.status = 401;
//               next(err);
//               return;
//           }
//           var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
//           var user = auth[0];
//           var pass = auth[1];
//           if (user == 'admin' && pass == 'password') {
//               req.session.user = 'admin';
//               next(); // authorized
//           } else {
//               var err = new Error('You are not authenticated!');
//               res.setHeader('WWW-Authenticate', 'Basic');
//               err.status = 401;
//               next(err);
//           }
//       }
//       else {
//           if (req.session.user === 'admin') {
//               console.log('req.session: ',req.session);
//               next();
//           }
//           else {
//               var err = new Error('You are not authenticated!');
//               err.status = 401;
//               next(err);
//           }
//       }
//   }
// // using cookies
// app.use(cookieParser('12345-67890-09876-54321'));
// function authorize(req, res, next){
//     console.log(req.signedCookies);
//     if(!req.signedCookies.user){    
//         var authorizeHeader = req.headers.authorization;
//         if(!authorizeHeader){
//             var err = new Error("You are not authenticated");
//             res.setHeader('WWW-Authenticate', 'Basic');
//             err.status = 401;
//             next(err);
//         }
//         var auth = new Buffer.from(authorizeHeader.split(' ')[1],'base64').toString().split(':');
//         var username = auth[0];
//         var password = auth[1];
//         if(username=='admin' && password=='cs7'){
//             res.cookie('user','admin',{signed: true});
//             next();
//         }
//         else{
//             var err = new Error("Your are not authenticated");
//             res.setHeader('WWW-Authenticate', 'Basic');
//             err.status = 401;
//             next(err);
//         }
//     }
//     else{
//         if(req.signedCookies.user=='admin'){
//             next();
//         }
//         else{
//             var err = new Error("Your are not authenticated");
//             err.status = 401;
//             next(err);
//         }
//     }
// }

// Basic authentication
// function authorize(req, res, next){
//     console.log(req.headers);
//     var authorizeHeader = req.headers.authorization;
//     if(!authorizeHeader){
//         var err = new Error("You are not authenticated");
//         res.setHeader('WWW-Authenticate', 'Basic');
//         err.status = 401;
//         next(err);
//     }
//     var auth = new Buffer.from(authorizeHeader.split(' ')[1],'base64').toString().split(':');
//     var username = auth[0];
//     var password = auth[1];
//     if(username=='admin' && password=='cs7'){
//         next();
//     }
//     else{
//         var err = new Error("Your are not authenticated");
//         res.setHeader('WWW-Authenticate', 'Basic');
//         err.status = 401;
//         next(err);
//     }
// }
// app.use(authorize);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/user', usersRouter);  
app.use('/head', headRouter);
app.use('/teacher', teacherRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);

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