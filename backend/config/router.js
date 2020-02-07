const router = require('express').Router()
const users = require('../controllers/authController')
const trips = require('../controllers/tripsController')

router.route('/register').post(users.register)




















module.exports = router