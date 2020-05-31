const express = require('express');
const router  = express.Router();
const Control = require('../controllers/pedidos');
router.get('/:id', Control.getPedidosID);
router.get('/', Control.getPedidosFecha);
router.put('/:id', Control.updatePedidos);
router.post('/', Control.setPedido); 
router.delete('/:id', Control.deletePedidosID);
module.exports = router;