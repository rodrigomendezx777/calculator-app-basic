
//funçao para limpar o display
function clean(){
    document.querySelector('.display__main').innerHTML = ''
}

//adicionar numeros ao display
function insertNumber(num){
    const currentValue = document.querySelector('.display__main').innerText;
    const newValue = currentValue + num;
    document.querySelector('.display__main').innerText = newValue;

}

function insertOperator(ope){
      // Obtém o valor atual no campo de resultado
    const currentValue = document.querySelector('.display__main').innerText;

    // Se não estiver vazio, concatena o operador ao valor atual
        const newValue = currentValue + ope;

    // Atualiza o campo de resultado com o novo valor
        document.querySelector('.display__main').innerText = newValue;

}


const mainDisplay = document.querySelector('.display__main') //pega a div do display

const displayContent = mainDisplay.innerText;
const operators = ['x', '/', '+', '-'];
const hasOperator = operators.some(operator => displayContent.includes(operator));


if (hasOperator) {
    const splittedContent = mainDisplay.innerText.split(/([+-x\/])/)
    const firstNumber = Number(splittedContent[0]);
    const secondNumber = Number(splittedContent[2]);
}


function execute (valor1, valor2){
    if (operator == "+"){
        valor1 + valor2
    } else if (operator == "-") {
        valor1 - valor2
    } else if (operator == "/") {
        valor1 / valor2
    } else if (operator == "x") {
        valor1 * valor2
    }
}


function calculate(){
    document.querySelector('.display__main').innerHTML = execute(firtNumber, secondNumber)
}











//------ operaçoes

// function subtracao(numero1, numero2) {
//     const menos = numero1 - numero2
//     return menos
//   }

//   function adicao(numero1, numero2) {
//     const mais = numero1 + numero2
//     return mais
//   }



//   function divisao(numero1, numero2) {
//     const dividir = numero1 / numero2
//     return dividir
//   }



