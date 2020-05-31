// Librerías
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const app = express();
// Asignación puerto
const port = 3001;
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('AllOW', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
app.use('/api/tipoMasa', require('./routes/tipoMasa'));
app.use('/api/saborMasa', require('./routes/saborMasa'));
app.use('/api/tamano', require('./routes/tamano'));
app.use('/api/cobertura', require('./routes/cobertura'));
app.use('/api/pedidos', require('./routes/pedidos'));
app.use('/api/pedidos/fecha', require('./routes/pedidos'));
// Ejecucion del servidor
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
module.exports = app;
