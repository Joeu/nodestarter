var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EstablishmentSchema = new mongoose.Schema({
    name: String,
    category: String,
    address: String,
    login: String,
    email: String,
    password: String,
    clients: [],
    attended: [],
    canceled: [],
    phone: String,
    admin: Boolean,
    attendingTime: Number,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Establishment', EstablishmentSchema);