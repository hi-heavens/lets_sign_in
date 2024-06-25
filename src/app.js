'use strict';

const express = require('express');
const helmet = require('helmet');
const path = require('path');
const compression = require('compression');
const authRouter = require('./routes/auth.route');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(compression());

app.use('/api/v1/user/auth', authRouter);

app.use('/secret', (req, res) => {
  return res.send(`Your personal secret is ${92}`);
});

app.get('/api/v1', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send(`The route ${req.originalUrl} does not exist! 💨`, 404);
});

module.exports = app;
