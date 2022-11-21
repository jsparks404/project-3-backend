const mongoose = require('mongoose')

const ArtistsSchema = new mongoose.Schema({
    metallizer: String,
    label: String,
    album: String,
    artist: String,
    year: String,
    id: String,
    tracks: [String]
}, {timestamps: true})

const Artists = mongoose.model('Artists', ArtistsSchema)

module.exports = Artists