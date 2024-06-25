'use strict';

const express = require('express');

const router = express.Router();
const { yourSecret } = require('../controllers/secret.controller');

router.get('/', yourSecret);

module.exports = router;
