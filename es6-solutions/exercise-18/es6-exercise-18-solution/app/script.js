document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#candidatesTable');
    const addLink = document.getElementById('addCandidate');

    function updateTable() {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => {
                table.innerHTML = `
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    ${data.map(candidate => `
                        <tr>
                            <td>${candidate.name}</td>
                            <td>${candidate.email}</td>
                            <td>${candidate.phone}</td>
                            <td>
                                <a href="#" class="edit" data-id="${candidate.id}">Edit</a>
                                /
                                <a href="#" class="delete" data-id="${candidate.id}">Delete</a>
                            </td>
                        </tr>
                    `).join('')}
                `;
            })
            .then(() => {
                Array.from(document.querySelectorAll('.edit')).forEach(editLink => {
                    editLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        const id = e.target.dataset.id;
                        const row = e.target.closest('tr');
                        const name = prompt('Enter the new name');
                        const email = prompt('Enter the new email');
                        const phone = prompt('Enter the new phone');
                        if (name && email && phone) {
                            editCandidate(id, {name, email, phone}, row);
                        }
                    });
                });

                Array.from(document.querySelectorAll('.delete')).forEach(deleteLink => {
                    deleteLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        const id = e.target.dataset.id;
                        if (confirm('Are you sure you want to delete this candidate?')) {
                            deleteCandidate(id);
                        }
                    });
                });
            });
    }

    function editCandidate(id, candidate, row) {
        fetch(`http://localhost:3000/users/${id}`, {
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
                // const row = document.querySelector(`tr[data-id="${updatedCandidate.id}"]`);
                if (row) {
                    row.querySelector('td:nth-child(1)').textContent = updatedCandidate.name;
                    row.querySelector('td:nth-child(2)').textContent = updatedCandidate.email;
                    row.querySelector('td:nth-child(3)').textContent = updatedCandidate.phone;
                }
            })
            .catch(error => console.log(error));
    }

    function deleteCandidate(id) {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                updateTable();
            });
    }

    addLink.addEventListener('click', (e) => {
        e.preventDefault();
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameCell.appendChild(nameInput);

        const emailCell = document.createElement('td');
        const emailInput = document.createElement('input');
        emailInput.type = 'text';
        emailCell.appendChild(emailInput);

        const phoneCell = document.createElement('td');
        const phoneInput = document.createElement('input');
        phoneInput.type = 'text';
        phoneCell.appendChild(phoneInput);

        const actionCell = document.createElement('td');
        const saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        saveButton.addEventListener('click', (e) => {
            e.preventDefault();
            postCandidate({
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value
            });
            row.remove();  // remove row after saving
        });
        actionCell.appendChild(saveButton);

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(phoneCell);
        row.appendChild(actionCell);

        table.appendChild(row);
    });

    function postCandidate(candidate) {
        fetch('http://localhost:3000/users', {
            method: 'POST', body: JSON.stringify(candidate), headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(() => {
                updateTable();
            });
    }

    updateTable();
});
