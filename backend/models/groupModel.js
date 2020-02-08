const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  commentText: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  isPrivate: { type: Boolean, required: true },
  likes: [ likeSchema ],
  comments: [ commentSchema ]
}, {
  toJSON: { virtuals: true }
})

groupSchema.virtual('members', {
  ref: 'User',
  localField: '_id',
  foreignField: 'travel_group'
})

module.exports = mongoose.model('Group', groupSchema)