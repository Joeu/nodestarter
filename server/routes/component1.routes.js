var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json("OK! Component 1");
});

module.exports = router;