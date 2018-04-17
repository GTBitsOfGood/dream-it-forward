var express = require('express');
var router = express.Router();

const register = require('../controllers/register');
const login = require('../controllers/login');
const auth = require('../controllers/auth');
const mentee = require('../controllers/mentee');
const mentor = require('../controllers/mentor');
const user = require('../controllers/user');
const match = require('../controllers/match');

router.use('/login', login);
router.use('/register', register);
router.use('/token', auth);
router.use('/mentee', mentee);
router.use('/mentor', mentor);
router.use('/user', user);
router.use('/match', match);

module.exports = router;
