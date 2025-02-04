// Definimos una aproximación de π
type Pi = 3.14159;

// Función que acepta solo el valor de π
function acceptPi(value: Pi): void {
    console.log(`Valor de π aceptado: ${value}`);
}

// Ejemplo de uso
acceptPi(3.14159);  // Válido

// Esto dará un error de TypeScript
// acceptPi(3.14);  // Error: Argument of type '3.14' is not assignable to parameter of type '3.14159'.
// Menos dígitos
acceptPi(3.14)

