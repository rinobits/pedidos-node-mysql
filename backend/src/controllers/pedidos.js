const mysqlConnection = require('../database');
// const { model } = require("mongoose");
setPedido = (req, res) => {
    const {
        id, solicitante, telefono, mensaje, caracteristicas, 
        tipoMasa, saborMasa, cobertura, tamano, abono, precio,
        horaPedido
    } = req.body;
    const query =  `
        SET @id = ?;
        SET @solicitante = ?;
        SET @telefono = ?;
        SET @mensaje = ?;
        SET @caracteristicas = ?;
        SET @tipoMasa = ?;
        SET @saborMasa = ?;
        SET @cobertura = ?;
        SET @tamano = ?;
        SET @abono = ?;
        SET @precio = ?;
        SET @horaPedido = ?;
        CALL addOrEditPedido(@id, @solicitante, @telefono, @mensaje, @caracteristicas, @tipoMasa, @saborMasa,
            @cobertura, @tamano, @abono, @precio, @horaPedido);
    `
    mysqlConnection.query(query, [id, solicitante, telefono, mensaje, caracteristicas, tipoMasa, saborMasa, cobertura, tamano, abono, precio, horaPedido], (err, rows, fields) => {
        if(!err){
	        console.log('done');
        }else{
            console.log(err);
        }
    });
}
getPedidosID = (req, res) => {
    const { id } = req.params.id; 
    const query =  `
        CALL listarID(@id);
    `
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if(!err){
	        console.log('done');
        }else{
            console.log(err);
        }
    });
}
getPedidosFecha = (req, res) => {
    const query =  `
        SELECT * FROM pedidos ORDER BY fecha ASC;
    `
    mysqlConnection.query(query, (err, rows, fields) => {
        if(!err){
	        console.log('done');
        }else{
            console.log(err);
        }
    });
}
    
updatePedidos = (req, res) => {
    const {
        id, solicitante, telefono, mensaje, caracteristicas, 
        tipoMasa, saborMasa, cobertura, tamano, abono, precio,
        horaPedido
    } = req.body;
    const query =  `
        SET @id = ?;
        SET @solicitante = ?;
        SET @telefono = ?;
        SET @mensaje = ?;
        SET @caracteristicas = ?;
        SET @tipoMasa = ?;
        SET @saborMasa = ?;
        SET @cobertura = ?;
        SET @tamano = ?;
        SET @abono = ?;
        SET @precio = ?;
        SET @horaPedido = ?;
        CALL addOrEditPedido(@id, @solicitante, @telefono, @mensaje, @caracteristicas, @tipoMasa, @saborMasa,
            @cobertura, @tamano, @abono, @precio, @horaPedido);
    `
    mysqlConnection.query(query, [id, solicitante, telefono, mensaje, caracteristicas, tipoMasa, saborMasa, cobertura, tamano, abono, precio, horaPedido], (err, rows, fields) => {
        if(!err){
	        console.log('done');
        }else{
            console.log(err);
        }
    });
    
}
deletePedidosID = (req, res) => {
    const {id} = req.params.id;
    const query =  `
        CALL deletePedido(@id);
    `
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if(!err){
	        console.log('done');
        }else{
            console.log(err);
        }
    });
}

module.exports = {
    setPedido,
    getPedidosID,
    getPedidosFecha,
    updatePedidos,
    deletePedidosID
};

