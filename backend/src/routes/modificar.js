const express = require('express');
const router  = express.Router();
const Control = require('../controllers/modificar');
router.put('/:id', Control.updatePedidos);
module.exports = router;