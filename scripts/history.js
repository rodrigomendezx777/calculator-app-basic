const history__btn = document.querySelector('.action__history')
const divNumerals = document.querySelector('.calculator__numerals')
const div_history = document.querySelector('.history__group')

history__btn.addEventListener('click', () => {
    if (divNumerals.style.display !== 'none') {
        divNumerals.style.display = 'none';
        div_history.style.display = 'block';
    } else {
        divNumerals.style.display = '';
        div_history.style.display = 'none';
    }
});