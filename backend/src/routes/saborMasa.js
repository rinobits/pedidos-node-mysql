const express = require('express');
const router  = express.Router();
const Control = require('../controllers/saborMasa');
router.get('/', Control.getSaborMasa);
router.get('/:id', Control.getSaborMasaID);
module.exports = router;