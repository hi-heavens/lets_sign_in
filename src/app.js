'use strict';

const express = require('express');

const app = express();

app.use(express.json());

app.all('*', (req, res) => {
  res.status(404).send(`The route ${req.originalUrl} does not exist! 💨`, 404);
});

module.exports = app;
