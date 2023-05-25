document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#candidatesTable');
    const addLink = document.querySelector('#addCandidate');

    function updateTable() {
        fetch('https://jsonplaceholder.typicode.com/users')
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
                        // Implement editing functionality here
                        const id = e.target.dataset.id;
                        const name = prompt('Enter the new name');
                        const email = prompt('Enter the new email');
                        const phone = prompt('Enter the new phone');
                        if (name && email && phone) {
                            editCandidate(id, {name, email, phone});
                        }
                    });
                });

                function editCandidate(id, candidate) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(candidate),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(() => {
                            updateTable();
                        });
                }

                Array.from(document.querySelectorAll('.delete')).forEach(deleteLink => {
                    deleteLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        deleteCandidate(e.target.dataset.id);
                    });
                });
            });
    }

    function addCandidate(candidate) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(candidate),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(() => {
                updateTable();
            });
    }

    function deleteCandidate(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                updateTable();
            });
    }

    addLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Implement adding functionality here
        const name = prompt('Enter the new candidate\'s name');
        const email = prompt('Enter the new candidate\'s email');
        const phone = prompt('Enter the new candidate\'s phone');
        if (name && email && phone) {
            postCandidate({name, email, phone});
        }
    });

    function postCandidate(candidate) {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(candidate),
            headers: {
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
