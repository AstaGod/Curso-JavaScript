//EJERCICIO
//Crear un funcion que me de un saludo de bienbenida
// function saludo(){
//     console.log("Bienvenido de nuevo")
// }

//funcion como valor
// let saludo=function(){
//     console.log("bienbenido")
// }

// saludo()

//binding en javascript lo que haces es subir las funciones declarativas a la cabecera de mi archivo
console.log(despedida())//todas las funciones internamente lo prioriza o lo sube arriba

//en el caso de funcion como valor o funciones flecha el binding solo eleva al principio del archivo la declaracion del enlace o variable mas no el valor por eso en estos caso debemos ejecutar la funcion despues de haberlo crearlo
let saludo=()=>{return "hola primo"}
console.log(saludo())

//en el caso de la funcion declarativa el binding eleva toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
function despedida(){
    return "adios"
}