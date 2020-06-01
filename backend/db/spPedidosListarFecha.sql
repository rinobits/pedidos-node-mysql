USE `jean001`;
DROP procedure IF EXISTS `listarFecha`;

DELIMITER $$
USE `jean001`$$
CREATE PROCEDURE `listarFecha` ()
BEGIN
    SELECT * FROM pedidos ORDER BY fecha ASC;
END;$$
DELIMITER ;
