# Valores, Tipos y Operadores
## Indice
- [tipos de datos o valores](#valores)
## valores
Imagina unmar de bits.
Una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo`o`memoria principal`o`memoria volatil`o`ram`.
Ahora la memoria no volatil o memoria secundaria tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.
- tipos (tipos de datos)
- operadores
cuando nosotros programos hacemos uso de `memoria de trabajo`, para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits, javascript ordena los bits en pequeños partes o piezas de informacion a esto se le conoce como `VALORES`.
cada valor tiene una funcionalidad distinta puede ser un numero un texto o una funcion

cuando hablamos de tipos de datos en javascript nos referimos a su representacion binaria y al tipo de  valor que usamos

### Datos primitivos
son aquellos datos que ya existen no pueden ser creados, actualizados, ni eliminados solo pueden ser llamados para el uso que deseamos darle.
los datos primitivos en javascript son
#### - Numeros(Number)
los valores de tipo numero, como es de esperar son numeros y en javascript se escribe o se hace el llamado de la siguiente manera
- numero de tipo entero
```js
// entero positivo
20
// entero negativo
-20
//estamos usando un patron de bits para el numero 20 que existia dentro de la memoria de trabajo
```
- numero de punto flotante, decimal, fraccion
```js
// decimal positivo
2.7
0.
.0
// decimal negativo
-3.6
```
- numeros notacion cientifica
```js
2.998e8
// 9.998 * 10^8
```
- numeros especiales
en javascript existen tres valores de tipo numero que se consideran un dato primitivo numerico de tipo especial
```js
Infinity
- Infinity
NaN
// not a number
// no es un numero
// cuando el resultado de una operacion es matematicamente imposible.
```
> [!WARNING]
> Cuando javascript realiza operacion con numeros enteros el resultado siempre sera exacta, cuando realize operacion con numeros decimales el resultado perdera precision por que solo tiene 64 bits para almacenar el numero estto suele ocurrir con resultados cuyos decimales sean infinitos como el caso el numero PI **es nuestra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores**
---
> [!TIP]
> Cuando javascript hace trabajo de memoria (cuando crea un patron de bit para almacenar) todos los numeros son almacena como decimal positivo