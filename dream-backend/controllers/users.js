var express = require('express');
var router = express.Router();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

/*
Sample GET request:
    /users?username=myUserName

Sample PUT request:
    /users
    body: {
        token: <jwt token returned by /login controller>
        data: {
            meta: {
                email: "sampleemail@gmail.com"
            }
        }
    }

Both requests return all data on a user.
*/

/* GET userdata */
router.get('/', function (req, res, next) {
    if (!req.query || (!req.query.username && !req.query.id)) {
        return res.status(400).json({ status: 'invalid body' });
    }
    if (req.query.id)
        query = { _id: req.query.id }
    else
        query = { username: req.query.username }
    User.findOne( query, (err, user) => {
        if (err) {                                      // Database error
            return res.status(500).send(err);
        }
        if (!user) {                                    // User not found
            return res.status(200).json({ status: 'user not found' });
        }
        return res.status(200).send(user);              // Return userdata
    });
});

/* PUT userdata */
router.put('/', function (req, res, next) {
    if (!req.body || !req.body.token) {
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
        User.findOneAndUpdate(query, req.body.data, { new: true }, (err, todo) => {
            if (err) {
                return res.status(500).send(err); // Database error
            }
            return res.send(todo);
        });
    });
});

module.exports = router;