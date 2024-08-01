const express = require ('express')
const { register } = require('../controllers/user.js')

const route = express.Router()


route.get('/register', register)

module.exports = {
    route
}