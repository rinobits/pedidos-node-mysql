USE jean001;

DELIMITER $$
USE `jean001`$$


CREATE PROCEDURE `addOrEditPedido` (
	IN _id INT(11),
    IN _solicitante VARCHAR(30),
    IN _telefono VARCHAR(20),
    IN _tipoMasa VARCHAR(30),
    IN _saborMasa VARCHAR(30),
    IN _cobertura VARCHAR(30),
    IN _tamano VARCHAR(20),
    IN _caracteristicas VARCHAR(200),
    IN _mensaje VARCHAR(200),
    IN _horaPedido VARCHAR(5), 
    IN _abono INT(8),
    IN _precio INT(8)
)

BEGIN 
    IF _id = 0 THEN
        INSERT INTO pedidos (solicitante, telefono, tipoMasa, saborMasa, cobertura,
                            tamano, caracteristicas, mensaje, abono, precio, horaPedido, estado)
        VALUES (_solicitante, _telefono, _tipoMasa, _saborMasa, _cobertura,
                _tamano, _caracteristicas, _mensaje, _abono, _precio, _horaPedido, _estado);
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
            horaPedido = _horaPedido,
            estado = 1,
            WHERE _id AS 'id';
    END IF;
END