const router = require('express').Router()
const users = require('../controllers/authController')
const trips = require('../controllers/tripsController')
const groups = require('../controllers/groupController')
const categories = require('../controllers/categoryController')

router.route('/register').post(users.register)

router.route('/categories').get(categories.getAllCategories)

router.route('/categories/:id').get(categories.getCategory)

router.route('/groups').get(groups.getAllGroups)

router.route('/groups/:id').get(groups.getGroup)

router.route('/login').post(users.login)

module.exports = router