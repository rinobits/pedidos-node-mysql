const mysqlConnection = require('../database');
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
module.exports = {
    getPedidosID
};
