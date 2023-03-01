
const p = document.querySelectorAll('p')

for(const idx in p){
    if(idx%2===1){
        p[idx].style.display = 'none'
    }
    else{
        p[idx].addEventListener('click', function(){
            let nextIdx = parseInt(idx)+1
            let nextP = p[nextIdx]
            let display = nextP.style.display
            if(display==='none'){
                nextP.style.display = 'block'
            } else {
                nextP.style.display = 'none'
            }
        });
    }
}
