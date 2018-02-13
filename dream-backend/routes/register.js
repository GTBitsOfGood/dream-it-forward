const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
        return res.status(400).json({status: 'Unable to find parameters'});
    }
    return res.status(200).json({status: 'success'});
});

module.exports = router;