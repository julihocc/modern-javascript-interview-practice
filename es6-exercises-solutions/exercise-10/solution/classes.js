export class Person {
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
export class Medic extends Person {
    #speciality;
    constructor(firstName, lastName, speciality) {
        super(firstName, lastName);
        this.#speciality = speciality;
    }
}