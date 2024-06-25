'use strict';

const express = require('express');
const passport = require('passport');
const {
  googleSignup,
  googleCallback,
  logout,
} = require('../controllers/auth.controller');

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  }),
  googleSignup
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/api/v1/failure',
    successRedirect: '/api/v1',
    session: true,
  }),
  googleCallback
);
router.get('/logout', logout);

module.exports = router;
