
const p = document.getElementsByTagName('p')


for (let i=0; i<p.length; i++) {
    if(i%2 === 1) {
        p[i].style.display = 'none'
    } else {
        p[i].addEventListener('click', () => {
            if (p[i+1].style.display === 'none') {
                p[i+1].style.display = 'block'
            } else {
                p[i+1].style.display = 'none'
            }
            for(let j=0; j<p.length; j++) {
                if(j%2 ===1  && j !== i+1) {
                    p[j].style.display = 'none'
                }
            }
        });
    }
}