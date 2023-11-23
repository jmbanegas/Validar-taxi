'use strict'

//crear  la funcion denominada "validarTaxi" que reciba un
//objeto literal coin varios atributos, incluido el año de
//fabricacion. luego, calcular la vida util del taxi y,
//si es menor a 10 años, devolver true; de lo contrario,devolver false.

function validateTaxi (vehiculo) {
    let currentyear = 2023;
    let taxi = currentyear - vehiculo.fabricacion;

    if( taxi <= 10) {
       return  true ;

    } else {
        return  false;
    }
}

let vehiculo = {
    marca: "Ford",
    fabricacion: 2018,
    color: "red",
    placa: "acd7586",
}

let result = validateTaxi (vehiculo);
alert("La validacion de su vehiculo es "+ result);