var express = require('express');
var router = express.Router();

router.use('/', require('./index'));
router.use('/component1', require('./component1.routes.js'));
router.use('/component2', require('./component2.routes.js'));

module.exports = router;
