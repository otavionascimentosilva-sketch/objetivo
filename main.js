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
        botoes[i].classList.add("ativo")
        textos[i].classList.add("ativo")
    }
}

const contadores = document.querySelectorAll(".contador")
const rempoObjetivo1 = new Date("2026-10-05T00:00:00")
const rempoObjetivo2 = new Date("2026-11-05T00:00:00")
const rempoObjetivo3 = new Date("2026-12-05T00:00:00")
const rempoObjetivo4 = new Date("2027-01-05T00:00:00")

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4]

function calculaTempo(tempoObjetivo){
   let tempoAtual = new Date();
   let tempoFinal = tempoObjetivo - tempoAtual
   console.log(tempoFinal)
   let segundos = Math.floor(tempoFinal / 1000)
   let minutos = Math.floor(segundos / 60)
   let horas = Math.floor(minutos / 60)
   let dias = Math.floor(horas / 24)

   segundos %= 60
   minutos %= 60
   horas %= 24
   if (tempoFinal > 0){
       return [dias, horas, minutos, segundos]
   }else{
       return [0,0,0,0]
   }
   function atualizaCronometro(){
      for(let i=0; i,contadores.length;i++){
        
      }
   }
}

calculaTempo(tempoObjetivo1)