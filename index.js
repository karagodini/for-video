const container = document.querySelector('.container')
const containerTwo = document.querySelector('.container-2')

container.addEventListener('click', (e) => {
    e.preventDefault()
    containerTwo.style.display = 'flex'
    container.style.display = 'none'
})

containerTwo.addEventListener('click', (e) => {
    e.preventDefault()
    containerTwo.style.display = 'none'
    container.style.display = 'flex'
})