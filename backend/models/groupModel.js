const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  isPrivate: { type: Boolean, required: true },
  members: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('Group', groupSchema)