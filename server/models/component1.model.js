var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

var Component1Schema = new Schema ({
    name: String
});

module.exports = mongoose.model('Component1', Component1Schema);