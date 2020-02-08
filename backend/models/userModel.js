const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  dob: { type: Date, require: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  languages: { type: String, required: true },
  profileImage: { type: String, required: true },
  travel_group: { type: mongoose.Schema.ObjectId, ref: 'Group' },
  organizedTrips: [{ type: mongoose.Schema.ObjectId, ref: 'Trip' }],
  joinedTrips: [{ type: mongoose.Schema.ObjectId, ref: 'Trip' }],
  favoriteTrips: [{ type: mongoose.Schema.ObjectId, ref: 'Trip' }],
  likes: [ likeSchema ],
  comments: [ commentSchema ]
  // completed trips will be sorted on the front end
})

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPassword(next) {
  if (this.isModified && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(0))
  }
  next()
})

module.exports = mongoose.model('User', userSchema)
