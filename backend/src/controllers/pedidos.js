const mysqlConnection = require('../database');
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
            res.json({status: true, data: rows});
        }else{
            console.log(err);
        }
    });
}
getPedidosID = (req, res) => {
    const { id } = req.params; 
    const query =  `
        SET @id = ?;
        CALL listarID(@id);
    `
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if(!err){
            console.log('done');
            res.json({status: true, data: rows});
        }else{
            console.log(err);
        }
    });
}
getPedidosFecha = (req, res) => {
    const query =  `
        CALL listarFecha();
    `
    mysqlConnection.query(query, (err, rows, fields) => {
        if(!err){
            console.log('done');
            res.json({status: true, data: rows});
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
            res.json({status: true, data: rows});
        }else{
            console.log(err);
        }
    });
    
}
deletePedidosID = (req, res) => {
    const {id} = req.params;
    const query =  `
        SET @estado = 0,
        SET @id = ?;
        CALL deletePedido(@estado, @id);
    `
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if(!err){
            console.log('done');
            res.json({status: true, data: id});
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
