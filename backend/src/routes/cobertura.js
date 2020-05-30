const express = require('express');
const router  = express.Router();
const Control = require('../controllers/cobertura');
router.get('/', Control.getCobertura);
router.get('/:id', Control.getCoberturaID);
module.exports = router;