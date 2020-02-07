const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  dob: { type: Date, require: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  languages: { type: String },
  profileImage: { type: String, required: true },
  organizedTrips: [{ type: mongoose.Schema.ObjectId, ref: 'Trip' }],
  joinedTrips: [{ type: mongoose.Schema.ObjectId, ref: 'Trip' }],
  favoriteTrips: [{ type: mongoose.Schema.ObjectId, ref: 'Trip' }]
  // completed trips will be sorted on the front end
})
