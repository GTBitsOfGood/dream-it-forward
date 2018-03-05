var express = require('express');
var router = express.Router();

const register = require('../controllers/register');
const login = require('../controllers/login');
const auth = require('../controllers/auth');
const users = require('../controllers/users');

router.use('/login', login);
router.use('/register', register);
router.use('/token', auth);
router.use('/users', users);

module.exports = router;
