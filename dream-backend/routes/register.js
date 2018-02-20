const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


const User = require('../models/user.js');
const saltRounds = 10;

router.post('/', (req, res) => {
    if (!req.body || !req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({status: 'invalid body'});
    }
    
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
            return res.status(200).json({status: 'hash failed'});
        }

        const newUser = new User({
            username: req.body.username,
            password: hash,
            meta : {
                email: req.body.email
            }
        });

        newUser.save((err) => {
            if (err) {
                return res.status(200).json({status: 'user creation failed', error: err});
            }
            return res.status(200).json({status: 'success'}); 
        });
    });
});

module.exports = router;