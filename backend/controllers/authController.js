const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  console.log(req.body)
  res.json('ok')
  // User.create(req.body)
  //   .then(user =>
  //     res
  //       .status(201)
  //       .json({ message: `Thank you for registering ${user.name}` })
  //   )
  //   .catch(err => res.json(err))
}

module.exports = { register }
