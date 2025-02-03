// Estructuras complejas de objetos

type Datos = {
    [key: string]: string;
  };
  
  const usuario: Datos = {
    nombre: "Juan",
    email: "juan@example.com",
    ciudad: "Madrid",
  };
  
// Cuando el key es un number
type Datos2 = {
    [key: number]: string;
  };
  
  const usuario2: Datos2 = {
    1: "Juan",
    2: "Luis"
}

// Cuando el key es un template literal
type Datos3 = {
    [key: `user_${number}`]: string;
  };
  
  const usuario3: Datos3 = {
    user_1: "Juan",
    user_2: "Luis",
    nombre: "Juan", // fijaros que esto da error
  };

  // Flexible
  type Flexible = {
    [key: string]: string | number | boolean | {nombre: string, edad: number};
  };
  
  const config: Flexible = {
    modoOscuro: true,
    volumen: 80,
    usuario: "Alice",
    datos: {
      nombre: "Alice",
      edad: 30,
    },
  };