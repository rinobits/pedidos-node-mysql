
const express = require('express');
const router  = express.Router();
const Control = require('../controllers/formulario');
router.post('/', Control.getIndex);
module.exports = router;