const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const movieHandler = require('./Movie/MovieHandler')

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../build')));
app.use(express.static(path.join(__dirname,'../images/covers')));

app.get('/rest/shows', movieHandler.getAllMovies);
app.post('/rest/shows', movieHandler.createNewMovie);

app.get('/rest/shows/:id', movieHandler.getOneMovie);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});


module.exports = app;