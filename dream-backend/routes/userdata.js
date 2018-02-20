var express = require('express');
var router = express.Router();
const User = require('../models/user.js');

/* GET userdata */
router.get('/', function (req, res, next) {
    if (!req.body || !req.body.username) {
        return res.status(400).json({ status: 'Unable to find parameters' });
    }
    User.findOne(
        { username: req.body.username },                // What to search for
        { username: true, isMentor: true, meta: true }, // What to return
        (err, user) => {
        if (err) {                                      // Database error
            return res.status(500).send(err);
        }
        if (!user) {                                    // User not found
            return res.status(200).json({ status: 'username not found' });
        }
        return res.status(200).send(user);              // Return userdata
    });
});

module.exports = router;
