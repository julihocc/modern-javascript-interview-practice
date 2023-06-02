document.addEventListener('DOMContentLoaded', function() {
    const pElements = document.querySelectorAll('p');

    for (let i = 1; i < pElements.length; i += 2) {
        pElements[i].style.display = 'none';
    }

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'P') {
            pElements.forEach(function(p) {
                p.style.display = 'none';
            });
            const pos = Array.prototype.indexOf.call(pElements, target);
            if (pos%2 === 0) {
                pElements[pos+1].style.display = 'block';
            } else {
                for (let i = 0; i < pElements.length; i += 2) {
                    pElements[i].style.display = 'block';
                }
            }
        }
    });
});
