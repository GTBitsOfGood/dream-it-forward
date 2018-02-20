var express = require('express');
var router = express.Router();
const User = require('../models/user.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const saltRounds = 10;

router.post('/login', function (req, res, next) {
    var query = User.where({ username: req.body.username });
    query.findOne(function (err, user) {
        if (err) return res.status(400).json({ status: 'Unable to find user' });
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, res) {
                if (res) {
                    jwt.sign({ username: req.body.username }, function (err, token) {
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
