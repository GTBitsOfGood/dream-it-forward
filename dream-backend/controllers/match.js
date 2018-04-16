const express = require('express');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken')

const User = require('../models/user.js');

router.put('/', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ status: 'invalid body' });
    }
    let mentor = req.body.mentor;
    let mentee = req.body.mentee;
    jwt.verify(req.body.token, process.env.SECRET, function (err, decoded) {
        if (err) return res.json({ status: 'invalid' });
        else {
            var query = User.where({ username: decoded.username });
            query.findOne(function (err, user) {
                if (err) return res.json({ status: 'Unable to find user' });
                if (user && user.admin) {
                    let allMentors = User.where({ admin: false, state: 1, isMentor: true });
                    allMentors.find(function (err, users) {
                        if (err) res.json({ status: 'failed' });
                        return res.json({
                            mentors: users
                        })
                    })
                } else {
                    return res.json({ status: 'Unable to find user' });
                }
            });
        }
    });
});

module.exports = router;