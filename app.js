var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var config = require('./config')
require('./models/db');

var signUp = require('./routes/signup');
var login = require('./routes/login');
var hotels = require('./routes/hotels');
var app = express();

app.set('superSecret', config.secret);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/v1/signup', signUp);
app.use('/api/v1/login', login);
app.use('/api/v1/hotels', hotels);

module.exports = app;
