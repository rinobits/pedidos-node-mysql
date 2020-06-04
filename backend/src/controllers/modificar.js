const mysqlConnection = require('../database');

updatePedidos = (req, res) => {
    const {
        id, solicitante, telefono, mensaje, caracteristicas, 
        tipoMasa, saborMasa, cobertura, tamano, abono, precio,
        horaDrop
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
        SET @horaDrop = ?;
        CALL addOrEditPedido(@id, @solicitante, @telefono, @mensaje, @caracteristicas, @tipoMasa, @saborMasa,
            @cobertura, @tamano, @abono, @precio, @horaDrop);
    `
    mysqlConnection.query(query, [id, solicitante, telefono, mensaje, caracteristicas, tipoMasa, saborMasa, cobertura, tamano, abono, precio, horaDrop], (err, rows, fields) => {
        if(!err){
            console.log('done');
            res.json({status: true, data: rows[12][0].id});
        }else{
            console.log(err);
        }
    });
    
}

module.exports = {
    updatePedidos
};
