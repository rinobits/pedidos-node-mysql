llenaCombo = (Name, json) => {
    combo = $('#' + Name);
    $.each(json, (key, value) => {
        combo.append('<option value="' + value.id + '">' + value.name + '</option>');
    });
}
llenaSaborMasa = async() => {
    const ret = new saborMasa();
    const jsonData = await ret.listar();
    llenaCombo("saborMasa", jsonData);
}
llenaCobertura = async() => {
    const ret = new cobertura();
    const jsonData = await ret.listar();
    llenaCombo("cobertura", jsonData);
}
llenaTamano = async() => {
    const ret = new tamano();
    const jsonData = await ret.listar();
    llenaCombo("tamano", jsonData);
}
llenaTipoMasa = async() => {
    const ret = new tipoMasa();
    const jsonData = await ret.listar();
    llenaCombo("tipoMasa", jsonData);
}

llenaTipoMasa();
llenaSaborMasa();
llenaCobertura();
llenaTamano();
llenaCombo("horaDrop", horasJson);


/*
    Obtenemos la fecha,
    la recortamos,
    comparamos con las fechas del registro de pedidos,
    llenamos la lista con todos los datos obtenidos y llenamos el campo
    de fecha con la fecha actual, so retornamos dos elementos:
        La fecha como string y
        La lista con los registros de pedidos.
    Esta función será llamada:
        una vez when doc.ready, pasando como fecha la última fecha de registro
        cada vez que se seleccione el botón next (if not match then return [])
        cada vez que se seleccione el botón prev (idem);

        # WHEN USER CLICKS BUTTON, RAISE FUNCTION TATH SUM OR SUBSTRACT DAY #
*/