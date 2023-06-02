document.addEventListener('DOMContentLoaded', function() {
    const pElements = document.querySelectorAll('p');

    for (let i = 0; i < pElements.length; i += 1) {
        if (i% 2 === 0) {
            pElements[i].classList.add('toggle');
        }
        if (i % 2 === 1) {
            pElements[i].classList.add('non-toggle');
            pElements[i].style.display = 'none';
        }
    }

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'P') {
            const targetIndex = Array.from(pElements).indexOf(target);
            const toggles = document.querySelectorAll('.toggle');
            const thisToggle = target.classList.contains('toggle') ? target : pElements[targetIndex - 1];
            const thisTogglePartner = target.classList.contains('toggle') ? pElements[targetIndex + 1] : target;
            const otherToggles = Array.from(toggles).filter( element => {
                return element !== thisToggle;
            })
            otherToggles.forEach( element => {
                element.style.display = element.style.display === 'none' ? 'block' : 'none';
            })
            thisTogglePartner.style.display = thisTogglePartner.style.display === 'none' ? 'block' : 'none';
        }
    });
});
