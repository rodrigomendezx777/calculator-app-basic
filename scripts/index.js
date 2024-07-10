const numbers = document.querySelectorAll('.number')
const mainDisplay = document.querySelector('.display__main')
const dot = document.querySelector('.dot')

dot.addEventListener("click",(event) =>{
    const value = event.target.innerText
    if(mainDisplay.innerText.includes(".")) return
    mainDisplay.innerText += value
})

