var express = require('express');
var router = express.Router();

var Comp2 = require('../models/component2.model');

router.get('/', function (req, res) {
    Comp2.findAsync().then(function (items1) {
        res.json(items1);
    })
        .error(console.error);
});

module.exports = router;