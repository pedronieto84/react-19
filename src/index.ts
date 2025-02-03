// Void es que no devuelve nada

type SumaParameter = (a: number, b: number) => void; 
const suma = (a:number,  b:number):void => {
  
  return a+b
};

// As me sirve para convertir un dato en otro tipo de dato

let valor: any = "Hola, TypeScript";


// Sintaxis con 'as'
let longitud2: number = (valor as string).length; // Assertion - o Casting, le digo yo a Typescript que tipo de dato es


console.log(longitud2); // 17
