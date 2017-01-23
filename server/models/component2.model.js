var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

var Component2Schema = new Schema({
    name: String
});

module.exports = mongoose.model('Component2', Component2Schema);