function numeroMenor(...numeros) {
    return Math.min(...numeros);
}

// Ejemplo de uso:
console.log(numeroMenor(5, 3, 8, 2, 9)); // Salida: 2
console.log(numeroMenor(15, 25, 10, 40)); // Salida: 10


//EJERCICIO 2
function mostrarNumeros(numero = 1) {
    if (numero > 20) return;  // Caso base: detener la recursión cuando el número es mayor a 20
    console.log(numero);       // Mostrar el número actual
    mostrarNumeros(numero + 1); // Llamada recursiva con el siguiente número
}

// Ejemplo de uso:
mostrarNumeros(); // Imprime del 1 al 20 en la consola
