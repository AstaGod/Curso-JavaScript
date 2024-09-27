//si nuestro texto tiene que estar entre comillas siples.
console.log("'este texto se muestra entre comillas simples'")
//si nuestro texto tiene que estar entre comillas dobles.
console.log('"este texto se muestra entre comillas dobles"')
//si nuestro texto tendra tanto comillas dobles como simples
console.log(`'esta en comillas simples', "esta en comillas dobles"`)

//usando caracter de escape
console.log("de este texto solo esta \"palabra\" estara en comillas")

//salto de linea usando acentos graves
console.log(`aqui una linea
    aqui otra linea`)

//salto de linea ante de es6
console.log(" esta es mi primera linea \n y esta es la segunda linea")

//tabulacion con acentos graves
console.log(`
este texto no esta tabulado
  este texto si esta tabulado
`)

//tabulando con el caracter de escape
console.log("sin tabular \n\t y tabulado")
console.log("esta es una barra invertida \\")

//concatenando cadenas
console.log("hola"+" "+"mundo")
console.log("hola "+"mundo")

//usando plantillas literales
console.log(`la suma de 1+1 es = ${1+1}`)
numeroUno=34
numeroDos=23
console.log(`la suma de ${numeroUno} + ${numeroDos} es = ${numeroUno+numeroDos}`)