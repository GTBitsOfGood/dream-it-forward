var express = require('express');
var router = express.Router();

const register = require('../controllers/register');
const login = require('../controllers/login');

router.use('/login', login);
router.use('/register', register);

module.exports = router;
