// Get references to the display and buttons
const mainDisplay = document.querySelector('.display__main');
const numbers = document.querySelectorAll('.number');
const dot = document.querySelector('.dot');
const operators = document.querySelector('.calculator__operator');
const clear = document.querySelector('.action__clear-display');
const clearAll = document.querySelector('.limparTudo');

// Initialize variables
let firstOperand = null;
let secondOperand = null;
let operator = null;
let currentText = '';

// Function to handle number button clicks
numbers.forEach(number => {
  number.addEventListener('click', () => {
    const numberConverted = Number(number.innerText);

    if (currentText === '0' && !currentText.includes('.')) {
      mainDisplay.innerText = numberConverted;
    } else {
      mainDisplay.innerText = currentText.concat(numberConverted);
    }

    currentText = mainDisplay.innerText;
  });
});

// Function to handle dot button click
dot.addEventListener('click', () => {
  if (!currentText.includes('.')) {
    mainDisplay.innerText = currentText + '.';
    currentText = mainDisplay.innerText;
  }
});

// Function to clear the display
clear.addEventListener('click', () => {
  if (currentText.length === 0 || currentText.length === 1) {
    mainDisplay.innerText = '0';
    return;
  }

  const newText = currentText.slice(0, -1);
  mainDisplay.innerText = newText;
  currentText = newText;
});

// Function to clear everything
clearAll.addEventListener('click', () => {
  mainDisplay.innerText = '0';
  firstOperand = null;
  secondOperand = null;
  operator = null;
  currentText = '';
});

// Function to handle operator button clicks
operators.addEventListener('click', (event) => {
  if (currentText === '') return;

  const clickedOperator = event.target.innerText;

  if (operator !== null) {
    secondOperand = Number(currentText);
    let result;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '%':
        result = firstOperand % secondOperand
        break;
      case '/':
        if (secondOperand === 0) {
          alert('Division by zero!');
          return;
        }

        result = firstOperand / secondOperand;
        break;
      default:
        break;
    }

    firstOperand = result;
    currentText = result.toString();
  } else {
    firstOperand = Number(currentText);
  }

  operator = clickedOperator;
  mainDisplay.innerText = currentText;
  currentText = '';
});









if(mainDisplay.innerText.includes('+') || mainDisplay.innerText.includes('-') || mainDisplay.innerText.includes('x') || mainDisplay.innerText.includes('/')){
  const extractSecondNumber = mainDisplay.innerText.split()
} else{
  firstNumber = mainDisplay.innerText
}
console.table({
  firstNumber,
  secondNumber
})