CREATE DATABASE IF NOT EXISTS pedidos;

USE pedidos;

CREATE TABLE IF NOT EXISTS tipoMasa (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) DEFAULT NULL,
  estado INT(2) DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE tipoMasa;

INSERT INTO tipoMasa values 
  (1, 'Bizcocho', 1),
  (2, 'Panqueque', 1),
  (3, 'Merengue', 1),
  (4, 'Hoja', 1);
  
SELECT * FROM tipoMasa;



