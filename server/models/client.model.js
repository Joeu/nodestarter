var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ClientSchema = new mongoose.Schema ({
        name: String,
        login: String,
        avatar: String,
        password: String,
        tokenGCM: String,
        establishments: [],
        requestedHour: String,
        requestHour: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);