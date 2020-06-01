USE `jean001`;
DROP procedure IF EXISTS `listarFecha`;

DELIMITER $$
USE `jean001`$$
CREATE PROCEDURE `listarFecha` ()
BEGIN
    SELECT * FROM pedidos WHERE estado != 0 ORDER BY fecha ASC;
END;$$
DELIMITER ;
