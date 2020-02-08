const Group = require('../models/groupModel')

function getGroup(req, res) {
  Group
    .findById(req.params._id)
    .then(travelGroup => travelGroup ? res.status(200).json(travelGroup) : res.status(404).json({ message: 'Error 404 - Groups Not Found' }))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

function getAllGroups(req, res) {
  Group
    .find()
    .then(travelGroups => travelGroups ? res.status(200).json(travelGroups) : res.status(404).json({ message: 'Error 404 - Groups not found' }))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

module.exports = { getGroup, getAllGroups }