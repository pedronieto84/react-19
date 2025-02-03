// SI defino una interface o un type, puedo reutilizar la estructura

// Interface
interface Persona {
    nombre: string
    apellido?: string
    edad: number
    activo?: boolean // Opcional
    nombreCompleto?():string, // Funcion opcional
    presentarse?(mensajeOpcional?:string):string
    parejas?: Persona[]
}
  
let usuario: Persona = { nombre: "Luis", edad: 28 };


// Type
type ID = string | number;
let idUsuario: ID = 123;
type PersonaType = { nombre: string, edad: number }; // Son muy similares a los interfaces





