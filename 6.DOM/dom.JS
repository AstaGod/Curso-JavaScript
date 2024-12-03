// let parrafoDos=document.getElementById("dos")
// let texto=prompt("ingresa tu nombre")
// console.log(parrafoDos.textContent="hola")   

let newElement = document.createElement("div")
newElement.id="miId"
newElement.className="miClase"
// newElement.style="background:red; width:200px; height:200px"
let respuesta=prompt("escribe un color azul o rojo para ver el cuadro")
if (respuesta=="rojo"){
    newElement.className="cuadro_rojo"
}else;{
    newElement.className="cuadro_azul"
}
let body=document.querySelector("body")
body.appendChild(newElement)