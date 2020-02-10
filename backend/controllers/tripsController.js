const Trip = require('../models/tripModel')

function index(req, res, next) {
  Trip 
    .find()
    .populate('organizer')
    .populate('interested')
    .populate('participants')
    .populate('category')
    .then(foundTrip => res.status(200).json(foundTrip))
    .catch(next)
}

function createTrip(req, res, next){
  req.body.user = req.currentUser
  Trip
    .create(req.body)
    .then(createdTrip => res.status(201).json(createdTrip))
    .catch(next)
}

function showTrip(req, res, next){
  Trip
    .findById(req.params.id)
    .populate('organizer')
    .populate('interested')
    .populate('participants')
    .populate('category')
    .then(trip => {
      if (!trip) return res.status(404).json({ message: 'Target not found' })
      res.status(200).json(trip)
    })
    .catch(next)
}

function destroyTrip(req, res){
  Trip 
    .findById(req.params.id)
    .then(trip => {
      if (!trip) return res.sendStatus(404).json({ message: 'Target not found' })
    })
    .catch(err => res.status(400).json(err))

  Trip
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

function editTrip(req, res, next){
  Trip
    .findById(req.params.id)
    .then(trip => {
      if (!trip) return res.status(404).json({ message: 'Target not found' })

      Object.assign(trip, req.body)

      return trip.save()
    })
    .then(trip => res.status(202).json(trip))
    .catch(next)
}


// Join or Express Interest in a Trip
function joinTrip(req, res, next) {
  Trip
    .findById(req.params.id)
    .then(trip => {
      if (!trip) throw new Error('Not found')
      if (trip.participants.some(item => item.user._id.equals(req.currentUser._id))) {
        const foundTrip = trip.participants.find(item => item.user._id.equals(req.currentUser._id))
        trip.participants.splice(trip.participants.indexOf(foundTrip), 1)
        return trip.save()
      }
      trip.participants.push({ user: req.currentUser })
      return trip.save()
    })
    .then(trip => res.status(202).json(trip))
    .catch(next)
}

function interestTrip(req, res, next) {
  Trip
    .findById(req.params.id)
    .then(trip => {
      if (!trip) throw new Error('Not found')
      if (trip.interested.some(item => item.user._id.equals(req.currentUser._id))) {
        const foundTrip = trip.interested.find(item => item.user._id.equals(req.currentUser._id))
        trip.interested.splice(trip.interested.indexOf(foundTrip), 1)
        return trip.save()
      }
      trip.interested.push({ user: req.currentUser })
      return trip.save()
    })
    .then(trip => res.status(202).json(trip))
    .catch(next)
}

module.exports = { index , createTrip, showTrip, editTrip, interestTrip, joinTrip, destroyTrip }
