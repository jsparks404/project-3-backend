require('dotenv').config()
const {PORT, MONGODB_URI} = process.env
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// pull PORT from .env, give default value of 4000
const mongoose = require('mongoose');
const albumsController = require('./controllers/albums-controller')



///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URI)
// Connection Events
mongoose.connection
.on("open", () => console.log("Your are connected to mongoose"))
.on("close", () => console.log("Your are disconnected from mongoose"))
.on("error", (error) => console.log(error));

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors())
app.use(morgan('dev'))

// all requests for endpoints that begin with '/people'
app.use('/albums', albumsController)

app.get('/', (req, res) => {
    res.send('Home')
})



app.listen(PORT, () => console.log(`listening on port ${PORT}`))