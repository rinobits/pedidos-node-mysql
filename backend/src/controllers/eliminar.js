const mysqlConnection = require('../database');
deletePedidosID = (req, res) => {
    const query =  `
        SET @id = ?;
        CALL deletePedido(@id);
    `
    mysqlConnection.query(query, [req.params.id], (err, rows, fields) => {
        if(!err){
            console.log('done');
            res.json({status: true, data: rows[1][0].id});
        }else{
            console.log(err);
        }
    });
}

module.exports = {
    deletePedidosID
};
