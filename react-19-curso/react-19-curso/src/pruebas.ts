// Define una interfaz
interface User {
    id: number;
    name: string;
    email?: string; // Opcional
  }
  
  // Usa la interfaz
  const user: User = { id: 1, name: "John" };
  
  // Extiende una interfaz
  interface Admin extends User {
    role: string;
  }
  
  const admin: Admin = { id: 2, name: "Jane", role: "Admin" };

  /////////////////////////////////////////////

  // Types
  // Define un type
type UserType = {
    id: number;
    name: string;
    email?: string; // Opcional
  };
  
  // Usa el type
  const user: UserType = { id: 1, name: "John" };
  
  // Extiende un type
  type AdminType = UserType & { role: string };
  
  const adminType: AdminType = { id: 2, name: "Jane", role: "Admin" };

  //////////////////////////////////////////////

  // Funciones 
  // Función con parámetros tipados
function greet(name: string, age?: number): string {
    return `Hola, ${name}! ${age ? `Tienes ${age} años.` : ''}`;
  }
  
  // Llamada a la función
  console.log(greet("Ana")); // "Hola, Ana!"
  console.log(greet("Luis", 30)); // "Hola, Luis! Tienes 30 años."

  // Default parameter

  function greet(name: string, age: number = 35): string {
    return `Hola, ${name}! ${age ? `Tienes ${age} años.` : ''}`;
  }