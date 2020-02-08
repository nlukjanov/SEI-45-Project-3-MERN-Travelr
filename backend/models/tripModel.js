const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const tripSchema = new mongoose.Schema({
  organizer: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  country: { type: String, required: true },
  startingDate: { type: Date, required: true },
  endingDate: { type: Date, required: true },
  category: { type: mongoose.Schema.ObjectId, ref: 'Category', required: true },
  description: { type: String, required: true },
  participants: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  budget: { type: String, required: true },
  interested: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  likes: [ likeSchema ],
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Trip', tripSchema)