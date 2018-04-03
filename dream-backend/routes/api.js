var express = require('express');
var router = express.Router();

const register = require('../controllers/register');
const login = require('../controllers/login');
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const application = require('../controllers/application');

router.use('/login', login);
router.use('/register', register);
router.use('/token', auth);
router.use('/users', users);
router.use('/application', application);

module.exports = router;
