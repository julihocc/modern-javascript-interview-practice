const body = document.querySelector('body')
const p = document.querySelectorAll('p')

for(const idx in p){
    if(idx%2===1){
        p[idx].style.display = 'none'
    }
    p[idx].id = idx
}

body.onclick = function (event) {
    let target = event.target.closest('p')
    let idx = target.id
    let nextIdx = parseInt(idx)+1    
    let nextP = p[nextIdx]
    let display = nextP.style.display
    console.log(display)
    if(display==='none'){
        nextP.style.display = 'block'
    } else {
        nextP.style.display = 'none'
    }
}
