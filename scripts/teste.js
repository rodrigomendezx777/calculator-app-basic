const numbers = document.querySelectorAll('.number')

const mainDisplay = document.querySelector('.display__main')

const dot = document.querySelector('.dot')

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
    mainDisplay.innerText = ''
  })


numbers.forEach(function (element){
    element.addEventListener("click", (event) => {
        const numberConverted = Number(event.target.innerText)

        if (mainDisplay.innerText.startsWith("0") && !mainDisplay.innerText.includes(".")){
          mainDisplay.innerText = numberConverted
        } else {
            mainDisplay.innerText = mainDisplay.innerText.concat(numberConverted)
        }
    })
})



// calculos
// 