const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

//Route to read detail
router.get('/:id', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(err => console.log(err))
})

//Route to create restaurant
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