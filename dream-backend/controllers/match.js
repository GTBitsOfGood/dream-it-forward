const express = require('express');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken')

const User = require('../models/user.js');

router.put('/', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ status: 'invalid body' });
    }
    // both in array format
    let mentor = req.body.mentor;
    let mentees = req.body.mentees;
    let replace = req.body.replace;
    jwt.verify(req.body.token, process.env.SECRET, function (err, decoded) {
        if (err) return res.json({ status: 'invalid' });
        else {
            var query = User.where({ username: decoded.username });
            query.findOne(async function (err, user) {
                if (err) return res.json({ status: 'Unable to find user' });
                if (user && user.admin) {
                    let findMentor = User.where({ username: mentor[0].username });
                    findMentor.findOne(function (err, mentorDoc) {
                        if (err) res.json({ status: 'failed' });
                        if (!mentorDoc.relations) mentorDoc.relations = '[]'
                        if (!replace) {
                            mentorDoc.relations = JSON.stringify(JSON.parse(mentorDoc.relations).splice().concat(mentees));
                        } else {
                            mentorDoc.relations = JSON.stringify(mentees);
                        }
                        mentorDoc.save(async (err) => {
                            if (err) {
                                return res.status(200).json({ status: 'failed' });
                            }
                            try {
                                for (var i = 0; i < mentees.length; i++) {
                                    let findMentee = User.where({ username: mentees[i].username });
                                    let menteeDoc = await findMentee.findOne();
                                    menteeDoc.relations = JSON.stringify(mentor);
                                    menteeDoc.state = 2;
                                    await menteeDoc.save();
                                    return res.status(200).json({ status: 'success' });
                                }
                            } catch (e) {
                                console.log(e)
                                return res.status(200).json({ status: 'failed' });
                            }
                        });
                    })
                } else {
                    return res.json({ status: 'Unable to find user' });
                }
            });
        }
    });
});

module.exports = router;