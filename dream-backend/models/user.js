// libs and things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    // is an admin?
    admin: { type: Boolean, required: true, default: false },

    // mentor/mentee?
    state: { type: Number, required: true, default: 0 },
    isMentor: { type: Boolean, required: true, default: false },
    menteeApp: { type: String },
    mentorApp: { type: String },

    // login info
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // user relations in this system
    relations: [{type: String}],
    
    created_at: Date,
    updated_at: Date
});

userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
  // change the updated_at field to current date
  this.updated_at = currentDate;
  next();
});

var User = mongoose.model('User', userSchema);
module.exports = User;
