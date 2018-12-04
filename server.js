// server.js
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const config = require('./config/db');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
    config.url,
    { server: { auto_reconnect: true } }
)

var db = mongoose.connection;