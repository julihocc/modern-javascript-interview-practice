const div = document.querySelector('div')
const a = document.querySelector('a')

console.log(div)

a.addEventListener('click', () => {
    div.style.display = 'block'
})