let main = document.querySelector("main")
let h2 = document.querySelector("h2")
let a = document.querySelector("a")
let p = document.querySelectorAll("p")
let container=document.querySelector(".container")
let nombreUsuario=prompt("Ingrese su nombre")
console.log(nombreUsuario)
if(nombreUsuario==null || nombreUsuario=="")
    h2.innerText+= " Invitado"
else
    h2.innerText+= " " + nombreUsuario

h2.style.textTransform="uppercase"
a.style.color= "#E51B3E"
let pregunta=confirm("¿Desea colocar un fondo de pantalla?")

if(pregunta)
    document.querySelector("body").classList.add("fondo")

p.forEach((paragraph, index) => {
    if(index%2==0)
        paragraph.classList.add("destacadoPar")
    else
        paragraph.classList.add("destacadoImpar")
})
container.style.display="block"