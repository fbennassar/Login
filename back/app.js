const routes = require('./src/routes');
const express = require('express');
const cors = require('cors');
const app = express();

app.disable('x-powered-by');
app.use(express.json({ 'limit': '5mb' }));
app.use(express.urlencoded({ 'extended': true }));

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Headers', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    next();
    }
);

app.use(cors());
app.use('/api', routes);

module.exports = app;