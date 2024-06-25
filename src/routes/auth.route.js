'use strict';

const express = require('express');
const isLoggedIn = require('../middlewares/check.login');
const { googleSignup, logout } = require('../controllers/auth.controller');

const router = express.Router();

router.get('/google', isLoggedIn, googleSignup);
router.get('/google/callback', googleSignup);
router.get('/logout', logout);

module.exports = router;
