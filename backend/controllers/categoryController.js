const Category = require('../models/categoryModel')

function getAllCategories(req, res) {
  Category
    .find()
    .populate('trips-in-category')
    .then(categories => res.status(200).json(categories))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

function getCategory(req, res) {
  Category
    .findById(req.params.id)
    .populate('trips-in-category')
    .then(category => category ? res.status(200).json(category) : res.json('You done fucked up'))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

module.exports = { getAllCategories, getCategory }