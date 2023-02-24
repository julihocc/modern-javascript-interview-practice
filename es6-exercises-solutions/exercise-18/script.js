const table = document.querySelector('table');
const add= document.getElementById('add')

async function editDeleteListener(){
    const tr = this.parentElement.parentElement;
    tr.remove();
}

async function addRow(counter){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${counter}`);
    console.log(response);
    const data = await response.json();
    const name = data.name.split(" ")[0];
    const lastName = data.name.split(" ")[1];
    const tr = document.createElement('tr');
    const nameCell = document.createElement('td');
    const lastNameCell = document.createElement('td');
    const phoneCell = document.createElement('td');
    nameCell.textContent = name;
    lastNameCell.textContent = lastName;
    phoneCell.textContent = data.phone;
    tr.appendChild(nameCell);
    tr.appendChild(lastNameCell);
    tr.appendChild(phoneCell);
    
    const editDeleteOption = document.createElement('button');
    editDeleteOption.addEventListener('click', editDeleteListener);
    editDeleteOption.textContent = 'Edit/Delete';
    const editDeleteOptionCell = document.createElement('td');
    editDeleteOptionCell.appendChild(editDeleteOption);
    tr.appendChild(editDeleteOptionCell);
    table.appendChild(tr);
}

let counter = 1;

add.addEventListener('click', function(event) {
    addRow(counter);
    if(counter<10) counter++;
});
