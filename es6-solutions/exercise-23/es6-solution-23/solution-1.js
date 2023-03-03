function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}
// Usage of shuffle
// let arr = [1, 2, 3, 4, 5];
// arr = shuffleArray(arr);
// console.log(arr);
function range(start, end) {
    const ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

class RandomGenerator {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.range = range(min, max);
        this.range = shuffleArray(this.range);
        this.counter = 0;
    }
    next() {
        if (this.counter >= this.range.length) {
            this.counter = 0;
            this.range = shuffleArray(this.range);
        }
        return { value: this.range[this.counter++] };
    }
}

const generator = new RandomGenerator(0, 10);

for (let i = 0; i < 10; i++) {
    console.log(generator.next());
}