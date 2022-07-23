
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// event in which the button toggles the class and sets focus on the input
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})