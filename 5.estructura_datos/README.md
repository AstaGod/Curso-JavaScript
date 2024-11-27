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
Métodos Comunes para Tratamiento de Listas en JavaScript

- **shift:** Elimina el primer elemento de un array y lo devuelve, desplazando todos los demás elementos hacia la izquierda.
Ejemplo:
```js
let arr = [1, 2, 3];
arr.shift();  // Devuelve 1, array ahora es [2, 3]
```
- **unshift():** Añade uno o más elementos al principio de un array y devuelve la nueva longitud del array.
Ejemplo:
```js
let arr = [1, 2, 3];
arr.unshift(0);  // [0, 1, 2, 3]
```
- **splice():** Modifica el contenido de un array eliminando, reemplazando o añadiendo elementos en una posición específica.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b');  // Elimina 1 elemento en el índice 2 y agrega 'a' y 'b'
// Resultado: [1, 2, 'a', 'b', 4]
```
- **slice():** Devuelve una copia superficial de una porción de un array, sin modificar el array original.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3);  // Devuelve [2, 3]
```

- **forEach():** Ejecuta una función sobre cada elemento del array.
Ejemplo:
```js
let arr = [1, 2, 3];
arr.forEach(item => console.log(item));  // Imprime 1, 2, 3
```
- **map():** Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
Ejemplo:
```js
let arr = [1, 2, 3];
let newArr = arr.map(x => x * 2);  // [2, 4, 6]
```
- **filter():** Crea un nuevo array con todos los elementos que pasen una prueba definida por una función.
Ejemplo:
```js
let arr = [1, 2, 3, 4, 5];
let evenArr = arr.filter(x => x % 2 === 0);  // [2, 4]
```
- **reduce():** Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);  // 10
```
- **find():** Devuelve el primer elemento en el array que satisface la condición proporcionada en la función.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let found = arr.find(x => x > 2);  // 3
```
- **some():** Verifica si al menos un elemento en el array cumple con una condición especificada en la función.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let result = arr.some(x => x > 3);  // true
```
- **every():** Verifica si todos los elementos del array cumplen con la condición definida por una función.
Ejemplo:
```js
let arr = [2, 4, 6];
let result = arr.every(x => x % 2 === 0);  // true
```

- **indexOf():** Devuelve el primer índice en el que un elemento aparece en el array, o -1 si no se encuentra.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let index = arr.indexOf(3);  // 2
```
- **includes():** Verifica si un array contiene un elemento determinado.
Ejemplo:
```js
let arr = [1, 2, 3];
let contains = arr.includes(2);  // true
```
- **join():** Une todos los elementos de un array en una cadena de texto, separada por un delimitador especificado.
Ejemplo:
```js
let arr = ['a', 'b', 'c'];
let str = arr.join('-');  // 'a-b-c'
```
- **concat():** Une dos o más arrays y devuelve un nuevo array.
Ejemplo:
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);  // [1, 2, 3, 4]
```
- **sort():** Ordena los elementos de un array en su lugar.
Ejemplo:
```js
let arr = [3, 1, 4, 2];
arr.sort();  // [1, 2, 3, 4]
```
- **reverse():** Invierte el orden de los elementos en un array.
Ejemplo:
```js
let arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1]
```
## Objetos
los objetos son tipos de datos estructurados similares a las lista, para poder acceder a un elemento de una lista javascript les asignava indices, en este caso los objetos como unica diferencia de las listas nosotros podremos asignar el nombre del elemento al cual deseamos acceder a esto se le conoce como `clave:valor`
cada clave valor es un elemento de un objeto si deseamos crear  mas elementos tendremos que separarlos por comas
### creacion
para crear un objeto debemos encerrar los elementos en llaves `{}` cada elemento estara conformao por su `clave:valor`
```js
let datosJory=["jory","rodriguez",20,"M"]
let datosJoryObjeto={
  nombre:"jory",
  apellido:"rodriguez",
  edad:20,
  sexo:"todos los dias",
  ganado:["el primo","los chamos","las enfermeras","mineros"],
  direccion:{
    tipoCalle:"pasaje",
    nombreCalle:"querobamba",
    numeroVivienda:222,
    numeroCuarto:5
  },
  accion:()=>{console.log("hola soy jory")}
}
```
### acceder a un elemento del objeto
### metodos