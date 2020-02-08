const router = require('express').Router()

const users = require('../controllers/userController')
const trips = require('../controllers/tripsController')
const auth = require('../controllers/authController')
const secureRoute = require('../lib/SecureRoute')
const groups = require('../controllers/groupController')
const categories = require('../controllers/categoryController')

router.route('/register').post(auth.register)

router.route('/categories').get(categories.getAllCategories)

router.route('/categories/:id').get(categories.getCategory)

router.route('/groups').get(groups.getAllGroups)

router.route('/trips').get(trips.index)

router.route('/trips/:id').get(trips.showTrip)

router.route('/groups/:id').get(groups.getGroup)

router.route('/login').post(auth.login)

router.route('/profile').get(secureRoute, users.profile)

module.exports = router