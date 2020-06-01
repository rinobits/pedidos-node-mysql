const mysqlConnection = require('../database');
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

module.exports = { getPedidosFecha }