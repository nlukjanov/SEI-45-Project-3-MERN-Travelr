const User = require('../models/userModel')

function profile(req, res, next) {
  // add populate to user
  User.findById(req.currentUser._id)
    .populate('organizedTrips')
    .populate('travel_group')
    .populate('joinedTrips')
    .populate('favoriteTrips')
    .populate('travel_groups')
    .populate('favorite_categories')
    .then(user => res.status(200).json(user))
    .catch(next)
}

module.exports = { profile }
