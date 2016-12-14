var express = require('express');
var router = express.Router();

router.use('/', require('./index'));
router.use('/client', require('./client.routes'));
router.use('/establishment', require('./establishment.routes'));

module.exports = router;
