var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userdata', function (req, res, next) {
    if (!req.body || !req.body.username) {
        return res.status(400).json({ status: 'Unable to find parameters' });
    }
    // Check if the username exists
    userExists = false;
    if (!userExists) {
        return res.status(200).json({ status: 'username invalid' });
    }
    // Return the userdata
    return res.status(200).json({ status: 'success' });
});

module.exports = router;
