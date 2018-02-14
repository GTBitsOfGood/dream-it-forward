// libs and things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    // is an admin?
    admin: Boolean,
    // mentor/mentee?
    isMentor: Boolean,
    // login info
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // personal meta
    meta: {
        name: String,
        alias: String,
        age: Number,
        location: String,
        hobby: [{type: String}],
    },
    created_at: Date,
    updated_at: Date
});

var User = mongoose.model('User', userSchema);
module.exports = User;
