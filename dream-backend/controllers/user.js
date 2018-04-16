const express = require('express');
const router = express.Router();
require('dotenv').config();

const User = require('../models/user.js');

router.get('/state', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ status: 'invalid body' });
    }

    jwt.verify(req.query.token, process.env.SECRET, function (err, decoded) {
        if (err) return res.json({ status: 'invalid' });
        else {
            var query = User.where({ username: decoded.username });
            query.findOne(function (err, user) {
                if (err) return res.status(200).json({ status: 'Unable to find user' });
                if (user) {
                    return res.json({
                        type: user.state,
                        isAdmin: user.admin
                    })
                } else {
                    return res.json({ status: 'Unable to find user' });
                }
            });
        }
    });



});

module.exports = router;