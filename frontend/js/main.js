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
