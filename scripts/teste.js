const numbers = document.querySelectorAll('.number')
const mainDisplay = document.querySelector('.display__main')
const dot = document.querySelector('.dot')
const operators = document.querySelectorAll('.calculator__operator')
const equal = document.querySelector('.calculator__equal')
const lastNumber = document.querySelector('.action__result')
let displayHistory = document.querySelector('.display__history')


let firstNumber = null;
let secondNumber = null;
let currentOperator = null;



dot.addEventListener("click", (event) => {
    const value = event.target.innerText
    if(mainDisplay.innerText.includes(".")) return
    mainDisplay.innerText += value
})

// ------------ limpar display
const apagar = document.querySelector('.action__clear-display')
    apagar.addEventListener('click', () => {
    const currentText = mainDisplay.innerText;

    if (currentText.length === 0 || currentText.length === 1) {
      mainDisplay.innerText = '0';
      return;
    }

    const newText = currentText.slice(0, -1);
    mainDisplay.innerText = newText;
  });

// limpar tudo
  const apagarAll = document.querySelector('.limparTudo')
  apagarAll.addEventListener('click',()=>{
    mainDisplay.innerText = '0'
    displayHistory.innerText = ''
  })


  operators.forEach(function (op){
    op.addEventListener('click', (event) =>{
      const operation = event.target.innerText
      mainDisplay.innerText += operation
    })
  })


numbers.forEach(function (element){
    element.addEventListener("click", (event) => {
        const numberConverted = event.target.innerText
        if (mainDisplay.innerText.startsWith("0") && !mainDisplay.innerText.includes(".")){
          mainDisplay.innerText = numberConverted
        } else {
            mainDisplay.innerText = mainDisplay.innerText.concat(numberConverted)
        }
        
        const mainOperators =['+','-','x','/','%']
      mainOperators.forEach(function (operator){
          if(mainDisplay.innerText.includes(operator)){
            currentOperator = operator
            const extractNumbers = mainDisplay.innerText.split(operator)
            firstNumber = extractNumbers[0]
            secondNumber = extractNumbers[1]
          }
          if(mainDisplay.innerText.includes(firstNumber)){
            displayHistory.innerText =  mainDisplay.innerText
          }

          console.table({
            firstNumber,
            currentOperator,
            secondNumber
          })
    })
})

})


equal.addEventListener('click', () => {
  if (firstNumber !== null && currentOperator !== null && secondNumber !== null) {

      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);
      let result;

      switch (currentOperator) {
          case '+':
              result = num1 + num2;
              break;
          case '-':
              result = num1 - num2;
              break;
          case 'x':
              result = num1 * num2;
              break;
          case '%':
              result = num1 % num2;
              break;
          case '/':
              if (num2 === 0) {
                  alert("Não é possivel dividir por zero!!");
                  return;
              }
              result = num1 / num2;
              break;
          default:
              return;
      }

      mainDisplay.innerText = result.toString();
      lastNumber.innerText = result.toString();



      firstNumber = null;
      secondNumber = null;
      currentOperator = null;
  }
});
