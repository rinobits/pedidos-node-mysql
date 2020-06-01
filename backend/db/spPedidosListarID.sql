USE `jean001`;
DROP procedure IF EXISTS `listarID`;

DELIMITER $$
USE `jean001`$$
CREATE PROCEDURE `listarID` (IN _id INT)
BEGIN
    SELECT * FROM pedidos WHERE _id = id AND estado != 0;
END;$$
DELIMITER ;

