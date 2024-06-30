const themes = {
    light: {
        alias: 'light',
        label: 'claro',
        opposite: 'escuro'
    },
    dark: {
        alias: 'dark',
        label: 'escuro',
        opposite: 'claro'
    }
}

let actualTheme = 'light'
const switchColorToggle = document.querySelector('.switch-color__toggle')

const toggleTheme = () => {
    const linkthemeAlreadyExist = document.getElementById('theme')
    const documentHTML = document.querySelector('head')
    const linkStyleCSS = linkthemeAlreadyExist || document.createElement('link')
    linkStyleCSS.id = 'theme'
    linkStyleCSS.rel = 'stylesheet'
    linkStyleCSS.href = `./styles/theme/${themes[actualTheme].alias}.style.css`
    documentHTML.appendChild(linkStyleCSS)
    const switchColorAppointment = document.querySelector('.switch-color__appointment')
    switchColorAppointment.textContent = switchColorAppointment.textContent.replace('{{theme}}', themes[actualTheme].opposite)

    actualTheme = actualTheme === 'light' ? 'dark' : 'light'
    switchColorToggle.style.justifyContent = actualTheme === 'light' ? 'end' : 'start'
}

toggleTheme()

switchColorToggle.addEventListener('click', toggleTheme)
