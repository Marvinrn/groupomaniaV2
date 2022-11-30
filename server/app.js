const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const path = require('path');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/users');

require('dotenv').config();


mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>
        console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express()


// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/post', postRoutes)
app.use('/api/auth', userRoutes)

module.exports = app