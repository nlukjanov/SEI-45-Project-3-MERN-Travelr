const router = require('express').Router()
const users = require('../controllers/authController')

router.route('/register').post(users.register)

module.exports = router