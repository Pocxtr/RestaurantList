const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

// setting template engine
app.engine('hbs', exhbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// setting middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})