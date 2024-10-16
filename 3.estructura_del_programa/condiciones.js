//ejemplo de condicion simple
//capturamos la edad y lo convertimos a numero
// let edad = Number(prompt("ingresa tu edad"))
//verificamos si el tipo de datos edad es number realmente
// if (typeof edad == "number"){
//     //si la comparacion es verdad mostraremos por consola la raiz cuadrada de edad
//     console.log(edad*edad)
// }

//ejemplo de condicion simple de una linea
// if (1+1==2) console.log("es verdad");

//Ejercicio de condiciones
//crear un programa que me pida un numero y me muestre por consola si es numero par o impar
// let numPri = Number(prompt("Ingrese un numero"))
// if (numPri % 2 == 0){
//     console.log("es un número par");
// }else{
//     console.log("es un número impar");
// }

//EJERCICIO
//crear un programa que pida al usuario su edad y dependiendo la edad le daremos una serie de regalos
/**
 * - si su edad esta entre 4 a 8 años: te ganaras un chupetin
 * - si su edad esta entre 9 a 13 años: te ganaras un pelota firmada por cuto
 * - si su edad esta entre 14 a 17 años: te ganaras un celular nokia
 * - si su edad es mayor o igual a 18: te ganaras al primo lo haces leña
 */
let edadPerson = Number(prompt("ingrese su edad"))
if (edadPerson >= 4 && edadPerson < 9){
    console.log("te ganaste un chupetin")
}
else if (edadPerson >= 9 && edadPerson < 14){
    console.log("te ganaste una pelota firmada por cuto")
}
else if (edadPerson >= 14 && edadPerson < 18){
    console.log("te ganste un celular nokia")
}
else if (edadPerson >= 18 && edadPerson <= 100){
    console.log("te ganaste al primo de browl star")
}else{
    console.log("no tienes la edad necesaria")
}