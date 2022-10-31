var express = require('express');
var router = express.Router();
/* GET teacher listing. */
router.get('/', function(req, res, next) {
    res.send('Show teacher New dashboard');
});
module.exports = router;