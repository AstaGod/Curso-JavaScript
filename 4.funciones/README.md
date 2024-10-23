# FUNCIONES
- [FUNCIONES](#funciones)
  - [estructura de una funcion (como se crear una funcion)](#estructura-de-una-funcion-como-se-crear-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y Parametros Posicionales](#argumentos-y-parametros-posicionales)
    - [Argumentos y Parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funciones como valor](#funciones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)
    - [Funcion de flecha (arrow function)](#funcion-de-flecha-arrow-function)
    - [Diferencias](#diferencias)

## estructura de una funcion (como se crear una funcion)
para crear una funcion debemos realizar los siguientes pasos.
1. hacer uso del keyword `function`
2. darle un nombre a la funcion
3. crear los parametros que recibira entre parentesis `()`
4. crear el cuerpo de la funcion `{}`
```js
//funcion sin parametros
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con un parametro
function miFuncionParametros(texto){
    console.log("tu parametro es",texto)
}
//funcion con varios parametros
function variosParametros(a,b){
    console.log(a+b)
}
```
**COMO EJECUTAMOS UNA FUNCION**
para ejcutar una funcion devemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los parametros que reciba
```js
//creando la funcion
function saludo(){
    console.log("hola")
}
//ejecutamos la funcion
saludo()

function saludo2(texto){
    console.log("hola: ",texto)
}
//ejecutar
saludo2("jory")
```

> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCION** - los nombres de las funcioines deben representar acciones, por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.

```js
function crearUsuario(){

}
function enviarCorre(){

}
```
## Tipos de Argumentos y Parametros
es la manero como se reemplazan los argumentos con los parametros
### Argumentos y Parametros Posicionales
poscicionales se le llama por que los argumentos tomaran los parametros en el orden que se le pase a la funcion segun la posicion entre argumento y parametro
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//argumentos posicionales
let respuesta=sumaNumeros(2,4,6,8)
console.log(respuesta)
```
### Argumentos y Parametros Nominales
se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico
```js
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre}, ${apellido}, ${sexo}`
    return respuesta
}
//nominal
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicion
registroAlumno("jory","rodrigues","todos los dias")
```
> [!INFO]
> Posicinales en orden y Nominales especificar el parametro y su valor

## Tipos de funciones por su notacion
### Funciones como valor
en este caso se crea una funcion como si fuera un valor de un enlace
```js
let saludo=function(){
    console.log("bienbenido")
}

saludo()
```
en este caso el nombre de la funcio sera el nombre que le pongamos al enlacey para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
al igual que una funcion clasica podemos tambien pasarle parametros
### Funcion como declaracion
se le conoce como funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saludo(){
    return "saludos a todos"
}
console.log(saludo())
```
### Funcion de flecha (arrow function)
esta funcion es introducida a partir de la version de ecma script 5 `es5`.
se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha evita la `verbosidad` en javascript
> [!NOTE]
> `verbosidad` o `verboso` se utiliza en la programacion para referirse a un codigo que necesita demaciadas lineas de codigo o necesitar cumplir estrictamente una serie de reglas podemos comprar `verbosidad` a un texto demaciado extenso o redundante.

se crea de la misma manera que una funcion como valor, eso quiere decir que la funcionflecha sera el valor de un enlace.
la funcion flecha tiene la siguiente estructura
el parametro seguido del sinbolo flecha `=>` y del cuerpo de ser necesario o solo del codigo que se retornara
```js
function saludo(){
    return "hola putas"
}
console.log(saludo())

let saludo=()=>("hola mundo")
console.log(saludo())

let mensaje=texto=>console.log("hola",texto)
console.log(mensaje("el primo"))
//em el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre}, ${apellido}`
    return alumno
}
console.loG(registroUsuario("edwin","cachondo"))
```
### Diferencias
