CREATE DATABASE IF NOT EXISTS jean001;

USE jean001;

CREATE TABLE IF NOT EXISTS saborMasa (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) DEFAULT NULL,
  estado INT(2) DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE saborMasa;

INSERT INTO saborMasa values 
  (1, 'Vainilla', 1),
  (2, 'Chocolate', 1),
  (3, 'Nuez', 1);
  
SELECT * FROM saborMasa;

