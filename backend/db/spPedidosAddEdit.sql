USE `jean001`;
DROP PROCEDURE IF EXISTS `addOrEditPedido`;
DELIMITER $$
USE `jean001`$$
CREATE PROCEDURE `addOrEditPedido` (
    IN _id INT,
    IN _solicitante VARCHAR(30),
    IN _telefono VARCHAR(20),
    IN _mensaje VARCHAR(200),
    IN _caracteristicas VARCHAR(200),
    IN _tipoMasa VARCHAR(30),
    IN _saborMasa VARCHAR(30),
    IN _cobertura VARCHAR(30),
    IN _tamano VARCHAR(20),
    IN _abono INT, 
    IN _precio INT,
    IN _horaDrop VARCHAR(5)
)
BEGIN
    IF _id = 0 THEN
        INSERT	INTO pedidos (
		solicitante, 
		telefono, 
		tipoMasa, 
		saborMasa, 
		cobertura,
		tamano, 
		caracteristicas, 
		mensaje, 
		abono, 
		precio, 
		horaDrop,
		fecha,
		estado)
        VALUES(
        _solicitante, 
		_telefono, 
		_tipoMasa, 
		_saborMasa, 
		_cobertura,
        _tamano, 
        _caracteristicas, 
        _mensaje, 
        _abono, 
        _precio, 
        _horaDrop,
        CURDATE(),
        1);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE pedidos
        SET 
            solicitante = _solicitante,
            telefono = _telefono,
            tipoMasa = _tipoMasa,
            saborMasa = _saborMasa,
            cobertura = _cobertura,
            tamano = _tamano,
            caracteristicas = _caracteristicas,
            mensaje = _mensaje,
            abono = _abono,
            precio = _precio,
            horaDrop = _horaDrop,
            estado = 1,
            fecha = CURDATE()
            WHERE _id = id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
