var mongoose = require('mongoose');
var use=new mongoose.Schema({
    name: {type:String},
    login_name: {type:String},
    password: {type:String},
    status: {type:Number},
    user_type: {type:Number}
})
var User = mongoose.model('user', use);
module.exports = User;