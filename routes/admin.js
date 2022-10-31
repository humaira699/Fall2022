var express = require('express');
var router = express.Router();
var teacherM = require('../models/teacher');
var studentM = require('../models/student');
var adminM = require('../models/admin');
var classM = require('../models/class');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Show DashBoard');
  });
//Add new teacher, student, class
router.post('/addTeacher', function(req, res, next) {
    
    // var obj = new teacherM(req.body);
    // obj.save(function (err, t){
    //     res.statusCode = 200;
    //     res.setHeader('content-type', 'application/json');
    //     res.json(t);
    // });
    teacherM.create(req.body, function(err, t){
        if(err)
            res.statusCode = 500;
        else
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.json(t);
    });
});
router.post('/addStudent', function(req, res, next) {
    studentM.create(req.body, function(err, t){
        if(err)
            res.statusCode = 500;
        else
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.json(t);
    });
});
router.post('/addClass', function(req, res, next) {
    classM.create(req.body, function(err, t){
        if(err)
            res.statusCode = 500;
        else
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.json(t);
    });
});
// view teachers, students, classes list
router.get('/Classes', function(req, res, next) {
    classM.find({}).populate('Teacher').populate('Student.id').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
    
});
router.get('/Students', function(req, res, next) {
    res.send('View Students');
});
router.post('/Teachers', function(req, res, next) {
    res.send('View Teacher');
});
//Update teacher, student, class
router.put('/teacher/:id', function(req, res, next) {
    res.send('Update Teacher');
});
router.put('/class/:id', function(req, res, next) {
    res.send('Update Class');
});
router.put('/student/:id', function(req, res, next) {
    res.send('Update Student');
});
//Delete Teacher, Class, Student
router.delete('/teacher/:id', function(req, res, next) {
    res.send('Delete Teacher');
});
router.delete('/student/:id', function(req, res, next) {
    res.send('Delete Student');
});
router.delete('/class/:id', function(req, res, next) {
    res.send('Delete Class');
});
//assign teacher, student -> class
router.put('/assignteacher/:id', function(req, res, next) {
    res.send('Assign teacher to class');
});
router.put('/assignstudent/:id', function(req, res, next) {
    res.send('Add Students to class');
});
  
module.exports = router;