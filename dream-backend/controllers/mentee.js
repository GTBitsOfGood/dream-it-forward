const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();

const User = require('../models/user.js');

router.post('/apply', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ status: 'invalid body' });
    }

    jwt.verify(req.body.token, process.env.SECRET, function (err, decoded) {
        if (err) return res.json({ status: 'invalid' });
        else {
            var query = User.where({ username: decoded.username });
            query.findOne(function (err, user) {
                if (err) return res.status(200).json({ status: 'Unable to find user' });
                if (user) {
                    user.menteeApp = JSON.stringify(req.body.menteeApp);
                    user.isMentor = false;
                    user.state = 1;
                    user.save((err) => {
                        if (err) {
                            return res.status(200).json({ status: 'user creation failed' });
                        }
                        return res.status(200).json({ status: 'success' });
                    });
                } else {
                    return res.json({ status: 'Unable to find user' });
                }
            });
        }
    });



});

module.exports = router;