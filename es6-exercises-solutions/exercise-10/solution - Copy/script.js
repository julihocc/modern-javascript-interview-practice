import * as fs from 'fs'
class Person {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get fullName () {
        return this.#firstName+" "+this.#lastName
    }
    
    toJSON(){
        return {
            firstName: this.#firstName,
            lastName: this.#lastName
        }
    }
}

const jim = new Person('Jim', 'Halpert')
console.log(jim.fullName)

class Medic extends Person {
    #speciality;
    constructor(firstName, lastName, speciality) {
        super(firstName, lastName);
        this.#speciality = speciality;
    }
}

const ravi = new Medic('Ravi', " ", 'pediatric surgeon')
console.log(ravi.fullName)

// Download Jim's data

const jimJason = JSON.stringify(jim)
console.log(jimJason)

const storeData = (data, path) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

storeData(jim, "jim.json")