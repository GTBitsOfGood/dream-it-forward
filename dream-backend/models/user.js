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

    // user relations in this system
    relations: [{type: String}],

    // How did you hear about us?
    hearSource: String,

    // personal info
    meta: {
        name: {
            first: {type: String, trim: true},
            mid: {type: String, trim: true},
            last: {type: String, trim: true}
        },
        alias: {type: String, trim: true},
        email: {type: String, unique: true, trim: true},
        birthData: String,  // mm-dd-yyyy
        address: {
            primary: {type: String, trim: true},
            second: {type: String, trim: true},
            city: {type: String, trim: true},
            state: {type: String, trim: true},
            zipCode: {type: String, trim: true},
            nation: {type: String, trim: true}
        },
        grade: String,
        children: [{type: String, trim: true}],
        age: {type: Number, min: 0},
        location: {type: String, trim: true},
        hobby: [{type: String, trim: true}],
        sports: [{type: String, trim: true}]
    },

    // emergency contact information
    emergencyContact: {
        name: {type: String, trim: true},
        relationship: {type: String, trim: true},
        phoneNumber: {type: String, trim: true}
    },

    // medical information
    medialInfo: {
      doctorName: {type: String, trim: true},
      doctorPhone: {type: String, trim: true},
      doctorAddress: String,
      allergy: [{type: String, trim: true}]
    },

    // parent information
    // only applicable if user under 18
    parentInfo: {
        name: {type: String, trim: true},
        relationship: {type: String, trim: true},
        phoneNumber: {type: String, trim: true},
        email: {type: String, trim: true},
        address: {
            primary: {type: String, trim: true},
            second: {type: String, trim: true},
            city: {type: String, trim: true},
            state: {type: String, trim: true},
            zipCode: {type: String, trim: true},
            nation: {type: String, trim: true}
        },
        personAuthorized: String,  // person authorized to pick children
        phoneAuthorized: String    // phone number of that authorized person
    },
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
