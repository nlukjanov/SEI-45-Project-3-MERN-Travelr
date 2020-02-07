const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Trip = require('../models/tripModel')
const User = require('../models/userModel')
const Catergory = require('../models/categoryModel')
const { userObjs, categoryObjs, tripObjs } = require('./seedObjs')


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => User.create(userObjs))
    .then((userModels) => {
      tripObjs.map(obj => obj.organizer = userModels.find(model => model.name === obj.organizer))
      return Catergory.create(categoryObjs)
    })
    .then((catModels) => {
      tripObjs.map(obj => obj.category = catModels.find(model => model.name === obj.category))
      return Trip.create(tripObjs)
    })
    .then(() => console.log('Data successfully created!'))
    .catch((err) => console.log('SOMETHING IS VERY WRONG!!!', err))
    .finally(() => mongoose.connection.close())
})
