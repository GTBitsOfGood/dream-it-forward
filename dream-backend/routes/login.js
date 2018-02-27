const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('../models/user.js');

router.post('/', function (req, res, next) {
    if (!req.body || !req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({status: 'invalid body'});
    }
    var query = User.where({ username: req.body.username });
    query.findOne(function (err, user) {
        if (err) return res.status(400).json({ status: 'Unable to find user' });
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, res) {
                if (res) {
                    jwt.sign({ username: req.body.username }, process.env.SECRET, function (err, token) {
                        return res.status(200).json({ token: token });
                    });
                } else {
                    return res.status(400).json({ status: 'password doesn\'t match' });
                }
            });
        } else {
            return res.status(400).json({ status: 'Unable to find user' });
        }
    });
});

module.exports = router;