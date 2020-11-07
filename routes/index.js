const express = require('express')
const router = express.Router()

const users = require('./modules/users')
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
const auth = require('./modules/auth')
const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/restaurants', authenticator, restaurants)
router.use('/search', authenticator, search)
router.use('/auth', auth)
router.use('/', authenticator, home)


module.exports = router
