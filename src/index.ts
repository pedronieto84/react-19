

// Tipado de datos básico

let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;

// Tipado de datos especiales
let desconocido: unknown = "puede ser cualquier cosa" // Pero no me dejará acceder a propiedades de este tipo de dato
const propiedadDeDesconocido = desconocido.propiedad // Error
let nulo: null = null;
let indefinido: undefined = undefined;
let cualquierCosa: any = 42 //Digamos que deshabilita el tipado de Typescript y hace que opere como si fuera javascript

// Or
let nombreOpcional: string | undefined = undefined;

