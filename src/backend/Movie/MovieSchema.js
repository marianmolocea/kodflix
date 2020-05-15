const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    wallpaper: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    } 
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;