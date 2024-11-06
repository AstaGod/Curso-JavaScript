//Haciendo uso de las funciones de tipo closure
//Ejercicio1
//pedir al usuario su nombre y su edad, verificar que su edad sea mayor a 18 años en ese caso mostraremos un mensaje 
//de bienbenida mas el nombre que ingreso el usuario
// function esLegal(nombre,edad){
//     function bienbenida(nombre,edad){
//         if (edad >=18){
//             console.log("bienbenido", {nombre})
//         }else{
//             console.log("eres menor de edad")
//         } 
//     }
// }
// let nombre = prompt("Ingresa tu nombre:")
// let edad = parseInt(prompt("Ingresa tu edad:"))

//Ejercicio2
//crear un programa que pida registrar el nombre de un producto el usario podra luego eliminar el producto o actualizar 
//el nombre del producto
//observacion al realizar la actualizacion podrra ver el valor anterior como el valor de nuevo
function Producto(nombreInicial) {
    this.nombre = nombreInicial;

    // Método para mostrar el nombre actual del producto
    this.verNombre = function() {
        alert("Nombre del producto: " + this.nombre);
    };

    // Método para actualizar el nombre del producto
    this.actualizarNombre = function(nuevoNombre) {
        alert("Nombre anterior: " + this.nombre);
        this.nombre = nuevoNombre;
        alert("Nombre actualizado a: " + this.nombre);
    };

    // Método para eliminar el producto (nombre)
    this.eliminarProducto = function() {
        alert(`El producto "${this.nombre}" ha sido eliminado.`);
        this.nombre = null;
    };
}

// Código para interactuar con el usuario
let nombreProducto = prompt("Ingresa el nombre del producto:");
const producto = new Producto(nombreProducto);

// Mostrar el nombre actual del producto antes de preguntar
producto.verNombre();

// Opciones de actualización y eliminación
let accion = prompt("¿Deseas actualizar o eliminar el producto? (actualizar/eliminar)");

// Mostrar el nombre antes de actualizar o eliminar, según la elección del usuario
if (accion === "actualizar") {
    producto.verNombre(); // Mostrar el nombre actual antes de actualizar
    let nuevoNombre = prompt("Ingresa el nuevo nombre del producto:");
    producto.actualizarNombre(nuevoNombre);
    producto.verNombre();
} else if (accion === "eliminar") {
    producto.verNombre(); // Mostrar el nombre actual antes de eliminar
    producto.eliminarProducto();
} else {
    alert("Acción no válida");
}
