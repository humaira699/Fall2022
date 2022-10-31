var express = require('express');
var router = express.Router();
/* GET students listing. */
router.get('/', function(req, res, next) {
    res.send('Show students dashboard');
});
// router.get('/students', function(req, res, next) {
//     res.send('Show students list');
// });
// //Create student
// router.post('/student', function(req, res, next) {
//     res.send('Insert student');
// });
module.exports = router;