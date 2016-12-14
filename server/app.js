var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var flash = require('connect-flash');

var app = express();

var server = require('http').Server(app);

var routes = require('../server/routes/routes');

// client setup
app.set('views', '../client-web/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(flash());

// configuring assets route
app.use(express.static('../client-web/assets'));
app.use(express.static('../client-web/node_modules'));
app.use(express.static('../client-web/'));
// app.use(express.static('../client-web/bower_components'));

app.use('/',  routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// Connect to the db
// mongoose.connect('mongodb://localhost:27017/nodestarter', function(err, db) {
//     if(err) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     } else {
//         console.log("nodestarter connected");
//         //mongoose.connection.db.dropDatabase();
//     }
// });

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//     if (req.method == 'OPTIONS') {
//         res.status(200).end();
//     } else {
//         next();
//     }
// });

// module.exports = app;
module.exports = {app: app, server: server};