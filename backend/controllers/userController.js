const User = require('../models/userModel')

function getAllUsers(req, res, next) {
  User
    .find()
    .populate('organizedTrips')
    .populate('travel_group')
    .populate('joinedTrips')
    .populate('favoriteTrips')
    .populate('travel_groups')
    .populate('favorite_categories')
    .populate('likes.user')
    .then(users => res.status(200).json(users))
    .catch(next)
}

function getUser(req, res, next) {
  User
    .findById(req.params.id)
    .populate('organizedTrips')
    .populate('travel_group')
    .populate('joinedTrips')
    .populate('favoriteTrips')
    .populate('travel_groups')
    .populate('favorite_categories')
    .populate('likes.user')
    .then(user => res.status(200).json(user))
    .catch(next)
}

function profile(req, res, next) {
  // add populate to user
  User.findById(req.currentUser._id)
    .populate('organizedTrips')
    .populate('travel_group')
    .populate('joinedTrips')
    .populate('favoriteTrips')
    .populate('travel_groups')
    .populate('favorite_categories')
    .populate('likes.user')
    .then(user => res.status(200).json(user))
    .catch(next)
}

function updateProfile(req, res, next) {
  User
    .findById(req.currentUser._id)
    .then(user => {
      if (!user) throw new Error('Unauthorized')
      Object.assign(user, req.body)
      return user.save()
    })
    .then(updatedUser => res.status(202).json(updatedUser))
    .catch(next)
}

function deleteUser(req, res, next) {
  User
    .findById(req.currentUser._id)
    .then(user => user.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = { profile, deleteUser, updateProfile, getUser, getAllUsers }
