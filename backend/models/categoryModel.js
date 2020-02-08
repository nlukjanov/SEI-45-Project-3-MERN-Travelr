const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true }
})

categorySchema.virtual('trips-in-category', {
  ref: 'Trip',
  localField: '_id',
  foreignField: 'category'
})

categorySchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Category', categorySchema)