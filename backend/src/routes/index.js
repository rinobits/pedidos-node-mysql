
const express = require('express');
const router  = express.Router();
const Control = require('../controllers/index.js');
app.post('/', Control.getIndex);
module.exports = router;