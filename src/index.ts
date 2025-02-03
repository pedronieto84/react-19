interface Usuario {
    nombre: string;
    edad: number;
    saludar(): string;
  }
  
  class Cliente implements Usuario {
    constructor(public nombrse: string, public edad: number) {}
  
    saludar(): string {
      return `Hola, mi nombre es  y tengo ${this.edad} años.`;
    }

    // Puedo añadir mas metodos, no hay problema, pero si no esta 
    // Saludar o las propiedades nombre y edad, dara error
  
  }
  
  const cliente1 = new Cliente("Ana", 30);
  console.log(cliente1.saludar()); // "Hola, mi nombre es Ana y tengo 30 años."