
// filtrarFechas("fechaRaw", rawDate, jsonData);
const filtrarFechas = (fecha, fechaReciente, fechaAntigua, json, op) => {
    console.log(fecha);
    let tempList = new Array();
    switch(op){
        case  0:
            json.forEach(obj => {
                if(obj.fecha.slice(0, 10) == fecha){
                    tempList.append(obj);
                }
            });
            break;
        case -1:
            if(fecha == fechaAntigua){
                return fechaAntigua;
            }
            json.forEach(obj => {
                if(obj.fecha.slice(0, 10) == fecha && flag == 0){
                    flag = 1;        // when this even occurs, 
                }else if(flag == 1){ // the are positionated in the correct date so:
                    if(obj.fecha.slice(0, 10) != fecha && flag == 1){
                        // encontramos el siguiente
                        fecha = obj.fecha.slice(0, 10); // almacenamos nueva fecha
                        flag = 2;
                        tempList.append(obj); // almacenamos primer ocurrencia
                }else if(flag == 2){
                    if(obj.fecha.slice(0,10) == fecha){
                        tempList.append(obj);
                    }else{
                        break;
                    }
                }
            });
            return fecha;
        case  1:
            if(fecha == fechaReciente){
                return fechaReciente;
            }
            for(let i = json.length-1; i >= 0; i--){
                if(json[i].fecha.slice(0, 10) == fecha && flag == 0){
                    flag = 1;        // when this even occurs, 
                }else if(flag == 1){ // the are positionated in the correct date so:
                    if(json[i].fecha.slice(0, 10) != fecha && flag == 1){
                        // encontramos el siguiente
                        fecha = json[i].fecha.slice(0, 10); // almacenamos nueva fecha
                        flag = 2;
                        tempList.append(json[i]); // almacenamos primer ocurrencia
                }else if(flag == 2){
                    if(json[i].fecha.slice(0,10) == fecha){
                        tempList.append(json[i]);
                    }else{
                        break;
                    }
                }
            }
            return fecha;
    }
    return fecha;
}
(function($){
    $(document).ready(async()=>{
        fechaReciente, fechaAntigua, jsonData = await obtenFecha();
        fechaReciente = fechaReciente.slice(0, 10);
        fechaAntigua  = fechaAntigua.slice(0, 10);
        fecha         = filtrarFechas(fechaReciente, fechaAntigua, jsonData, 0);
        $('.left').click(()  => {
            fecha = filtrarFechas(fecha, fechaReciente, fechaAntigua, jsonData, -1);
        });
        $('.right').click(() => {
            fecha = filtrarFechas(fecha, fechaReciente, fechaAntigua, jsonData, 1);
        });
    });
})(jQuery);

const obtenFecha = async() => {
    const ret          = new pedidosFecha();
    const jsonData     = await ret.listar();                 // recibimos todo
    let   recentField  = jsonData[0].fecha;                  // fecha más reciente
    let   lastField    = jsonData[jsonData.length-1].fecha;
    return { recentField, lastField, jsonData };             // enviamos fecha en bruto y los registros
}