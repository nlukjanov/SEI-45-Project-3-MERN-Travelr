const router = require('express').Router()
const users = require('../controllers/authController')
const groups = require('../controllers/groupController')

router.route('/register').post(users.register)

module.exports = router