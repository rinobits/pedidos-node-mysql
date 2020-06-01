const express = require('express');
const router  = express.Router();
const Control = require('../controllers/registrar');
router.post('/', Control.setPedido); 
module.exports = router;