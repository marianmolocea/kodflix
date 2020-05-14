const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    image: {
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

const Movie = model('Movie', movieSchema);

module.exports = Movie;