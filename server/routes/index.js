var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/',function(req, res) {
    errors : req.flash('error');
    res.render('index', { title: 'Express', errors : req.flash('error') });
});

module.exports = router;