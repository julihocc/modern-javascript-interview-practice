const candidate = {
    name: {
        firstname: 'John',
        lastname: 'Galt',
        phone: '123-456-7890'
    },
    printName: function () {
        return this.name.firstname + ' ' + this.name.lastname;
    }
};

// Select the second div with class "info"
const secondInfoDiv = document.querySelector('#body > .info');

// Insert the candidate's first name into the first child of the second info div
const firstChildDiv = secondInfoDiv.querySelector('div:first-child');
firstChildDiv.textContent = candidate.name.firstname;

// Insert the full name into the second div using the printName method
const secondChildDiv = secondInfoDiv.querySelector('div:nth-child(2)');
secondChildDiv.textContent = candidate.printName();
