//ejemplo de condicion simple
//capturamos la edad y lo convertimos a numero
let edad = Number(prompt("ingresa tu edad"))
//verificamos si el tipo de datos edad es number realmente
if (typeof edad == "number"){
    //si la comparacion es verdad mostraremos por consola la raiz cuadrada de edad
    console.log(edad*edad)
}

//ejemplo de condicion simple de una linea
if (1+1==2) console.log("es verdad");