document.addEventListener('DOMContentLoaded', function() {
    const pElements = document.querySelectorAll('p');

    for (let i = 1; i < pElements.length; i += 2) {
        pElements[i].style.display = 'none';
    }

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'P') {
            const targetIndex = Array.from(pElements).indexOf(target);
            // Only perform the operation on even indices, i.e., the "Toggle" elements
            if (targetIndex % 2 === 0) {
                const nextP = target.nextElementSibling;
                if (nextP && nextP.tagName === 'P') {
                    nextP.style.display = (nextP.style.display === 'none') ? 'block' : 'none';
                }
            }
        }
    });
});
