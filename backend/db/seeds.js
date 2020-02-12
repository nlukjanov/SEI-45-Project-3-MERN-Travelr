const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')

const Trip = require('../models/tripModel')
const User = require('../models/userModel')
const Category = require('../models/categoryModel')
const Group = require('../models/groupModel')

const { userObjs, categoryObjs, tripObjs, groupObjs } = require('./seedObjs')


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => Group.create(groupObjs))
    .then(() => User.create(userObjs))
    .then((userModels) => {
      tripObjs.map(obj => obj.organizer = userModels.find(model => model.name === obj.organizer))
      tripObjs[1].participants.push({ user: userModels[1] })
      return Category.create(categoryObjs)
    })
    .then((catModels) => {
      tripObjs.map(obj => obj.category = catModels.find(model => model.name === obj.category))
      return Trip.create(tripObjs)
    })
    .then(() => console.log('Data successfully created!'))
    .catch((err) => console.log('SOMETHING IS VERY WRONG!!!', err))
    .finally(() => mongoose.connection.close())
})
