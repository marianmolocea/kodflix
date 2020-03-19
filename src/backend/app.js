const express = require('express');
const app = express();
const port = 3000;
const movieData = require('./movieData.js');

app.get('/rest/shows', (req, res) => res.send(movieData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
