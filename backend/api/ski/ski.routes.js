const express = require('express');
const { log } = require('../../middlewares/logger.middleware');
const { search } = require('./ski.controller');
const router = express.Router();

router.post('/search', log, search);

module.exports = router;
