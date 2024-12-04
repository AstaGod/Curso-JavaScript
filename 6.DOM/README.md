# DOM-Documento Object Model
modelo de documento de objeto
el DOM es un conjunto de utilidades especificamente diseñadas para manipular documento xml y html.
el DOM transforma el archivo html en un arbol de nodos jeraquicos.
facilmente manipulables.

el DOM convierte todo el contenido del archivo HTML en un objeto de javascript.
- **mi archivo index.html**
```html
<body>
    <h1 id="titulo"></h1>
    <p class="parrafo">este es la descripcion de mi pagina</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li> 
        <li>tercer elemento</li>
    </ul>   
</body>
```
- **mi archivo script.js**
```js
document:{
    Element:body,
    Attr:null,
    Text:null,
    child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            Text:"titulo",
            child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"},
            Text:"este es la descripcion de mi pagina",
            child:null
        },
        {
            Element:ul,
            Attr:null,
            Text:null,
            child:[
                {
                    Element:li,
                    Attr:null,
                    Text:"primer elemento",
                    clind:null
                },
                {
                    Element:li,
                    Attr:null,
                    Text:"segundo elemento",
                    clind:null
                },
                {
                    Element:li,
                    Attr:null,
                    Text:"tercer elemento",
                    clind:null
                }
            ]
        }
    ]
}
```
DOM a demas de realizar el trabajo de converir un archivo `html` en un objeto de javascript. nos ofrece una `API` (Aplicacion Programing Intefaces - Interfaz de Programacion de Aplicaciones)

## Selectoes - recorriendo el DON
los selectores nos permiten obtener o capturar una o varias etiquetas `html` incluyendo sus atributos contenido y hijos si lo tubiera.
los selectores que podemos utilizar son variados podemos capturar etiquetas a traves de sus atributos como  de el nombre de la etiqueta misma.
los selectores son `funciones` si hablamos de poo engonces se puede decir que son `metodos` y son los siguientes:
- **getElementById** - deuelve un elemento(etiqueta)que tenga un id especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById("dos")
```
- **getElementByClassName** - devuelve un elemento que tenga una clase especifica.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno</p>
<p id="parrafo_dos">parrafo dos</p>
```
```js
let parrafo=documento.getElementByClassName("parrafo")
```
- **querySelector** - devuelve el primer elemento que coincida con el selector ingresado puede ser un id,class,name o tag.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno</p>
<p id="parrafo_dos">parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo=document.querySelector("#titulo")
let primerParrafo=document.querySelector("titulo")
let segundoParrafo=document.querySelector("#parraf_dos")
let subTitulo=document.querySelector("h2")
```
**averiguar que otros selectores o metodos para recorrer el DON tiene javascript**
1. **getElementsByTagName** Selecciona todos los elementos que tienen un nombre de etiqueta específico. También devuelve una colección de nodos.
  ```js
  let elementos = document.getElementsByTagName('div')
  ```
2. **querySelectorAll** - Selecciona todos los elementos que coinciden con el selector CSS proporcionado. Devuelve una NodeList (similar a un array).
```js
  let elementos = document.querySelectorAll('.miClase');
```  
3. **children** - Similar a childNodes, pero solo devuelve los elementos hijos (ignora los nodos de texto y comentarios).
```js
let elementosHijos = document.getElementById('miId').children;
```
4. **parentNode** -  Selecciona el nodo padre de un elemento.
```js
let padre = document.getElementById('miId').parentNode;
```
## Manipulacion del DON
- **createElement** - este metodo crea un elemento HTML con el nombre que le pasemos por parametro
```js
let titulo=document.createElement("h1")
```
- **appendChild** - nos permite hacer hijo un elemento dentro de otro
```js
let titulo=document.createElement("h1")
let body=document.querySelector("body")
body.appendChild(titulo)
```
## Propiedades de los elementos DON
- **className** - Permite setear o capturar el nombre de la clase que tenga un elemento.
- **id** - lo mismo que `className` pero con el atributo id.
- **inner HTML** - Devuelve o permite insertar codigo HTML (INCLUYENDO TAG Y TEXTO)
- **inner Text** - Devuelve o permite insertar texto en un elemento
- **textContent** - Nos permite agregar o modificar el contenido de un elemento.
- **value** - Nos permite optener o setearvalores de un elemento `input`.
 ## Acciones  o eventos con elementos en el DOM (averiguar)
- **setAttribute()**: Establece el valor de un atributo.
- **getAttribute()**: Obtiene el valor de un atributo.
- **removeAttribute()**: Elimina un atributo.
- **classList.add()**: Añade una o más clases a un elemento.
-  **classList.remove()**: Elimina una o más clases.
- **classList.toggle()**: Si la clase existe, la elimina; si no, la añade.
- **classList.contains()**: Verifica si un elemento tiene una clase específica.
1. Eventos Comunes en el DOM
En JavaScript, los eventos son acciones o sucesos que ocurren en el DOM y que puedes "escuchar" para ejecutar funciones específicas. Los eventos pueden ser generados por el usuario, el sistema o el navegador.

- a. Eventos de Mouse
- **click**: Se dispara cuando un elemento es clicado.
- **dblclick**: Se dispara cuando un elemento es doblemente clicado.
- **mouseover**: Se dispara cuando el puntero del ratón se mueve sobre un elemento.
- **mouseout**: Se dispara cuando el puntero del ratón sale de un elemento.
- **mousemove**: Se dispara cuando el ratón se mueve dentro de un elemento.
- **keydown**: Se dispara cuando una tecla es presionada.
- **keyup**: Se dispara cuando una tecla es liberada.
- **keypress**: Se dispara cuando una tecla es presionada y se encuentra en estado de repetición (no recomendado para nuevos proyectos debido a su obsolescencia).
- **focus**: Se dispara cuando un elemento, como un campo de entrada, recibe el enfoque.
- **blur**: Se dispara cuando un elemento pierde el enfoque.
- **change**: Se dispara cuando un valor de un campo de formulario cambia (como un <input>, <select>, o <textarea>).
- **resize**: Se dispara cuando se cambia el tamaño de la ventana del navegador.
- **scroll**: Se dispara cuando la página o un elemento con barra de desplazamiento es desplazado.
- **load**: Se dispara cuando un recurso, como una imagen o una página, se carga completamente.
- **unload**: Se dispara cuando una página o documento está a punto de descargarse o cerrarse (menos utilizado en la práctica moderna).
- **focusin**: Se dispara cuando un elemento recibe el enfoque (propagación ascendente).
- **focusout**: Se dispara cuando un elemento pierde el enfoque (propagación ascendente).

> [!NOTE]
> tecnologias para el procesamiento de texto a travez de marcado `markup` (etiquetas- que nos permite a traves las palabras reservadas darle un estilo o significado al contenido de las etiquetas). la primera tecnologia fue `xml` despues nace `html` despues la ultima generacion de tecnologias de `markdown`