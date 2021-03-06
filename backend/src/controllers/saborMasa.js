const mysqlConnection = require("../database");

getSaborMasa = (req, res) => {
    mysqlConnection.query('SELECT * FROM saborMasa', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
}

getSaborMasaID = (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM saborMasa WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
}

/* const mongoose = require('mongoose');

getCobertura = (req, res) => {
	let retorno = [];
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		if(err) throw err;
			mongoose.connection.collection('cobertura').find().toArray((err, info) => {
				if(err) throw err;
				retorno = info;
				res.json(retorno);
			});
	});
}
getCoberturaID = (req, res) => {
	let retorno = [];
	const idx = req.params.id;
	//aquí debo filtrar para obtener sólo la tabla de tipo de masa
	mongoose.connection.db.listCollections().toArray((err, tabla) => {
		if(err) throw err;
		mongoose.connection.collection('cobertura').find({id: idx}).toArray((err, info) => {
			if(err) throw err;
			retorno = info;
			res.json(retorno);
		});
	});
}

module.exports = {
    getCobertura,
    getCoberturaID
} */

module.exports = {
    getSaborMasa,
    getSaborMasaID
}