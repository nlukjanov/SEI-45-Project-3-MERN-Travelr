const Trip = require('../models/tripModel')

function index(req, res, next) {
  Trip 
    .find()
    .populate('organizer')
    .then(foundTrip => res.status(200).json(foundTrip))
    .catch(next)
}

function createTrip(req, res, next){
  // req.body.user = req.currentUser
  Trip
    .create(req.body)
    .then(createdTrip => res.status(201).json(createdTrip))
    .catch(next)
}

function showTrip(req, res, next){
  Trip
    .findById(req.params.id)
    .populate('organizer')
    .then(foundTrip => {
      if (!foundTrip) console.log('Error occured at showTrip')
      res.status(200).json(foundTrip)
    })
    .catch(next)
}

function destroyTrip(req, res){
  Trip 
    .findById(req.params.id)
    .then(trip => {
      if (!trip) return res.sendStatus(404)
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
      if (!trip) return res.status(404).json({ message: 'File not found' })

      Object.assign(trip, req.body)

      return trip.save()
    })
    .then(trip => res.status(202).json(trip))
    .catch(next)
}

module.exports = { index , createTrip, showTrip, editTrip, destroyTrip }