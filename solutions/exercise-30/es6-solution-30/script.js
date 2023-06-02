//
// const p = document.querySelectorAll('p')
//
// for(const idx in p){
//     if(idx%2===1){
//         p[idx].style.display = 'none'
//     }
//     else{
//         p[idx].addEventListener('click', function(){
//             let nextIdx = parseInt(idx)+1
//             let nextP = p[nextIdx]
//             let display = nextP.style.display
//             if(display==='none'){
//                 nextP.style.display = 'block'
//             } else {
//                 nextP.style.display = 'none'
//             }
//         });
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    const pElements = document.querySelectorAll('p');

    for (let i = 1; i < pElements.length; i += 2) {
        pElements[i].style.display = 'none';
    }

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'P') {
            const nextP = target.nextElementSibling;
            if (nextP && nextP.tagName === 'P') {
                nextP.style.display = (nextP.style.display === 'none') ? 'block' : 'none';
            }
        }
    });
});
