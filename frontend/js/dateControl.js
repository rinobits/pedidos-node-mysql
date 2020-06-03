llenarCampos = async(fecha, data) => {
    let combo = $('#data');
    combo.html('');
    let sup = data[0].id;
    $('.fechaRaw').html(fecha);
    $.each(await data, (key, value) => {
        combo.append(`\
            <div class='fields' id='field_${sup}'>\
                <div class='id' id="${sup}">${value.id}</div>\
                <div class='hora'>${value.horaDrop}</div>\
                <div class='pedido'>\
                    <div class='nombre'>\
                    ${value.solicitante}\
                    </div>\
                    <div class='combos'>\
                        <span class='tipoMasa'>${value.tipoMasa}</span>\
                        <span class='saborMasa'>${value.saborMasa}</span>\
                        <span class='hovercobertura'>${value.cobertura}</span>\
                        <br/>\
                        <span class='tamano'>${value.tamano}</span>\
                    </div>\
                </div>\
                <div class='abono'>${value.abono}</div>\
                <div class='precio'>${value.precio}</div>\
            </div>\
        `);
        sup++;
    });
}
filtrarFechas = async(fecha, fechaReciente, fechaAntigua, json, op) => {
    let tempList = [];
    let flag = 0;
    let j = 0;
    switch(op){
        case  0:
            for(let i = 0; i < json.length;i++){
                if(json[i].fecha.slice(0, 10) == fecha){
                    tempList[i] = json[i];
                }
            }
            llenarCampos(fecha, tempList); 
            break;
        case -1:
            if(fecha == fechaAntigua){
                return fechaAntigua;
            }
            j = 0;
            for(let i = 0; i < json.length; i++){
                if(json[i].fecha.slice(0, 10) == fecha && flag == 0){
                    flag = 1;
                }else if(flag == 1){
                    if(json[i].fecha.slice(0, 10) != fecha && flag == 1){
                        fecha = json[i].fecha.slice(0, 10);
                        flag = 2;
                        tempList[j] = json[i];
                        j++;
                    }
                }else if(flag == 2){
                    if(json[i].fecha.slice(0,10) == fecha){
                        tempList[j] = json[i];
                        j++;
                    }
                }
            }
            llenarCampos(fecha, tempList);
            break;
        case  1:
            if(fecha == fechaReciente){
                return fechaReciente;
            }
            j = 0;
            for(let i = json.length-1; i >= 0; i--){
                if(json[i].fecha.slice(0, 10) == fecha && flag == 0){
                    flag = 1;        // when this even occurs, 
                }else if(flag == 1){ // the are positionated in the correct date so:
                    if(json[i].fecha.slice(0, 10) != fecha && flag == 1){
                        // encontramos el siguiente
                        fecha = json[i].fecha.slice(0, 10); // almacenamos nueva fecha
                        flag = 2;
                        tempList[j] = json[i];
                        j++;
                    }
                }else if(flag == 2){
                    if(json[i].fecha.slice(0,10) == fecha){
                        tempList[j] = json[i];
                        j++;
                    }
                }
            }
            llenarCampos(fecha, tempList);
            break;
    }
    return fecha;
}

obtenJson = async() => {
    const ret  = new pedidosFecha();
    const json = await ret.listar();
    return json;
}
(async($)=>{
    $(document).ready(async()=>{
        const json          = await obtenJson();
        const fechaReciente = json[0].fecha.slice(0, 10);
        const fechaAntigua  = json[json.length-1].fecha.slice(0, 10);
        var fecha = fechaReciente;
        fecha     = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, 0);
        $('.left').click(async()  => {
            fecha = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, -1);
            $('form').attr("action", "http://138.197.7.205:3001/api/pedidos/registrar");
            //resetFields();
        });
        $('.right').click(async() => {
            fecha = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, 1);
            $('form').attr("action", "http://138.197.7.205:3001/api/pedidos/registrar");
            //resetFields();
        });
        $('.data .fields[id^=field_]').click(async() => {
            $('form').attr("action", "http://138.197.7.205:3001/api/pedidos/modificar");
            //console.log($('.data .fields .id').attr('id'));
            //$('#id').val(id); 
            //const ret = new Buscar();
            //const elem = await ret.buscar(id);
        });
        $('.nuevo').click(() => {
            $('form').attr("action", "http://138.197.7.205:3001/api/pedidos/registrar");
            //resetFields();
        });
        $('.anular').click(() => {
            $('form').attr("action", "http://138.197.7.205:3001/api/pedidos/registrar");
            //resetFields();
        });
    });
})(jQuery);