

// FUnciones con numero indeterminado de parametros

function registrarUsuario(nombre: string, ...roles: string[]) {
    console.log(`Usuario: ${nombre}`);
    console.log(`Roles: ${roles.join(", ")}`);
  }
  
  registrarUsuario("Juan", "Admin", "Editor");




