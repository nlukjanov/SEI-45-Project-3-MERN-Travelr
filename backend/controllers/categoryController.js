const Category = require('../models/categoryModel')

function getAllCategories(req, res) {
  Category
    .find()
    .then(category => res.status(200).json(category))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

module.exports = { getAllCategories }