const { createElement } = require("react")

let notas = []

let buttonAdd = document.querySelector("#adicionar")

function RecebeNota(){
    let nota = document.querySelector("#nota")
    console.log(nota.value)

    nota.value = nota.value.replace(",", ".")
    let valor = parseFloat(nota.value)

    if (nota.value.trim() == ""){
        alert("Por favor, insira uma nota")
        return
    }
    else if(valor.toString() !== nota.value){
        alert("A nota digitada é inválida, por favor, insira uma nota válida")
        return
    }
    else if (valor < 0 || valor > 10){
        alert("A nota digitada é inválida, por favor, insira uma nota válida")
        return
    }

    notas.push(nota.value)

    let resposta = document.createElement

    console.log("teste")
}

function CalculaMedia(){

}

buttonAdd.addEventListener("click", RecebeNota)

