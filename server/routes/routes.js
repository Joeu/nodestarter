var express = require('express');
var router = express.Router();

router.use('/', require('./index'));
// router.use('/todo', require("./todo.routes"));

module.exports = router;
