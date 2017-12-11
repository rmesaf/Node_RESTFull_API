
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// MongoDB
mongoose.connect('mongodb://localhost/DummyDB');

// Express
var app = express();
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());


// Routes
app.use('/api', require('./routes/api'));


// Server
app.listen(3000);
console.log('API listening in port 3000');
