const router = require('express').Router()
const users = require('../controllers/authController')
const groups = require('../controllers/groupController')
const categories = require('../controllers/categoryController')
const trips = require('../controllers/tripsController')

router.route('/register').post(users.register)

router.route('/login').post(users.login)

router.route('/trips').delete()


module.exports = router