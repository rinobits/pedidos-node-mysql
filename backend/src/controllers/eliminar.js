const mysqlConnection = require('../database');
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
    deletePedidosID
};
