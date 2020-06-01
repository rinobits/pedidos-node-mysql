const express = require('express');
const router  = express.Router();
const Control = require('../controllers/eliminar');
router.delete('/:id', Control.deletePedidosID);
module.exports = router;