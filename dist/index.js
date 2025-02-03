"use strict";
// Definir parámetros en funciones
const sumar = (a, b) => {
    return a + b;
};
// Definir parámetros opcionales en funciones
const sumarConMensaje = (a, b, mostrarMensaje) => {
    if (mostrarMensaje) {
        return `${mostrarMensaje} ${a + b}`;
    }
    return a + b;
};
// Definir parámetros por defecto en funciones
const sumarConMensajeDefecto = (a, b, mostrarMensaje = 'El resultado es: ') => {
    return `${mostrarMensaje} ${a + b}`;
};
// Los parámetros opcionales deben ir al final
const sumarParamsOpcPrincipio = (mostrarMensaje = 'El resultado es: ', a, b) => {
    return `${mostrarMensaje} ${a + b}`;
};
console.log('sumar', sumar(1, 2));
console.log('sumar mensaje', sumarConMensaje(1, 2, 'La suma es: '));
console.log('sumar mensaje', sumarConMensajeDefecto(1, 2));
console.log('sumar mensaje', sumarParamsOpcPrincipio('La suma es: ', 1, 2));
