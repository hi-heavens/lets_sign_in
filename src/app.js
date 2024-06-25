'use strict';

const path = require('path');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const compression = require('compression');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/auth.route');
const secretRouter = require('./routes/secret.route');
const { Strategy } = require('passport-google-oauth20');
const isLoggedIn = require('./middlewares/check.login');
const { AUTH_OPTIONS } = require('./utils/auth.options');
const { verifyCallback } = require('./utils/verify.callback');

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  cookieSession({
    name: 'session',
    maxAge: 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2],
  })
);
app.use((req, res, next) => {
  if (req.session && !req.session.regenerate) {
    req.session.regenerate = cb => {
      cb();
    };
  }
  if (req.session && !req.session.save) {
    req.session.save = cb => {
      cb();
    };
  }
  next();
});

passport.serializeUser((user, done) => {
  const {
    _json: { name, email },
  } = user;
  done(null, { name, email });
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/secret', isLoggedIn, secretRouter);

app.get('/api/v1', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/v1/failure', (req, res) => {
  return res.send('Failure to authenticate');
});

app.all('*', (req, res) => {
  res.status(404).send(`The route ${req.originalUrl} does not exist! 💨`);
});

module.exports = app;
