//mensajes pro consola de tipo informativo

//para mostrar texto sin formato texto plano
console.log("mensaje de texto sin formato")
//para mostrar informacion
console.info("soy un mensaje de info")
//mensaje de error
console.error("soy error")
//para mostrar alerta
console.warn("soy un mensaje de alerta")

//mensajes pro consola de gestio de tiempo
console.time("tiempo de ejecucion")

edad=18
   if(edad >=18){
      console.log("eres mayor de edad")
   }else{
      console.warn("eres pulpin")
   }

console.timeEnd("tiempo de ejecucion")

// mensaje de tipo tabla
console.table("soy una tabla y edwin cachondo y orlando un virgen")
lenguajes=[
   {nombre:"javascript",extencion:".js"},
   {nombre:"python",extencion:".py"},
   {nombre:"php",extencion:".php"}
]
console.log(lenguajes)
console.table(lenguajes)