
// filtrarFechas("fechaRaw", rawDate, jsonData);
const filtrarFechas = (fecha, json, op) => {
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
            // aquí buscamos la siguiente fecha (meno, vamos en orden descendente)
            // debemos validar que exista fecha siguiente, pues podríamos estar
            // en el último campo (más antiguo)
            let flag = 0;
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
            break; // just in case
        case  1:
            break;
    }
    return fecha;
}
(function($){
    $(document).ready(async()=>{
        fechaReciente, fechaAntigua, jsonData = await obtenFecha();
        fecha = fecha.slice(0, 10);
        fecha = filtrarFechas(fechaReciente, fechaAntigua, jsonData, 0);      // fill & filter
        $('.left').click(() => {
            fecha = filtrarFechas(fechaReciente, fechaAntigua, jsonData, -1); // -1 get prev register
        });
        $('.right').click(() => {
            fecha = filtrarFechas(fecha, jsonData,  1); // +1
        });
    });
})(jQuery);

const obtenFecha = async() => {
    const ret          = new pedidosFecha();
    const jsonData     = await ret.listar();                // recibimos todo
    let   recentField  = jsonData[0].fecha;                 // fecha más reciente
    let   lastField    = jsonData[jsonData.length-1].fecha;
    return { recentField, lastField, jsonData };             // enviamos fecha en bruto y los registros
}