var express = require('express');
var router = express.Router();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

/* PUT application */
router.put('/mentee', function (req, res, next) {
    if (!req.body || !req.body.token || !req.body.questions || !req.body.answers) {
        return res.status(400).json({ status: 'invalid body' });
    }
    // Verify the provided token
    jwt.verify(req.body.token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return res.status(200).json({ status: 'invalid token' });
        }
        if (decoded.id)
            query = { _id: decoded.id };
        else if (decoded.username)
            query = { username: decoded.username };
        var obj = {
            application: {
                mentee: {
                    questions: req.body.questions,
                    answers: req.body.answers
                }
            }
        };
        User.findOneAndUpdate(query, obj, { new: true }, (err, todo) => {
            if (err) {
                return res.status(500).send(err); // Database error
            }
            return res.send(todo);
        });
    });
});
router.put('/mentor', function (req, res, next) {
    if (!req.body || !req.body.token || !req.body.questions || !req.body.answers) {
        return res.status(400).json({ status: 'invalid body' });
    }
    // Verify the provided token
    jwt.verify(req.body.token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return res.status(200).json({ status: 'invalid token' });
        }
        if (decoded.id)
            query = { _id: decoded.id };
        else if (decoded.username)
            query = { username: decoded.username };
        var obj = {
            application: {
                mentor: {
                    questions: req.body.questions,
                    answers: req.body.answers
                }
            }
        };
        User.findOneAndUpdate(query, obj, { new: true }, (err, todo) => {
            if (err) {
                return res.status(500).send(err); // Database error
            }
            return res.send(todo);
        });
    });
});

module.exports = router;