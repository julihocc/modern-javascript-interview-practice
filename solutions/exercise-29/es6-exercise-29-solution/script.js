const a = document.querySelector('#id1')

a.addEventListener('click', event => {
    event.preventDefault()
    const div = a.previousElementSibling
    console.log(div)
    div.style.display = 'block'
})