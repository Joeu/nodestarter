var express = require('express');
var router = express.Router();

var Comp1 = require('../models/component1.model');

router.get('/', function (req, res) {
    Comp1.findAsync().then(function (items1) {
        res.json(items1);
    })
        .error(console.error);
});

module.exports = router;