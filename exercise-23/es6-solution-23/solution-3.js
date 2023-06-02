class LCG {
    constructor(modulus) {
        this.state = 0;
        this.modulus = modulus;
        this.increment = this.random_relative_prime(modulus);
    }

    random_relative_prime(modulus) {
        let multiplier = modulus
        while (this.gcd(multiplier, modulus) !== 1) {
            multiplier = Math.floor(Math.random() * modulus);
        }
        return multiplier;
    }

    gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return this.gcd(b, a % b);
    }

    next() {
        this.state = (this.state+this.increment) % this.modulus;
        return this.state;
    }
}
class RandomRangeGenerator{
    constructor(min, max) {
        this.state = min
        this.min = min;
        this.generator = new LCG(max-min+1);
    }

    next() {
        this.state = this.min + this.generator.next();
        return this.state;
    }
}

const generator = new RandomRangeGenerator(1, 10);
for (let i = 0; i < 10; i++) {
    console.log(generator.next());
}
