const router = require('express').Router()
const users = require('../controllers/authController')
const groups = require('../controllers/groupController')
const categories = require('../controllers/categoryController')

router.route('/register').post(users.register)

router.route('/login').post(users.login)

module.exports = router