"use strict";
var mongoose = require("mongoose");
var User = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        unique: true,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model('User', User);
