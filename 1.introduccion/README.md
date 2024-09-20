# Introduccion
- **Temario**
  - [comentarios](#comentarios) 
  - [la consola](#consola)
  - [Naining](#naining)  
## Comentarios
Es la parte dentro de mi archivo de codigo que no es leido ni ejecutado por el interpetre de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlos para silenciar temporalmente partes del codigo *(comentar un codigo)*

### Tipos de Comentario
1. **Una sola linea**
   ```js
   //comentario de una sola linea
   ```
2. **Multiples lineas**
   ```js
   /*
   comentario de multi
   linea
   */
   ```
3. **JSDoc**
4. ```js
   /**
    * este es una linea
    * esta es otra linea
    */
   ```
   este tipo de comentario es muy usado para documentar el codigo, generalmente usado para la explicacion de funciones y clases en `js`.

   [link del archivo](comentarios.js)

   ## Consola
   la herramienta de javascript mas usada, dentro de los navegadores es usada para la [depuracion](#depuracion) de nuestro codigo

   > [!TIP]
   > ##### depuracion, es la tecnica que nos permite mostrar el codigo en las distintas faces del desarrollo, y verificar que el mensaje mostrarlo sea el correcto, y verificando que el codigo no tenga errores de sintaxis de logica o de preucacion.
   
   ### Tipos de mensajes por consola
   #### 1. Notificadores
   mostrar un mensaje por consola
   ```js
   console.log("hola mundo")
   ```
   Mostrar un mensaje de estilo informativo
   ```js
   console.info("mensaje informativo")
   ```
   Mostrar un mensaje de estilo o tipo alerta
   ```js
   console.warn("mensaje de tipo alerta")
   ```
   Mostrar un mensaje de estilo o tipo error
   ```js
   console.error("mensaje de error")
   ```
   #### 2. Gestion de tiempo
   este tipo de mensaje nos sirve para ver la duracion de ejecucion de nuestro codigo y poder optmizar para hacer uso de esta herramienta tenemos que iniciar la consola con un `time()` luego vendra el codigo que deseamos ver la duracion y finalmente terminar el time de la consola con `timeEnd()`
   ```js
   edad=18
   if(edad >=18){
      console.log("eres mayor de edad")
   }else{
      console.warn("eres pulpin")
   }
   ```
   #### 3. Tablas
   Este tipo de mensaje por consola nos muestra la informacion en una tabla.
   Solo formateara a los datos de tipo `array` y `objeto`
   ```js
   lenguajes=[
      {nombre:"javascript",extencion:".js"},
      {nombre:"python",extencion:".py"},
      {nombre:"php",extencion:".php"}
   ]
   ```
   [para ver los ejemplos has clic aqui](consola.js)

   ## naining
   Es la tecnica para nombrar variables, funcion y clases dentro de un lenguaje de programacion.
   Las variables tienen reglas muy especificas que debemos seguir a la hora de designar sus nombrres.
   ### Usos Incorrectos
   - No se pueden usar espacios
   > [!WARNING]
   > ```js
   > #Incorrecto
   > con esapacio=45
   > ```

   - No usar un numero delante
   > [!WARNING]
   > ```js
   > #Incorrecto
   > 1numero=45
   > ```

   - Evitar simbolos y `snake_case`
   > [!WARNING]
   > ```js
   > #Incorrecto
   > dame$=45
   > #Incorrecto
   > con_guiones_bajos="no es correcto"
   > ```

   ### Usos Correctos
   - Debemos usar nombres que expliquen que aporta esa variable a nuestro codigo 
   - Usar `camelCase`
   > [!TIP]
   > ```js
   > #Correcto
   > edadAlumno=45
   > ```
  