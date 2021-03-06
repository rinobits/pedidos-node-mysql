CREATE DATABASE IF NOT EXISTS jean001;

USE jean001;

CREATE TABLE IF NOT EXISTS pedidos (
    id INT(11) NOT NULL AUTO_INCREMENT,
    solicitante VARCHAR(30) DEFAULT NULL,
    telefono VARCHAR(20) DEFAULT NULL,
    tipoMasa VARCHAR(30) DEFAULT NULL,
    saborMasa VARCHAR(30) DEFAULT NULL,
    cobertura VARCHAR(30) DEFAULT NULL,
    tamano VARCHAR(20) DEFAULT NULL,
    caracteristicas VARCHAR(200) DEFAULT NULL,
    mensaje VARCHAR(200) DEFAULT NULL,
    horaDrop VARCHAR(5) DEFAULT NULL,
    abono INT(8) DEFAULT NULL,
    precio INT(8) DEFAULT NULL,
    estado INT(1) DEFAULT 1,
    fecha DATE DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE pedidos;

SELECT * FROM pedidos;
