const mongoose = require('mongoose')

const AlbumsSchema = new mongoose.Schema({
    img: String
}, {timestamps: true})

const Albums = mongoose.model('Albums', AlbumsSchema)

module.exports = Albums