USE `jean001`;
DROP procedure IF EXISTS `deletePedido`;
DELIMITER $$
USE `jean001`$$
CREATE PROCEDURE `deletePedido` (IN _id INT)
BEGIN
    UPDATE pedidos 
    SET estado = 0
    WHERE id = _id;
END;$$
DELIMITER ;

