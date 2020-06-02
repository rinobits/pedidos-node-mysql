const llenarCampos = (data) => {
    console.log(data);
    combo = $('#data');
    $.each(data, (key, value) => {
        
        combo.append(`\
            <div class='fields'>\
                <div class='id'>${value.id}</div>\
                <div class='hora'>${value.horaPedido}</div>\
                <div class='pedido'>\
                    <div class='nombre'>\
                    ${value.solicitante}\
                    </div>\
                    <div class='combos'>\
                        <span class='tipoMasa'>${value.tipoMasa}</span>\
                        <span class='saborMasa'>${value.saborMasa}</span>\
                        <span class='cobertura'>${value.cobertura}</span>\
                        <br/>\
                        <span class='tamano'>${value.tamano}</span>\
                    </div>\
                </div>\
                <div class='abono'>${value.abono}</div>\
                <div class='precio'>${value.precio}</div>\
            </div>\
        `);
    });
}
const filtrarFechas = async(fecha, fechaReciente, fechaAntigua, json, op) => {
    var tempList = new Array();
    var flag = 0;
    switch(op){
        case  0:
            for(let i = 0; i < json.length;i++){
                if(json[i].fecha.slice(0, 10) == fecha){
                    tempList[i] = json[i];
                }
            }
            llenarCampos(tempList); 
            break;
        case -1:
            if(fecha == fechaAntigua){
                return fechaAntigua;
            }
            for(let i = 0; i < json.length; i++){
                if(json[i].fecha.slice(0, 10) == fecha && flag == 0){
                    flag = 1;
                }else if(flag == 1){
                    if(json[i].fecha.slice(0, 10) != fecha && flag == 1){
                        fecha = json[i].fecha.slice(0, 10);
                        flag = 2;
                        tempList[i] = json[i];
                    }
                }else if(flag == 2){
                    if(json[i].fecha.slice(0,10) == fecha){
                        tempList[i] = json[i];
                    }
                }
            }
            llenarCampos(tempList);
            break;
        case  1:
            if(fecha == fechaReciente){
                return fechaReciente;
            }
            let j = 0;
            for(let i = json.length-1; i >= 0; i--){
                if(json[i].fecha.slice(0, 10) == fecha && flag == 0){
                    flag = 1;        // when this even occurs, 
                }else if(flag == 1){ // the are positionated in the correct date so:
                    if(json[i].fecha.slice(0, 10) != fecha && flag == 1){
                        // encontramos el siguiente
                        fecha = json[i].fecha.slice(0, 10); // almacenamos nueva fecha
                        flag = 2;
                        tempList[j] = json[i];
                    }
                }else if(flag == 2){
                    if(json[i].fecha.slice(0,10) == fecha){
                        tempList[j] = json[i];
                    }
                }
            }
            llenarCampos(tempList);
            break;
    }
    return fecha;
}

const obtenJson = async() => {
    const ret  = new pedidosFecha();
    const json = await ret.listar();
    return json;
}

(function($){
    $(document).ready(async()=>{
        const json          = await obtenJson();
        const fechaReciente = json[0].fecha.slice(0, 10);
        const fechaAntigua  = json[json.length-1].fecha.slice(0, 10);
        let fecha = fechaReciente;
        fecha     = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, 0);
        $('.left').click(async()  => {
            fecha = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, -1);
        });
        $('.right').click(async() => {
            fecha = await filtrarFechas(fecha, fechaReciente, fechaAntigua, json, 1);
        });
    });
})(jQuery);