const mongoose = require('mongoose');
const Schema = mongoose.Schema;     // alias for mongoose.Schema
const userSchema = new Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String }, 
},{timestamps: true}
 )
module.exports = mongoose.model('User', userSchema);
// User.find()