const oi = document.querySelector(".oi")
console.log("oi") 

const oiMundo = document.querySelector("h2")

/*
const elementos = document.querySelectorAll(""); console.log(elementos)
elementos.forEach(elemento => {
    console.log(elemento)
})
*/

const olaMundo = document.querySelector("p")
olaMundo.textContent = "Novo Conteúdo"
olaMundo.innerText = "Conteúdo de Texto"
olaMundo.innerHTML = "<em><strong>Olá</strong></em>, Mundo"

const input = document.querySelector("input")
input.value = "NOME"
input.setAttribute("id", "novoId")
input.removeAttribute("id")
input.style.backgroundColor = "skyblue"

input.style.borderRadius = "20px"