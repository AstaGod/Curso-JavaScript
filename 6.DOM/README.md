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

## Selectoes
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

> [!NOTE]
> tecnologias para el procesamiento de texto a travez de marcado `markup` (etiquetas- que nos permite a traves las palabras reservadas darle un estilo o significado al contenido de las etiquetas). la primera tecnologia fue `xml` despues nace `html` despues la ultima generacion de tecnologias de `markdown`