const express = require('express');
const router  = express.Router();
const Control = require('../controllers/fecha');
router.get('/', Control.getPedidosFecha);
module.exports = router;

