const mysqlConnection = require('../database');
getPedidosFecha = (req, res) => {
    const query =  `
        CALL listarFecha();
    `
    mysqlConnection.query(query, (err, rows, fields) => {
        if(!err){
            console.log('done');
            let temp = new Array();
            let i = 0;
        // retornaremos todos los pedidos, ordenados por fecha.
        // serán ordenados en el frontend.
            rows[0].forEach(row => { 
                if(row.id){
                    temp[i] = row;
                    i++;
                }
            })
            rows = temp;
            res.json({status: true, data: rows});
        }else{
            console.log(err);
        }
    });
}

module.exports = { getPedidosFecha }
