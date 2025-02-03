

// Parametros funcionale no pueden ir al principio
const sumarConMensajeDefecto = (a?: number, b: number): ( number | string) => {
    return ` ${a + b}`
}

