var express = require('express');
var router = express.Router();

var Comp2 = require('../models/component2.model');

router.get('/', function (req, res) {
    Comp2.findAsync().then(function (items2) {
        res.json(items2);
    })
        .error(console.error);
});

router.post('/', function (req, res) {
    var item = new Comp2(req.body);
    item.save(function (err, itemSaved) {
        if (err){throw err;}
        else {res.json(itemSaved);}
    })
});

router.delete('/:id', function (req, res) {
   var id = req.params.id;
   Comp2.remove({_id: id}, function (err, rem) {
       if (err){ throw err; }
       rem = "Item deleted";
       console.log(rem);
       Comp2.findAsync().then(function (comps) {
           console.log(comps);
           res.json(comps);
       });
   });
   
});

module.exports = router;