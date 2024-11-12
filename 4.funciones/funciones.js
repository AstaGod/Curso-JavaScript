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
// console.log(despedida())//todas las funciones internamente lo prioriza o lo sube arriba

// //en el caso de funcion como valor o funciones flecha el binding solo eleva al principio del archivo la declaracion del enlace o variable mas no el valor por eso en estos caso debemos ejecutar la funcion despues de haberlo crearlo
// let saludo=()=>{return "hola primo"}
// console.log(saludo())

// //en el caso de la funcion declarativa el binding eleva toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
// function despedida(){
//     return "adios"
// }

//EJERCICIO
//crear una funcion que tenga o almacene una variable contador y podamos con funciones realizar la suma +1 de esta variable y la resta +1 de la misma variable ademas de poder tener una funcion que me permita acceder el valor actual y poder mostrarlo.

//let contador=0
//function incremento
//return contador++
//function decremento
//return contador --
//function valorContador
//return contador
// function contador(){
//     //variable local
//     let contador=0
//     function incre(){
//         return contador++
//     }
//     function decre(){
//         return contador--
//     }
//     function valueCount(){
//         console.log(contador)
//     }
//     return {
//         valueCount,
//         incre,
//         decre
//     }
// }
// let count1=contador()
// count1.valueCount()
// count1.incre()
// count1.valueCount()

// for(let i=0;i<5;i++){
//     count1.incre()
// }
// count1.valueCount()


// let count2=contador()
// for(let i=0;i<5;i++){
//     count2.decre()
// }
// count2.valueCount()

// function contador(){
//     this.contador=0
//     this.incre=function(){
//         this.contador++
//     }
//     this.decre=function(){
//         this.contador--
//     }
// }
// //realizamos la instancia
// let count1=new contador
// console.log(count1.contador)
// count1.incre()
// console.log(count1.contador)

function Contador(nombre){
    this.count=0
    this.nombre=nombre
}
Contador.prototype={
    incremento:function(){
        this.count++
    },
    decremento:function(){
        this.count--
    },
    actualizarDatos:function(nuevoNombre) {
        this.nombre=nuevoNombre;
    },
    mostraDatos:function(){
        return `${this.count}, ${this.nombre}`
    }
}
///instanciar mi funcion
let contadorUno=new Contador("Cachondo")
console.log(contadorUno.mostraDatos())
contadorUno.incremento()
contadorUno.incremento()
console.log(contadorUno.mostraDatos())
contadorUno.incremento()
contadorUno.actualizarDatos("chaje edwin")
console.log(contadorUno.mostraDatos())