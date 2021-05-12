"use strict";
var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.json()); //body data is converted to json
app.use('/book', require('./Router/router'));
app.use('/user', require('./Router/userrouter'));
var DB = "mongodb+srv://rutu:rutu1818@cluster0.ojqal.mongodb.net/booksapp?retryWrites=true&w=majority";
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(function () { console.log("Connected"); })
    .catch(function (err) { return console.log("Error"); });
app.listen(4000 || process.env.port, function () {
    console.log("Listening");
});
