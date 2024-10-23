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
// let edadPerson = Number(prompt("ingrese su edad"))
// if (edadPerson >= 4 && edadPerson < 9){
//     console.log("te ganaste un chupetin")
// }
// else if (edadPerson >= 9 && edadPerson < 14){
//     console.log("te ganaste una pelota firmada por cuto")
// }
// else if (edadPerson >= 14 && edadPerson < 18){
//     console.log("te ganste un celular nokia")
// }
// else if (edadPerson >= 18 && edadPerson <= 100){
//     console.log("te ganaste al primo de browl star")
// }else{
//     console.log("no tienes la edad necesaria")
// }

//swicht
// let edad=Number(prompt("ingrese su edad"))
// switch (edad){
//      case (edadPerson >= 4 && edadPerson < 9):
//         console.log("te ganaste un chupetin")
//         break
//     case (edadPerson >= 4 && edadPerson < 9):
//         console.log("te ganaste un chupetin")
//         break
//     default:
//         console.log("tienes:",edad)
//         break
    
// }

//EJERCICIO
// realizar un programa que pida 5 nombres a traves del navegador
// y realizara las siguientes evaluaciones
// naranja,limon -> "es una fruta citrica"
// platano, manzana -> "es una fruta dulce"
// fresa,pera,papaya -> "para la ensalada de frutas
// si ingresa otro tipo de frutas -> "no tiene clasificacion""
for (let i = 1; i <= 5; i++) {
    let fruta = prompt("Ingresa el nombre de una fruta:");

    switch (fruta) {
        case 'naranja':
        case 'limon':
            console.log(fruta + " es una fruta cítrica.");
            break;
        case 'platano':
        case 'manzana':
            console.log(fruta + " es una fruta dulce.");
            break;
        case 'fresa':
        case 'pera':
        case 'papaya':
            console.log(fruta + " es ideal para la ensalada de frutas.");
            break;
        default:
            console.log(fruta + " no tiene clasificación.");
            break;
    }
}
