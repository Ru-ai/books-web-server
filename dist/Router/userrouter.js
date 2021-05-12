"use strict";
var express = require('express');
var router = express.Router();
var usercontroller = require('../Controller/usercontroller');
router.post('/signup', usercontroller.signup);
router.post('/login', usercontroller.login);
// router.get('/',usercontroller.getAlluser)
module.exports = router;
