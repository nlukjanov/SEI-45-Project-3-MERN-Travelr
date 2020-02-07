const express = require('express')
const app = express()
const { port, dbURI } = require('./config/environment')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const router = require('./config/router')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return console.log(err)
    console.log(`Mongo is connected to '${dbURI}'`)
  }
)
app.use('/*', (req, res) => res.json({ message: 'hello' }))

app.listen(port, () => console.log(`App listening on port ${port}!`))
