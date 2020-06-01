const express = require('express');
const router  = express.Router();
const Control = require('../controllers/buscar');
router.get('/:id', Control.getPedidosID);
module.exports = router;
