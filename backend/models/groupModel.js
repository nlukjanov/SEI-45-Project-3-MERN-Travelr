const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  isPrivate: { type: Boolean, required: true }
}, {
  toJSON: { virtuals: true }
})

groupSchema.virtual('members', {
  ref: 'User',
  localField: '_id',
  foreignField: 'travel_group'
})

module.exports = mongoose.model('Group', groupSchema)