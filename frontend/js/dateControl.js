//*******************************************//
/**
 ** Restante:
 ** Obtener ID dinámico ON CLICK field
 ** IF(anular) --> estado of current ELEM(ID) => 
 ** ELSE(send submit to /modificar) -> just send.
**/
resetFields = () => {
    $(this).closest('form').find("input[type=text], textarea, select").val("");
    $('form').attr("action", "http://138.197.7.205:3001/api/pedidos/registrar");
    $('#solicitante').focus();
    return true;
}
llenarCamposFormulario = async(id, await data) => {
    let combo = $('form');
    combo.html('');
    combo.append(`
        <form action="" method="POST">\
        <div class="titles">\
            <div class="t1">\
                <div class="label">\
                    Solicitante\
                </div>\
            </div>\
            <div class="t2">\
                <div class="label">\
                    Torta\
                </div>\
            </div>\
            <div class="t3">\
                <div class="label">\
                    Características\
                </div>\
            </div>\
            <div class="t4">\
                <div class="label">\
                    Mensaje\
                </div>\
            </div>\
            <div class="t5">\
                <div class="label">\
                    Hora\
                </div>\
            </div>\
        </div>\
        <div class="field1">\
                <input name="solicitante" class="f1 field" id="solicitante" type="text" placeholder="${data.solicitante}" value="${data.solicitante}" required>\
        </div>\
        <div class="field2">\
            <div class="t1 label">\
                Teléfono\
            </div>\
            <input name="telefono" class="f1 field" id="telefono" type="text" placeholder="${data.telefono}" value="${data.telefono}" required>\
        </div>\
        <div class="field3">\
            <select name="tipoMasa" id="tipoMasa" class="f1 field" required>\
                <option value="${data.tipoMasa}" selected>${data.tipoMasa}</option>\
            </select>\
            <select name="saborMasa" id="saborMasa" class="f2 field" required>\
                <option value="${data.saborMasa}" selected>${data.saborMasa}</option>\
            </select>\
        </div>\
        <div class="field4">\
            <select name="cobertura" id="cobertura" class="f1 field" required>\
                <option value="${data.cobertura}" selected>${data.cobertura}</option>\
            </select>\
            <select name="tamano" id="tamano" class="f2 field" required>\
                <option value="${data.tamano}" selected>${data.tamano}</option>\
            </select>\
        </div>\
        <div class="field5">\
            <textarea name="caracteristicas" class="f1 field" id="caracteristicas" placeholder="${data.caracteristicas}" value="${data.caracteristicas}" required></textarea>\
        </div>\
        <div class="field6">\
            <textarea name="mensaje" class="f1 field" id="mensaje" placeholder="${data.mensaje}" value="${data.mensaje}" required></textarea>\
        </div>\
        <div class="field7">\
            <select name="horaDrop" id="horaDrop" class="f1 field" required>\
                <option  value="${data.horaDrop}" selected>${data.horaDrop}</option>\
            </select>\
            <div class="t1 label">Abono</div>\
        </div>\
        <div class="field8">\
            <input name="abono" class="f1 field" id="abono" type="text" placeholder="${data.abono}" value="${data.abono}">\
            <div class="t1 label">Precio</div>\
            <input name="precio" class="f2 field" id="precio" type="text" placeholder="${data.precio}" value="${data.precio}">\
            <input type="hidden" id="_id" name="_id" value="${data.id}">\
            <input type="submit" id="submit-form" class="hidden"/>\
            <input type="reset"  id="reset-form"  class="hidden"/>\
            <input type="button" id="delete-form" class="hidden"/>\
        </div>\
    </form>\
    `);
}
llenarCamposTabla = async(fecha, data) => {
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
            llenarCamposTabla(fecha, tempList); 
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
            llenarCamposTabla(fecha, tempList);
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
            llenarCamposTabla(fecha, tempList);
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
        resetFields();
        const json          = await obtenJson();
        const fechaReciente = json[0].fecha.slice(0, 10);
        const fechaAntigua  = json[json.length-1].fecha.slice(0, 10);
        var fecha = fechaReciente;
        fecha     = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, 0);
        $('.left').click(async()  => {
            fecha = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, -1);
            resetFields();
        });
        $('.right').click(async() => {
            fecha = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, 1);
            resetFields();
        });
        $('.nuevo').click(() => {
            resetFields();
        });
        /************************************
        /***************AQUÍ*****************
        ************************************/
        $('#data .fields[id^=field_]').click(async() => {
            $('form').attr("action", "http://138.197.7.205:3001/api/pedidos/modificar");
            const id = $(this).attr('id');
            const ret = new Buscar();
            const json = ret.buscar(id);
            llenarCamposFormulario(id, json);
            $('.anular').click(async() => {
                const ret2 = new eliminarPedido();
                const what = await ret2.buscar(id);
                console.log(what);
                resetFields();
            });
        });
    });
})(jQuery);

//*******************************************//