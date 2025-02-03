

// Definir parámetros en funciones
const sumar = (a: number, b: number) :number=> {
    return a + b
}

// Definir parámetros opcionales en funciones
const sumarConMensaje = (a: number, b: number, mostrarMensaje?: string): ( number | string) => {
    if(mostrarMensaje){
        return `${mostrarMensaje} ${a + b}`
    }
    return a + b
}

// Definir parámetros por defecto en funciones
const sumarConMensajeDefecto = (a: number, b: number, mostrarMensaje: string = 'El resultado es: '): ( number | string) => {
    return `${mostrarMensaje} ${a + b}`
}




console.log('sumar', sumar(1, 2));
console.log('sumar mensaje', sumarConMensaje(1, 2, 'La suma es: '));
console.log('sumar mensaje', sumarConMensajeDefecto(1, 2));
