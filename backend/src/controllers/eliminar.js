const mysqlConnection = require('../database');
deletePedidosID = (req, res) => {
    const {id} = req.params.id;
    const query =  `
        SET @id = ?;
        CALL deletePedido(@id);
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
