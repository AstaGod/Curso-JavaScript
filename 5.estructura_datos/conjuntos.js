// // crear una lista que almacene las sinco bocales
// let vocales=["a","e","i","o","u"]
// console.log(vocales)

// // acceder a la vocal o
// console.log(vocales[3])

// // accediento a los elementos con for
// for (let i=0;i<5;i++){
//     console.log(vocales[i])
// }

// console.log(vocales.length)

// TRABAJO: tengo una lista de 7 frutas
// crear un programa que identifique si en mi lista existen naranja de existir me mostrara su indice de 
// no existir me mostrara un mensaje de error
let frutas = ["manzana", "pera", "naranja", "uva", "plátano"]
console.log(frutas)
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "naranja") {
        console.log(`naranja se encuentra en el índice ${i}`);
        encontrado = true
    }
}

if (encontrado === false) {
    console.log('Error: "naranja" no está en la lista.');
}

//Ejercicio
//Crear dos funciones que reciban por parametro una lista de numeros una funcion encontrara devolvera el numero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista. ojo no usar los metodos de min y max.
// Función para encontrar el número menor en una lista
function encontrarMenor(lista) {
    let menor = lista[0]; // Asignamos el primer elemento como el menor
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return menor;
}

// Función para encontrar el número mayor en una lista
function encontrarMayor(lista) {
    let mayor = lista[0]; // Asignamos el primer elemento como el mayor
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
    }
    return mayor;
}

// Ejemplo de uso
let numeros = [45, 12, 78, 34, 89, 3, 56];
console.log("Número menor:", encontrarMenor(numeros)); // Salida: 3
console.log("Número mayor:", encontrarMayor(numeros)); // Salida: 89

//crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista
// Función para contar la cantidad de vocales "a" en una lista
function contarVocalesA(lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === 'a') {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso
let letras = ['a', 'b', 'a', 'c', 'a', 'e', 'f', 'a'];
console.log("Cantidad de 'a':", contarVocalesA(letras)); // Salida: 4