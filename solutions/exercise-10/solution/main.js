class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    sendInfo() {
        const fullName = this.getFullName();
        const url = new URL('https://jsonplaceholder.typicode.com/users');
        url.searchParams.append('name', fullName);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(user => user.name === fullName);
                console.log('Filtered Data: ', filteredData);
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
