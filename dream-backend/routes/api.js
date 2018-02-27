var express = require('express');
var router = express.Router();

const register = require('../routes/register.js');
const login = require('../routes/login.js');

router.post('/login', login);

router.use('/register', register);

module.exports = router;
