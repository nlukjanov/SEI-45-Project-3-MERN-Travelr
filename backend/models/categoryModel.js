const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: { type: String, unique: true, required: true }
})

categorySchema
  .virtual('Trips', {
    ref: 'Category',
    localfield: '_id',
    foreignField: 'category'
  })

module.exports = mongoose.model('Category', categorySchema)