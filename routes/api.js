var express = require('express');
var router = express.Router();
const usersCtrl = require('../controller/api/users')

/* GET users listing. */
router.post('/signup', usersCtrl.signup);
// router.post('/login', usersCtrl.login);

module.exports = router;
