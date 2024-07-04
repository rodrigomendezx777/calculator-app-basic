// const displayResult = document.querySelector(".display__main") // fazer o elemento "display__main" receber o valor no display



// //------------Teclas Numerais-------------
// const grupoCalculadora = document.querySelector(".calculator__group");

// const botoesNumericos = grupoCalculadora.querySelector(".calculator__number");



// function clickInNumber(numero){
//     const textBnt = numero.textContent
//     return parseFloat(textBnt)
// }


// let numero1 = clickInNumber(botoesNumericos[0]); // Pega o valor do primeiro botão (4)
// let numero2 = clickInNumber(botoesNumericos[1]); // Pega o valor do segundo botão (5)




function insertNumber(num){
    const currentValue = document.getElementById('result').innerHTML;
    const newValue = currentValue + num;
    document.getElementById('result').innerHTML = newValue;
}




function insertOperator(ope){
      // Obtém o valor atual no campo de resultado
    const currentValue = document.getElementById('result').innerHTML;

  // Verifica se o campo de resultado está vazio
    if (currentValue === "") {
    // Se estiver vazio, insere o operador diretamente
        document.getElementById('result').innerHTML = '🤷‍♂️';
    } else {
    // Se não estiver vazio, concatena o operador ao valor atual
        const newValue = currentValue + ope;

    // Atualiza o campo de resultado com o novo valor
        document.getElementById('result').innerHTML = newValue;
    }
}




function clean(){
    document.getElementById('result').innerHTML = ''
}