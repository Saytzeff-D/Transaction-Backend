const express = require('express')
const { login, register } = require('../controllers/usercontroller')
const UserRouter = express.Router()

UserRouter.post('/register', register)
UserRouter.post('/login', login)

module.exports = UserRouter