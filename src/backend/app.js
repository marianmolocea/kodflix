const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const movieData = require('./movieData.js');
const path = require('path');

app.get('/rest/shows', (req, res) => res.send(movieData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});