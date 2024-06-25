'use strict';

const express = require('express');

const router = express.Router();
const { googleSignup, logout } = require('../controllers/auth.controller');

router.get('/google', googleSignup);
router.get('/logout', logout);

module.exports = router;
