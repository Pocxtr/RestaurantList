const express = require('express')
const exhbs = require('express-handlebars')

const routes = require('./routes')

const app = express()
const port = 3000

// setting template engine
app.engine('hbs', exhbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public'))

app.use(routes)

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})