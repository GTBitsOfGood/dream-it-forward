const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/user.js')

router.post('/', (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.status(400).json({status: 'invalid body'})
  }
  var query = User.where({ username: req.body.username })
  query.findOne(function (err, user) {
    if (err) return res.status(200).json({ status: 'Unable to find user' })
    if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, ans) {
        if (err) return res.status(200).json({ status: 'authentication failed' })
        if (ans) {
          jwt.sign({ username: req.body.username }, process.env.SECRET, { expiresIn: '1h' }, function (err, token) {
            if (err) return res.status(200).json({ status: 'authentication failed' })
            if (token) return res.status(200).json({ token: token })
            else return res.status(200).json({ status: 'token creation failed' })
          })
        } else {
          return res.status(200).json({ status: 'authentication failed' })
        }
      })
    } else {
      return res.status(200).json({ status: 'Unable to find user' })
    }
  })
})

module.exports = router
