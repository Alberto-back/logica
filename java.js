
const nome = prompt("Digite seu nome:");
const idade = prompt ("digite sua idade")
const linguagem = prompt ("Qual linguagem de programação está estudando ?")
const pergunta = confirm ("VocÊ gosta desta linguagem?")

if(pergunta == true) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}

const msg= `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`
alert (msg)
