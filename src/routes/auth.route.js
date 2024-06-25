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
    scope: ['profile'],
  }),
  googleSignup
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/api/v1/failure',
    successRedirect: '/api/v1',
    session: false,
  }),
  googleCallback
);
router.get('/logout', logout);

module.exports = router;
