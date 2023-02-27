const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafo = document.querySelector(".parrafo") 
const input = document.querySelector("input")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const rSuma = document.querySelector("#resSuma")
const rResta = document.querySelector("#resResta")
const rMult = document.querySelector("#resMult")
const rDiv = document.querySelector("#resDiv")


console.log(
    {
        h1,
        p,
        parrafo,
        input
    }
)

h1.innerHTML = "Manipulación básica del DOM"
p.innerHTML = "Esto es un parrafo"
parrafo.innerHTML = "esto es otro parrafo"
input.value = "Ayelen Corpas"
//console.log(parrafo.getAttribute("class")); puedo ver la clase de ese elemento
//console.log(parrafo.setAttribute("class", "parrafito")); puedo modinicar o agregar una clases a ese elemento
h1.classList.add("encabezado", "header")//agrego la clase encabezado a la etiqueta h1
h1.classList.add("encabezado-header")//agrego la clase encabezado-header a la etiqueta h1
h1.classList.remove("encabezado-header")//eliminamos la clase encabezado-header

//Crear Etiqueta//

const img = document.createElement("img")//creamos una etiqueta img guardandola en una variable
img.setAttribute("src","https://img.freepik.com/vector-gratis/ilustracion-vector-dibujos-animados-lindo-corgi-beber-leche-te-boba-bebida-animal-concepto-aislado-vector-estilo-dibujos-animados-plana_138676-1943.jpg?w=2000") //le asginamos el atributo src con la ruta de la imagen
//img.setAttribute("width", "200px")
console.log(img)
parrafo.innerHTML= "" //elimino el texto ("es otro parrafo")                                                                                          
parrafo.appendChild(img)//a la etiqueta parrafo le asignamos la etiqueta img creada en js.

btn.addEventListener("click", btnOnClick)

function btnOnClick(){
    console.log(input1.value + input2.value); 
    rSuma.value = Number(input1.value) + Number(input2.value)
    rResta.value = Number(input1.value) - Number(input2.value)
    rMult.value = Number(input1.value) * Number(input2.value)
    rDiv.value = Number(input1.value) / Number(input2.value)
}







