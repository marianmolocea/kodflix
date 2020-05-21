const express = require('express');
const movieHandler = require('./MovieHandler');
const multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./src/images/${file.fieldname}s/`)
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname === 'cover' ? '' : 'w-'}${file.originalname}`)
    }
  })
   
let upload = multer({ storage: storage })

const router = express.Router();

router
    .route('/')
    .get(movieHandler.getAllMovies);

router
    .route('/:id')
    .get( movieHandler.getOneMovie);

router
    .route('/new-movie')
    .post(upload.any(), movieHandler.createNewMovie);

router
    .route('/test')
    .post(upload.any() , movieHandler.testUpdate);

router
    .route('/:id')
    .delete(movieHandler.deleteMovie)
    .patch(movieHandler.updateMovie)

module.exports = router