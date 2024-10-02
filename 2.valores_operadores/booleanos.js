// ejemplos con operadores ded comparacion
console.log(5>6)
//esta operacion me generara un valor de tipo boleano

//mayor igual que
console.log(6>=6)

//no es igual
console.log(5!=4)

//NaN == NaN
console.log(NaN==NaN)

//Averiguar la forma en la que se realizan las comparaciones con cadena de texto
/*Comparaciones de Cadenas en JavaScript a Nivel Binario

En JavaScript, las comparaciones de cadenas se basan en los valores **Unicode** de los caracteres, los cuales se representan internamente usando la codificación **UTF-16**. A continuación, se explica cómo funciona este proceso de comparación a nivel binario.

1. **Codificación Interna (UTF-16)**
- JavaScript utiliza **UTF-16** para representar caracteres en memoria.
- La mayoría de los caracteres comunes, como letras y números, se representan usando **16 bits** (2 bytes).
- Algunos caracteres especiales (como emojis) pueden ocupar más de 16 bits, utilizando **4 bytes**.

2. **Valores Unicode**
Cada carácter en una cadena tiene un valor Unicode, que es un número entero que lo representa.

Ejemplos:
- `"a"` tiene el valor Unicode **97** (binario: `01100001`).
- `"A"` tiene el valor Unicode **65** (binario: `01000001`).
- El emoji `😀` tiene el valor Unicode **128512** (binario: `1111101100000000`).

3. **Proceso de Comparación**
Cuando se comparan cadenas en JavaScript:
- La comparación se realiza **carácter por carácter** desde la izquierda.
- Cada carácter se convierte a su valor Unicode, y se comparan los valores binarios de los caracteres correspondientes.
- Si hay una diferencia en los valores Unicode de dos caracteres, esa diferencia determina el resultado de la comparación.
- Si todos los caracteres son iguales, se comparan las longitudes de las cadenas.

4. **Comparación Binaria Real**
JavaScript compara los valores binarios (UTF-16) de cada carácter. A nivel binario, los valores numéricos de los caracteres se utilizan directamente.

Ejemplo:
```javascript
"a" < "b" // true porque 97 (binario: 01100001) < 98 (binario: 01100010)
*/

//todas las letras mayusculas seran menores a las minusculas
// Z>a
//por que javascript compara los codigos unicode de cada caracter
// ! >= ?
// 33 >= 63
console.log("!">="?")
//Ardvark < Zoroaster
console.log("Ardvark" < "Zoroaster")

//en el caso del operador && su resultado sera verdadero solo si ambos valores son verdaderos
console.log(true && false)
console.log(true && true)
//OBSERVACION: si ambos valores son verdaderos devolvera el segundo valor.
console.log("hola" && "mundo")
//OBSERVACION: en caso exista un valor verdadero y uno falso devolvera el valor falso.
console.log(0 && "hola")

//OJO: los valores 0,NaN y una cadena vacia "" son considerados false


//en el caso del operador || produce verdadero si cualquiera de sus valores dados es verdadero
console.log(false || false)
console.log(true || false)

//
respuesta="te devuelvo los ositos tiernos"
console.log(respuesta || "tu busqueda no existe")
console.log(0 || "")

//en el caso del operador ! invierte el valor dado
console.log(!true)
console.log(!false)

//usando el operador relacional
//OBSERVACION: solo funciona en objetos
//averiguar por que sale false en este caso
console.log("hola" in  ["hola","mundo"])
/*
JavaScript no está buscando el valor "hola", está buscando si hay una posición llamada "hola",
en esa lista (las posiciones son números, como 0, 1).
Por eso da false.
*/