let input=document.querySelector("#tarea")
let button=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tareas")

button.addEventListener("click", ()=>{
    // let li=document.createElement("li")
    // li.textContent=input.value
    // ul.appendChild(li)
    ul.innerHTML += `
        <li>
            ${input.value}
            <button class="delete">eliminar</button>
        </li>
    `;
    input.value = "";
})
// let eliminar=document.querySelector("#delete")
// eliminar.addEventListener("click" ,()=>{
//     ul.removeChild(li)
// })
ul.addEventListener("click", (e) => {
    // Verifica si el elemento clickeado es un botón con la clase "delete"
    if (e.target.tagName === "BUTTON" && e.target.classList.contains("delete")) {
        let li = e.target.parentElement; // Obtén el <li> que contiene el botón
        ul.removeChild(li); // Elimina el <li> del <ul>
    }
});