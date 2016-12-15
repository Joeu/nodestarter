var express = require('express');
var router = express.Router();

var Comp1 = require('../models/component1.model');

router.get('/', function (req, res) {
    Comp1.findAsync().then(function (items) {
        console.log("Finding async");
       res.json(items);
    }).error(console.error);
});

module.exports = router;