function RecebeNota(){
    let nota = document.querySelector("#nota");
    nota.value = nota.value.replace(",", ".");

    let valor = parseFloat(nota.value);

    if (nota.value.trim() == ""){
        alert("Por favor, insira uma nota");
        return;
    }
    else if(valor.toString() !== nota.value){
        alert("A nota digitada é inválida, por favor, insira uma nota válida");
        return;
    }
    else if (valor < 0 || valor > 10){
        alert("A nota digitada é inválida, por favor, insira uma nota válida");
        return;
    }

    notas.push(valor);

    let texto = ""
    for (let i = 0; i < notas.length; i++){
        texto += "A nota " + (i+1) + " foi " + notas[i] + "\n";
    }

    area.value = texto;
}

    function CalculaMedia(){
        let media = 0;
        let contador = 0
        for (let i = 0; i < notas.length; i++){
            media += notas[i];
            contador += 1;
        }

        media = media/contador

        let resposta = document.createElement("p");
        resposta.innerText = media.toFixed(2);
        let div = document.querySelector(".media");
        div.append(resposta);
}

let notas = [];

let buttonAdd = document.querySelector("#adicionar");
let buttonCalc = document.querySelector("#calcular");
let area = document.querySelector(".area");

buttonAdd.addEventListener("click", RecebeNota);
buttonCalc.addEventListener("click", CalculaMedia);