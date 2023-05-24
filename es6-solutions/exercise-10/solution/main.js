const axios = require('axios');
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    sendInfo() {
        console.log('Sending info...')
        axios.get(`https://jsonplaceholder.typicode.com/users?name=${this.name}&lastName=${this.lastName}`)
            .then(response => {
                console.log('Response: ');
                console.log('Data: ', response.data);
            })
            .catch(error => {
                console.log('There was an error: ', error);
            });
    }
}

class Medic extends Person {
    constructor(name, lastName, specialty) {
        super(name, lastName);
        this.specialty = specialty;
    }
}

let person = new Person("Jim", "Parsons");
console.log(person.getFullName());
person.sendInfo();
