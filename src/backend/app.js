const express = require('express');
const path = require('path');

const movieHandler = require('./Movie/MovieHandler')

const app = express();

app.use(express.static(path.join(__dirname, '../../build')));
app.use(express.static(path.join(__dirname,'../images')));

app.get('/rest/shows', movieHandler.getAllMovies);
app.post('/rest/shows', movieHandler.createNewMovie);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});


module.exports = app;