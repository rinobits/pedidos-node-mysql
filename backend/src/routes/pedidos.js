const express = require('express');
const router  = express.Router();
const Control = require('../controllers/pedidos');
router.post('/', Control.getIndex);
module.exports = router;
