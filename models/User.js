const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type:String, required:true, min:3, max:50},
    email: {type:String, required:true, min:3, max:50},
    PWDhash: {type:String, required:true, min:6, max:20},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema)