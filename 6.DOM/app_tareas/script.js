let input=document.querySelector("#tarea")
let button=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tareas")

button.addEventListener("click", ()=>{
    let li=document.createElement("li")
    li.textContent=input.value
    ul.appendChild(li)
    input.value=""
})