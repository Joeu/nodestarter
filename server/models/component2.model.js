var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var Component1Schema = new mongoose.Schema({
    field1: String
});

module.exports = mongoose.model('Component1', Component1Schema);