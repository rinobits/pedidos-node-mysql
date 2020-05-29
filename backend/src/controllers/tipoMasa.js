const mysqlConnection = require("../database");

getTipoMasa = (req, res) => {
    mysqlConnection.query('SELECT * FROM tipoMasa', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
}


getTipoMasaID = (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM tipoMasa WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
}
module.exports = {
    getTipoMasa,
    getTipoMasaID
}