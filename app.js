const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const routes = require('./routes')
require('./config/mongoose')

const app = express()

// setting template engine
app.engine('hbs', exhbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// setting session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }))

// setting middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(process.env.port, () => {
    console.log(`App is running on http://localhost:${process.env.port}`)
})