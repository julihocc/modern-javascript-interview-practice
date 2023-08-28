// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
	// Select all paragraph elements in the document
	const pElements = document.querySelectorAll('p');
	
	// Initially set every other paragraph (1, 3, 5, etc.) to be hidden
	for (let i = 1; i < pElements.length; i += 2) {
		pElements[i].style.display = 'none';
	}
	
	// Add a click event listener to the document
	document.addEventListener('click', function(event) {
		// Identify the clicked element
		const target = event.target;
		
		// Find the index of the clicked element in the pElements NodeList
		const index = Array.from(pElements).indexOf(target);
		
		// Check if the clicked element is a "Toggle" paragraph (even index)
		if (index % 2 === 0) {
			// Hide all content paragraphs except the one next to the clicked "Toggle"
			for (let i = 1; i < pElements.length; i += 2) {
				if (pElements[i] !== target.nextElementSibling) {
					pElements[i].style.display = 'none';
				}
			}
			
			// Toggle the display of the content paragraph immediately following the clicked "Toggle"
			const nextP = target.nextElementSibling;
			if (nextP && nextP.tagName === 'P') {
				// Toggle behavior added here
				nextP.style.display = nextP.style.display === 'none' ? 'block' : 'none';
			}
		}
	});
});
