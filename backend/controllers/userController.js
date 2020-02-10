const User = require('../models/userModel')

function profile(req, res, next) {
  // add populate to user
  User.findById(req.currentUser._id)
    .then(user => res.status(200).json(user))
    .catch(next)
}

module.exports = { profile }
