const express = require('express');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken')

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
                        state: user.state,
                        isAdmin: user.admin,
                        isMentor: user.isMentor,
                        relations: user.relations
                    })
                } else {
                    return res.json({ status: 'Unable to find user' });
                }
            });
        }
    });
});

router.get('/mentees', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ status: 'invalid body' });
    }
    jwt.verify(req.query.token, process.env.SECRET, function (err, decoded) {
        if (err) return res.json({ status: 'invalid' });
        else {
            var query = User.where({ username: decoded.username });
            query.findOne(function (err, user) {
                if (err) return res.json({ status: 'Unable to find user' });
                if (user && user.admin) {
                    let allMentees = User.where({ admin: false, state: { $gt: 0 }, isMentor: false });
                    allMentees.find(function (err, users) {
                        if (err) res.json({ status: 'failed' });
                        return res.json({
                            mentees: users
                        })
                    })
                } else {
                    return res.json({ status: 'Unable to find user' });
                }
            });
        }
    });
});

router.get('/mentors', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ status: 'invalid body' });
    }
    jwt.verify(req.query.token, process.env.SECRET, function (err, decoded) {
        if (err) return res.json({ status: 'invalid' });
        else {
            var query = User.where({ username: decoded.username });
            query.findOne(function (err, user) {
                if (err) return res.json({ status: 'Unable to find user' });
                if (user && user.admin) {
                    let allMentors = User.where({ admin: false, state: { $gt: 0 }, isMentor: true });
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