const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/new', (req, res) => {
    res.render('new')
})
router.post('/new', (req, res) => {
    const restaurant = req.body
    restaurant.userId = req.user._id
    Restaurant.create(restaurant)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router