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

module.exports = { setPedido }