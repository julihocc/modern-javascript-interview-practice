const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const numberID = document.querySelector('#numberID');

window.addEventListener('load', () => {
    const users = JSON.parse(localStorage.getItem('users'))||[];
    console.log('users: '+JSON.stringify(users));
    users.forEach(id => {
        showUser(id);
    });
});
numberID.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        const id = numberID.value;
        console.log('id: '+id.constructor.name);
        const users = JSON.parse(localStorage.getItem('users'))||[];
        if (!users.includes(id)) {
            users.push(id);
            console.log('users: '+JSON.stringify(users));
            localStorage.setItem('users', JSON.stringify(users));
            showUser(id);
        }
        else {
            alert(`User ${event.target.value} already exists`);
            event.target.value = '';
        }


    }
});

async function showUser(id) {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    console.log(response);

    if (response.ok && response.status === 200) {
        const data = await response.json();
        const name = data.firstName;
        const lastName = data.lastName;
        const tr = document.createElement('tr');
        tr.id = id
        const nameCell = document.createElement('td');
        const lastNameCell = document.createElement('td');
        const phoneCell = document.createElement('td');
        nameCell.textContent = name;
        lastNameCell.textContent = lastName;
        phoneCell.textContent = data.phone;
        tr.appendChild(nameCell);
        tr.appendChild(lastNameCell);
        tr.appendChild(phoneCell);

        const editOption = document.createElement('button');
        editOption.addEventListener('click', editListener);
        editOption.textContent = 'Edit';
        const editDeleteOptionCell = document.createElement('td');
        editDeleteOptionCell.appendChild(editOption);

        const deleteOption = document.createElement('button');
        deleteOption.addEventListener('click', deleteListener);
        deleteOption.textContent = 'Delete';
        editDeleteOptionCell.appendChild(deleteOption);
        tr.appendChild(editDeleteOptionCell);

        tbody.appendChild(tr);
    }
}

const editListener = event => {
    console.log('edit');
    const tr = event.target.parentElement.parentElement;
    const nameCell = tr.children[0];
    const surnameCell = tr.children[1];
    const phoneCell = tr.children[2];
    const previousName = nameCell.textContent;
    const previousSurname = surnameCell.textContent;
    const previousPhone = phoneCell.textContent;
    const previousData = [previousName, previousSurname, previousPhone];
    nameCell.innerHTML = `<input type="text" value="${previousName}">`;
    surnameCell.innerHTML = `<input type="text" value="${previousSurname}">`;
    phoneCell.innerHTML = `<input type="text" value="${previousPhone}">`;
    const editButton = tr.children[3].children[0];
    editButton.textContent = 'Save';
    const deleteButton = tr.children[3].children[1];
    deleteButton.textContent = 'Cancel';
    editButton.removeEventListener('click', editListener);
    editButton.addEventListener('click', saveListener);
    deleteButton.removeEventListener('click', deleteListener);
    deleteButton.addEventListener('click', event => cancelListener(event, previousData));
}

const deleteListener = event => {
    console.log('delete');
    const tr = event.target.parentElement.parentElement;
    removeUser(tr);
}

const removeUser = async tr => {
    const response = await fetch(`https://dummyjson.com/users/${tr.id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    if (data){
        console.log('delete data: '+JSON.stringify(data));
        tbody.removeChild(tr);
    } else {
        console.log('no data' );
    }
}
const saveListener = event => {
    console.log('save');
    const tr = event.target.parentElement.parentElement;
    const nameCell = tr.children[0];
    const surnameCell = tr.children[1];
    const phoneCell = tr.children[2];
    const nameInput = nameCell.children[0];
    const surnameInput = surnameCell.children[0];
    const phoneInput = phoneCell.children[0];
    console.log('tr.id: '+tr.id);

    updateUser(tr, nameInput.value, surnameInput.value, phoneInput.value)
}

const updateUser = async (tr, name, surname, phone) => {
    const sentData = {
        firstName: name,
        lastName: surname,
        phone: phone
    }
    const response = await fetch(`https://dummyjson.com/users/${tr.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sentData)
    });
    const data = await response.json();
    if (data){
        console.log('data: '+JSON.stringify(data));
        const nameCell = tr.children[0];
        const surnameCell = tr.children[1];
        const phoneCell = tr.children[2];
        nameCell.textContent = data.firstName;
        surnameCell.textContent = data.lastName;
        phoneCell.textContent = data.phone;
        const editButton = tr.children[3].children[0];
        editButton.textContent = 'Edit';
        const deleteButton = tr.children[3].children[1];
        deleteButton.textContent = 'Delete';
        editButton.removeEventListener('click', saveListener);
        editButton.addEventListener('click', editListener);
        deleteButton.removeEventListener('click', cancelListener);
        deleteButton.addEventListener('click', deleteListener);
    } else {
        console.log('no data' );
    }
}

const cancelListener = function(event, previousData) {
    console.log('cancel');
    const tr = event.target.parentElement.parentElement;
    const nameCell = tr.children[0];
    const surnameCell = tr.children[1];
    const phoneCell = tr.children[2];
    nameCell.textContent = previousData[0];
    surnameCell.textContent = previousData[1];
    phoneCell.textContent = previousData[2];
    const editButton = tr.children[3].children[0];
    editButton.textContent = 'Edit';
    const deleteButton = tr.children[3].children[1];
    deleteButton.textContent = 'Delete';
    editButton.removeEventListener('click', saveListener);
    editButton.addEventListener('click', editListener);
    deleteButton.removeEventListener('click', cancelListener);
    deleteButton.addEventListener('click', deleteListener);
}

