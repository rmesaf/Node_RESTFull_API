// Dependencies
var express =  require('express');
var router = express.Router();

// Models
var user =  require('../models/user');

// Routes
user.methods(['get', 'post', 'put', 'delete']);
user.register(router, '/users');

// Router
module.exports = router;