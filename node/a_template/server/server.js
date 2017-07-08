require('./config/config');

// Modules
const express = require('express');
// const bodyParser = require('body-parser');
// const _ = require('lodash');
const app = express();
// app.use(bodyParser.json());

// Routes
app.get();

// Final
const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;
let message = `Server is running on port ${PORT} in ${ENV}`;
app.get('*', (req, res) => res.send('404 - Not found'));
app.listen(PORT, () => console.log(message));
module.exports = { app };
