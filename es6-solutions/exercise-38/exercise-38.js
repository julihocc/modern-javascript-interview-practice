// Let's model a car, just by setting make and model
class Car {
    // To avoid any change in properties, we can use # to make them private
    #make
    #model

    constructor(make, model) {
        this.#make = make;
        this.#model = model;
    }

    // Now, we use getter to retrieve make and model

    get make() {
        return this.#make;
    }

    get model() {
        return this.#model;
    }
}

const car = new Car('Ford', 'Kia');
console.log(car.make); // Ford
console.log(car.model); // Kia

// ...but is not possible anymore to change the make and model
car.make = 'Ferrari'; // TypeError: Cannot assign to read only property 'make' of object '#<Car>'
console.log(car.make); // Ford
