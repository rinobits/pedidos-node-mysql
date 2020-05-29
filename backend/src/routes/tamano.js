const express = require('express');
const router  = express.Router();
const Control = require('../controllers/tamano');
router.get('/', Control.getTipoMasa);
router.get('/:id', Control.getTipoMasaID);
module.exports = router;