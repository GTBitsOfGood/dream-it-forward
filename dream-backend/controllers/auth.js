const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.put('/verify', (req, res) => {
  if (!req.body || !req.body.token) {
    return res.status(400).json({ status: 'invalid body' })
  }
  jwt.verify(req.body.token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(200).json({ status: 'invalid' })
    else return res.status(200).json({ status: 'valid' })
  })
})

module.exports = router
