const router = require('express').Router()
const users = require('../controllers/userController')
const trips = require('../controllers/tripsController')
const auth = require('../controllers/authController')
const secureRoute = require('../lib/SecureRoute')
const groups = require('../controllers/groupController')
const categories = require('../controllers/categoryController')

// Authentication
router.route('/login')
  .post(auth.login)

router.route('/register')
  .post(auth.register)

// Categories
router.route('/categories')
  .get(categories.getAllCategories)

router.route('/categories/:id')
  .get(categories.getCategory)

// Groups
router.route('/groups')
  .get(groups.getAllGroups)

router.route('/groups/:id')
  .get(groups.getGroup)

// Trips
router.route('/trips')
  .get(trips.index)
  .post(secureRoute, trips.createTrip)

router.route('/trips/:id')
  .get(trips.showTrip)
  .put(secureRoute, trips.editTrip)
  .delete(secureRoute, trips.destroyTrip)
  
router.route('/trips/:id/interested')
  .get(secureRoute, trips.interestTrip)

router.route('/trips/:id/join')
  .get(secureRoute, trips.joinTrip)

// Users
router.route('/profile')
  .get(secureRoute, users.profile)


module.exports = router