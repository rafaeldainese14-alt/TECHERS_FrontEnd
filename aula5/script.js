// document.getElementById(nome) // retorna o elemento com o id passado
// document.getElementsByClassName(nome) // retorna todas as tags com essas classe
// document.getElementsByTagName(nome) // retornar um vetor com todas as tags com esse nome

// const titulo = document.getElementById("titulo1")

// titulo.textContent = "Título adicionada com JS"
// titulo.setAttribute("class", "titulo base")
// titulo.style.color = "blue"

let src = "https://i.pinimg.com/736x/f3/96/53/f39653ba234c03aa2623dbb531e16414.jpg"
let text = "O melhor super heroí de todos os tempos"
let titulo = "Spiderman"

const infoCard = document.getElementById('info1')
const tituloCard = document.getElementById('titulo1')
const imgCard = document.getElementById('img1')

imgCard.setAttribute('src', src)
infoCard.textContent = text 
tituloCard.textContent = titulo






