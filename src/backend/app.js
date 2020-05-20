const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const movieRouter = require('./Movie/movieRouter')

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../build')));
app.use(express.static(path.join(__dirname,'../images')));

app.use('/rest/shows', movieRouter);
app.use('/manage/tv-shows', movieRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

module.exports = app;