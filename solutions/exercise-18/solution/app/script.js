const API_BASE_URL = 'http://localhost:3000/users';


document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#candidatesTable');
    const addLink = document.getElementById('addCandidate');

    function createInputCell() {
        const cell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        cell.appendChild(input);
        return {cell, input};
    }

    function updateTable() {
        fetch(`${API_BASE_URL}`)
            .then(response => response.json())
            .then(data => {

                const existingRows = table.querySelectorAll('tr:not(:first-child)');

                existingRows.forEach(row => row.remove());

                const template = document.querySelector('#candidateRow');
                data.forEach(candidate => {
                    const clone = document.importNode(template.content, true);
                    const td = clone.querySelectorAll('td');
                    td[0].textContent = candidate.name;
                    td[1].textContent = candidate.email;
                    td[2].textContent = candidate.phone;

                    const saveButton = clone.querySelector('.save');
                    saveButton.dataset.id = candidate.id;
                    saveButton.addEventListener('click', (e) => {
                        e.preventDefault();
                        const id = e.target.dataset.id;
                        const row = e.target.closest('tr');
                        const name = row.querySelector('td:nth-child(1)').textContent;
                        const email = row.querySelector('td:nth-child(2)').textContent;
                        const phone = row.querySelector('td:nth-child(3)').textContent;
                        if (name && email && phone) {
                            editCandidate(id, {name, email, phone}, row);
                        }
                    });

                    const deleteButton = clone.querySelector('.delete');
                    deleteButton.dataset.id = candidate.id;
                    deleteButton.addEventListener('click', (e) => {
                        e.preventDefault();
                        const id = e.target.dataset.id;
                        if (confirm('Are you sure you want to delete this candidate?')) {
                            deleteCandidate(id)
                                .then(() => {
                                    updateTable();
                                });
                        }
                    });

                    table.appendChild(clone);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    function editCandidate(id, candidate, row) {
        fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT', body: JSON.stringify(candidate), headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.statusText);
                }
            })
            .then(updatedCandidate => {
                if (row) {
                    row.querySelector('td:nth-child(1)').textContent = updatedCandidate.name;
                    row.querySelector('td:nth-child(2)').textContent = updatedCandidate.email;
                    row.querySelector('td:nth-child(3)').textContent = updatedCandidate.phone;
                }
                return updatedCandidate;
            })
            .then((updatedCandidate) => {
                updateTable();
                return updatedCandidate;
            })
            .catch(error => console.log(error));
    }


    function deleteCandidate(id) {
        return fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            .then(json => {
                updateTable();
                return json;
            })
            .catch(error => console.error('Error:', error));
    }


    function postCandidate(candidate) {
        return fetch(`${API_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(candidate),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            .catch(error => console.error('Error:', error));
    }

    addLink.addEventListener('click', (e) => {
        e.preventDefault();
        const row = document.createElement('tr');

        const {cell: nameCell, input: nameInput} = createInputCell();
        const {cell: emailCell, input: emailInput} = createInputCell();
        const {cell: phoneCell, input: phoneInput} = createInputCell();

        const actionCell = document.createElement('td');
        const saveButton = document.createElement('button');
        saveButton.innerText = 'Save';

        const cancelButton = document.createElement('button');
        cancelButton.innerText = 'Cancel';
        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
            row.remove();
        });

        saveButton.addEventListener('click', (e) => {
            e.preventDefault();
            postCandidate({
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value
            }).then(() => {
                row.remove();
                updateTable();
            });
        });

        actionCell.appendChild(saveButton);
        actionCell.appendChild(cancelButton);

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(phoneCell);
        row.appendChild(actionCell);

        table.appendChild(row);
    });

       updateTable();
});
