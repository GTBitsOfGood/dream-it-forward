const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user.js')
const saltRounds = 10

router.post('/', (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.status(400).json({status: 'invalid body'})
  }
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(200).json({status: 'hash failed'})
    }
    const newUser = new User({
      username: req.body.username,
      password: hash,
      admin: false,
      meta: {
        email: req.body.username
      }
    })
    newUser.save((err) => {
      if (err) {
        return res.status(200).json({status: 'user creation failed'})
      }
      return res.status(200).json({status: 'success'})
    })
  })
})

module.exports = router
