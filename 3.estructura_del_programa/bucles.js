// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)
// console.log(12)

// let contador=1
// while (contador <= 12){
//     console.log(contador)
//     contador=contador+1
// }

//crear un programa que me muestre los numeros pares que existen entre 1 y 20
// let contador=2
// // while (contador <=20){
// //     console.log(contador)
// //     contador=contador+2
// //     // contador+=2
// // }

// while (contador<=20){
//  if (contador%2==0){
//     console.log(contador)
//  }
//  contador+=1
// }

// for (let i=2;i<=20;i++){
//     if (i%2==0) console.log(i)
// }

//EJERCICIO
//crear un programa que pida un numero y muestre por consola todos los numeros menores al numero al numero ingrese por la persona
//esta variable es el limite
// let userNumer= Number(prompt("ingresa un numero"))
// //mi variable contador
// contador=1
// while (contador <= userNumer){
//     console.log(contador)
//     contador+=1
// }

//EJERCICIO
//crear un programa que muestre los numeros menores a 20
// en caso encuentre un 7 debera terminar el programa y no mostrar el resto de numeros.
for (let i=1;i<=20;i++){
    if (i==7) break   
    console.log(i)
}