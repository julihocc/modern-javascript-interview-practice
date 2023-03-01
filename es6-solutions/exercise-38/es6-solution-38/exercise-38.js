// Let's model a car, just by setting make and model
class Vehicle {
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

class Motor {
    #cylinders

    constructor(cylinders) {
        this.#cylinders = cylinders;
    }

    get cylinders() {
        return this.#cylinders;
    }
}

// example of class inheritance
class Car extends Vehicle {
    
    #motor

    constructor(make, model, motor) {
        super(make, model)
        // example of class composition
        this.#motor = motor
    }

    get cylinders(){
        return this.#motor.cylinders
    }

}

const motor = new Motor(4);
const car = new Car('Ford', 'Kia', motor);
console.log(car.make); // Ford
console.log(car.model); // Kia
console.log(car.cylinders);

// ...but is not possible anymore to change the make and model

car.make = 'Ferrari'; //
console.log(car.make); // Ford

