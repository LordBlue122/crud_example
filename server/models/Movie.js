const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: String,
    year: Number,
    genre: String,
    duration: Number, // en minutos
    rating: { type: Number, min: 0, max: 10 },
    synopsis: String,
    IMDbID: String
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);