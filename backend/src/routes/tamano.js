const express = require('express');
const router  = express.Router();
const Control = require('../controllers/tamano');
router.get('/', Control.getTamano);
router.get('/:id', Control.getTamanoID);
module.exports = router;
