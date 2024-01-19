let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clickConsole() {
    console.log('O botão foi clicado');

}

function clickAlert() {
    alert('Eu amo JS');

}

function clickPrompt() {
    let cidade = prompt('Digite uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`) ;
}


function clickSoma() {
    let numero1 = parseInt(prompt('Digite um número:'));
    let numero2 = parseInt(prompt('Agora digite outro número:'));
    let resultado = numero1 + numero2
    alert(`A soma dos números ${numero1} e ${numero2} é igual a ${resultado}`)
}