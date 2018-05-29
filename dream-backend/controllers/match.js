const express = require('express');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken')

const User = require('../models/user.js');

router.put('/', async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ status: 'invalid body' });
    }
    let mentor = req.body.mentor;
    let mentees = req.body.mentees;
    try {
        let decoded = await jwt.verify(req.body.token, process.env.SECRET);
        let user = await User.where({ username: decoded.username }).findOne();
        if (user && user.admin) {
            let mentorDoc = await User.where({ username: mentor[0].username }).findOne();
            let menteeDoc = await User.where({ username: mentees[0].username }).findOne();
            if (!mentorDoc.relations) mentorDoc.relations = [];
            if (!menteeDoc.relations) {
                menteeDoc.relations = [];
            } else {
                if (menteeDoc.relations.length > 0) {
                    let prevMentor = await User.where({ username: menteeDoc.relations[0].username }).findOne();
                    for (var i = 0; i < prevMentor.relations.length; i++) {
                        if (prevMentor.relations[i].username === mentees[0].username) {
                            prevMentor.relations.splice(i, 1);
                            break;
                        }
                    }
                    await prevMentor.save();
                }
            }
            menteeDoc.relations = [{
                username: mentor[0].username,
                name: JSON.parse(mentorDoc.mentorApp).name,
                email: JSON.parse(mentorDoc.mentorApp).email      
            }];
            await menteeDoc.save()
            mentorDoc.relations.push({
                username: mentees[0].username,
                name: JSON.parse(menteeDoc.menteeApp).name,
                email: JSON.parse(menteeDoc.menteeApp).email
            });
            await mentorDoc.save()
            return res.json({ status: 'success' });
        }
        return res.json({ status: 'failed' });
    } catch (e) {
        return res.json({ status: 'failed' });
    }
})

module.exports = router;