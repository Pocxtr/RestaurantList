const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

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
//Route to read detail
router.get('/:id', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(err => console.log(err))
})

//Rouute to update restaurant
router.get('/:id/edit',(req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(err => console.log(err))
})
router.put('/:id', (req, res) => {
    const _id = req.params.id
    const update = req.body
    update.userId = req.user._id
    Restaurant.findByIdAndUpdate(_id, update, { new:true })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(err => console.log(err))
})
//Route to delete restaurant
router.delete('/:id', (req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    Restaurant.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))

})

module.exports = router