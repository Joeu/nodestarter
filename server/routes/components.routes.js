var express = require('express');
var router = express.Router();

var Comp1 = require('../models/component1.model');
var Comp2 = require('../models/component2.model');

router.get('/', function (req, res) {
    Comp1.findAsync().then(function (items1) {
        return Comp2.findAsync().then(function (items2) {
            return res.json({comp1: items1, comp2: items2});
        })
    })
        .error(console.error);
});

module.exports = router;