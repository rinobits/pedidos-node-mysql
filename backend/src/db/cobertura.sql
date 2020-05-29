CREATE DATABASE IF NOT EXISTS pedidos;

USE pedidos;

CREATE TABLE IF NOT EXISTS cobertura (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) DEFAULT NULL,
  estado INT(2) DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE cobertura;

INSERT INTO cobertura values 
  (1, 'Crema Chantilly', 1),
  (2, 'Crema de Vainillas', 1),
  (3, 'Manjar', 1),
  (4, 'Chocolate', 1);
  
SELECT * FROM cobertura;

