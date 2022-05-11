/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

/**
 * Conversor de unidades de metros, pulgadas, pies y yardas
 * @method cambiounidades
 * @param {string} unidad id de los inputs de metros, pulgadas, pies o yardas
 * @param {number} valor el valor de los inputs en metros, pulgadas, pies o yardas
 * @return
 */

function cambiounidades(unidad, valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido en " + unidad);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if (unidad==="metro"){
        document.lasUnidades.unid_pulgada.value = valor * 39.3781;
        document.lasUnidades.unid_pie.value = valor * 3.28084;
        document.lasUnidades.unid_yarda.value = valor * 1.09361;
    }else if (unidad==="pulgada"){
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_pie.value = valor * 0.08333;
        document.lasUnidades.unid_yarda.value = valor * 0.0277778;
    }else if (unidad==="pie"){
        document.lasUnidades.unid_pulgada.value = valor * 12;
        document.lasUnidades.unid_metro.value = valor * 0.3048;
        document.lasUnidades.unid_yarda.value = valor * 0.33333333;
    }else if (unidad==="yarda"){
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor * 3;
        document.lasUnidades.unid_metro.value = valor * 0.9144;
    }
}