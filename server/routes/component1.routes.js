var express = require('express');
var router = express.Router();

var Comp1 = require('../models/component1.model');

router.get('/', function (req, res) {
    Comp1.findAsync().then(function (items1) {
        res.json(items1);
    })
        .error(console.error);
});

router.post('/', function (req, res) {
    var item = new Comp1(req.body);
    item.save(function (err, itemSaved) {
        if (err){throw err;}
        else {res.json(itemSaved);}
    })
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    Comp1.remove({_id: id}, function (err, rem) {
        if (err){ throw err; }
        rem = "Item deleted";
        console.log(rem);
        Comp1.findAsync().then(function (comps) {
            console.log(comps);
            res.json(comps);
        });
    });

});

module.exports = router;