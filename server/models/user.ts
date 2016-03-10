import mongoose = require('mongoose');

// DEFINE THE OBJECT SCHEMA
var userSchema = new mongoose.Schema ({
   created: {
       type: Date,
       default:Date.now
   } ,
   username: {
       type: String,
       default: '',
       trim: true,
       required: 'Username is required'
   },
   email: {
       type: String,
       default: '',
       trim: true,
       required: 'Email is required'
   },
   password: {
       type: String,
       default: '',
       trim: true,
       required: 'password is required'
   },
   repassword: {
       type: String,
       default: '',
       trim: true,
       required: 'Email is required'
   }
});

// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
export var User = mongoose.model('User', userSchema);