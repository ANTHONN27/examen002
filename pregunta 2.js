const PAGO_POR_HORA =  30;
const PAGO_POR_HORA_EXTRA = 31;
const DESCUENTO_POR_FALTAS = 30;

const horastrabajadas = 10;
const horasextra = 5;
const faltas = 2;

function Calcularsueldo(cantidadHoras,HorasExtra,CantidadFaltas) {
    const sueldobase = cantidadHoras * PAGO_POR_HORA;
    const pagoextra = HorasExtra * PAGO_POR_HORA_EXTRA;
    const descuento = CantidadFaltas * DESCUENTO_POR_FALTAS;

    const sueldototal = sueldobase + pagoextra - descuento;
    return sueldototal;
}

const sueldo =  Calcularsueldo(horastrabajadas,horasextra,faltas);
console.log("el sueldo del total del empleado es" + sueldo + "soles");



//PARA RUN JS