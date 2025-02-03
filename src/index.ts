

// Objetos

const persona: {nombre: string, edad: number, DNI: string} = {
    nombre : 'Fernando',
    edad: 30, // si quito la edad, me da error porque falta edad
    DNI: '12345678Z'
}

// Objetos con parámetros opcionales
const persona2: {nombre: string, edad: number, DNI?: string} = {
    nombre : 'Fernando',
    edad: 30
    // DNI: '12345678Z' // si quito el DNI, no me da error porque es opcional
}






