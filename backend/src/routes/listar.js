const express = require('express');
const router  = express.Router();
const Control = require('../controllers/listar');
router.get('/', Control.getPedidosFecha);
module.exports = router;

