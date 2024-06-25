'use strict';

const path = require('path');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const compression = require('compression');
const authRouter = require('./routes/auth.route');
const { AUTH_OPTIONS } = require('./utils/auth.options');
const secretRouter = require('./routes/secret.route');
const { Strategy } = require('passport-google-oauth20');
const { verifyCallback } = require('./utils/verify.callback');

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
app.use(passport.initialize());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/secret', secretRouter);

app.get('/api/v1', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send(`The route ${req.originalUrl} does not exist! 💨`);
});

module.exports = app;
