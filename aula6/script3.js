// console.log("Hello World" )

// let idade = 12;
// const nome = "Rafael"

// console.log(nome)

// console.log("Bem vindo,",nome)

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 10; i <= 0; i--){
//     console.log(i)
// }
// let frutas = ["banana","kiwi","morango"]

// console.log(frutas[0])

// frutas[0] = "melao"

// console.log(frutas[0])

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

function mudarTudo(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "Lista de compras!"
    titulo.style.color = "blue"

    let itens = ["banana","kiwi","morango"]
    let container = document.getElementById("lista-frutas")
 
    container.innerHTML = ""
    for(let i = 0;i < itens.length; i++){
        container.innerHTML += `<p>Item ${i+1} ${itens[i]} </p>`
    }

}