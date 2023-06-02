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
        const fullName = this.getFullName();
        console.log('Full name: ', fullName);
        const url = `https://jsonplaceholder.typicode.com/users?name=${fullName}`
        console.log('URL: ', url);
        fetch(url)
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

let person = new Person("Leanne", "Graham");
console.log(person.getFullName());
person.sendInfo();
