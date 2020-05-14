const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: path.join(__dirname, '../../config.env')});

const db = process.env.DATABASE;

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB connection is successfully'))
    .catch(err => console.log(err));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));