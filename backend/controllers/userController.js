const User = require('../models/userModel')

function profile(req, res) {
  // add populate to user
  User.findById(req.currentUser._id)
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

module.exports = { profile }
