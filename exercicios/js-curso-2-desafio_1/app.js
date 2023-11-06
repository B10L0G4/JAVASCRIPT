let titulo = document.querySelector("h1")
titulo.innerHTML= ' Hora do Desafio'

function consoleClick() {
    console.log('O botão foi clicado')
}

function loveJS() {
    alert('Eu amo JS')
}

function nameCity() {
    let cidade = prompt('insira cidade')
    alert('Estive em '+ cidade +' e lembrei de você')
}
let nomeCidade = document.innerHTML('.button').value
nomeCidade.onclick = nameCity

function soma() {
    let num1 = parseInt(prompt('insira o numero'))
    let num2 = parseInt(prompt('insira o numeor'))

    
    alert('A soma de ' + num1+ ' + '+ num2 + ' é ' +(num1 + num2))
}
let somaNumeros = document.innerHTML('.button').value
somaNumeros.onclick = soma