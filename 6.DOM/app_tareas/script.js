let input=document.querySelector("#tarea")
let button=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tareas")

button.addEventListener("click", ()=>{
    // let li=document.createElement("li")
    // li.textContent=input.value
    // ul.appendChild(li)
    ul.innerHTML+=`
        <li>${input.value}<button id="delete">eliminar</button></li>
    `
    input.value=""
})
let eliminar=document.querySelector("#delete")
eliminar.addEventListener("click" ,()=>{
    ul.removeChild(li)
})