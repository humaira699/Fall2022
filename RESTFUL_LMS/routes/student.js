var express = require('express');
var router = express.Router();
/* GET students listing. */
router.get('/', function(req, res, next) {
    res.send('Student router');
});
router.get('/6B', function(req, res, next) {
    res.send('Student of 6B section');
});
router.get('/7A', function(req, res, next) {
    res.send('Student of 7A section');
});
module.exports = router;