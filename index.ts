// Un type que evalue números de fibonacci

// Definimos los primeros números de Fibonacci como tipos literales
type Fibonacci = 0 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 | 144;

// Función que acepta solo números de Fibonacci
function acceptFibonacciNumber(num: Fibonacci): void {
    console.log(`Número de Fibonacci aceptado: ${num}`);
}

// Ejemplos de uso
acceptFibonacciNumber(0);    // Válido
acceptFibonacciNumber(144);  // Válido

