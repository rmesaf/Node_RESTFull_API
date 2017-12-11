// Dependencias
var restfull =  require('node-restful');
var mongoose = restfull.mongoose;

//Schema
var usersSchema = new mongoose.Schema({
    name: String,
    lastname: String, 
    email: String,
    school: String,
    phone: String,
    birthdate: Date,
    token: String
});

// Model
module.exports = restfull.model('Users', usersSchema);