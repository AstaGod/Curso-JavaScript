# Estructura de datos
## Indice
- [Estructura de datos](#estructura-de-datos)
  - [Indice](#indice)
  - [Lista o Array](#lista-o-array)
    - [creacion](#creacion)
    - [acceder a un elemento del array](#acceder-a-un-elemento-del-array)
    - [metodos](#metodos)
    - [Tarea: averiguar que otros metodos mas usados que existen para el tratamiento de listas en javascript](#tarea-averiguar-que-otros-metodos-mas-usados-que-existen-para-el-tratamiento-de-listas-en-javascript)
  - [Objetos](#objetos)
    - [creacion](#creacion-1)
    - [acceder a un elemento del objeto](#acceder-a-un-elemento-del-objeto)
    - [metodos](#metodos-1)
## Lista o Array
Las listas en javascript son un tipo de dato estructurado que nos permite almacenar distintos tipos de datos primitivos separados por comas, cada tipo de dato que se almacena en una lista se le conoce como elemento.
asi cada elemento estara separado por una coma
### creacion
primero debemos crear un enlace o variable y luego le asignamos la lista que se crea con `corchetes` los elementos estaran dentro de los corchetes dentro de las comas
```javascript
// creando una lista vacia
let milista=[]
// creando una lista de numeros
let numeros=[2,5,8,4,9]
// crando lista de nombres
let nombres=["edwin","adan","jory"]
// crear una lista mixta
let mixto=["adan",1,6,"chanchito",true,[],["hola","mundo"]]
```
### acceder a un elemento del array
para poder acceer a un elemento del array debemos entender que javascript asignara por cada elemento un indice que nos permitira acceder a un elemento en especifico este indice es incremental y comenzara con el primer elemento, el ultimo elemento sera la cantidad de elementos menos uno
```js
let numeros=[3,6,7,23,57,45]
console.log(numeros[2])
```
existe otra manera de acceder a la lista de elementos esto se logra recorriendo cada elemento de una lista esto se logra con un bucle `for`
```js
let nombres=["cristian","jory","orlando","edwin"]
for (let i=0;i<nombres.length,i++){
    console.log(nombres[i])
}
```
### metodos
los metodos son funciones que nos permiten modificar, actualizar, crear, eliminar los elemtos de una lista, todas las variables que almacene una lista nos permite acceder a sus metodos poniendo un punto despues de la variable
- metodo para recuperar la longitud de elementos que tiene una lista
```js
let numeros=[1,2,3,4,5,6,7,8,9]
numeros.length
```
- metodo para agregar un elemento al final de una lista
```js
let vocales=["a"]
vocales.push("e")
```
- metodo para eliminar el ultimo elemento de una lista
```js
let vocales=["a","e"]
vocales.pop()
```
### Tarea: averiguar que otros metodos mas usados que existen para el tratamiento de listas en javascript
## Objetos
### creacion 
### acceder a un elemento del objeto
### metodos