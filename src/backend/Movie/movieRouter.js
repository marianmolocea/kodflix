const express = require('express');
const movieHandler = require('./MovieHandler')

const router = express.Router();

router
    .route('/')
    .get(movieHandler.getAllMovies);

router
    .route('/:id')
    .get( movieHandler.getOneMovie);

router
    .route('/new-movie')
    .post(movieHandler.createNewMovie);

router
    .route('/:id')
    .delete(movieHandler.deleteMovie);

module.exports = router