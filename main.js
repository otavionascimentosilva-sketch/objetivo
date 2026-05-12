const botoes = document.querySelectorAll(".botao")
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo")
console.log(textos)
  
for(let i = 0; i<botoes.length;i++){
    botoes[i].onclick = function () {
        for(let j=0; j<botoes.length;j++){
            botoes[i].classList.add("ativo")
            textos[i].classList.add("ativo")
        }
    }
}