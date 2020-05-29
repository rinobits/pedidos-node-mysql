CREATE DATABASE IF NOT EXISTS pedidos;

USE pedidos;

CREATE TABLE IF NOT EXISTS tamano (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) DEFAULT NULL,
  estado INT(2) DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE tamano;

INSERT INTO tamano values 
  (1, '6', 1),
  (2, '12', 1),
  (3, '18', 1),
  (4, '24', 1);
  
SELECT * FROM tamano;

