const mysql = require('mysql');
const mongoose = require('mongoose');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2304',
  database: 'pedidos',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('DB LOADED');
  }
});

/*
const port = 3000;
process.env.URLDB ="mongodb+srv://rinobitsadmin:Nothing123@cluster0-xhhpf.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(process.env.URLDB, {useUnifiedTopology:true,useNewUrlParser:true}, (err, res) => { 
	if(err) throw err;
	console.log('Online Database... ');
});
 */
module.exports = mysqlConnection;
