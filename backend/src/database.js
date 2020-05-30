const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '138.197.7.205',
  user: 'root',
  password: 'M41gn4c14_',
  database: 'jean001',
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

module.exports = mysqlConnection;
