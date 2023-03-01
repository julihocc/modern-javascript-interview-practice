const randomUnique = (min, max, count) => {
    const nums = new Set();
    const range = max - min + 1;
    while (nums.size < count) {
        nums.add(Math.floor(min + Math.random() * range));
    }
    return [...nums];
}

console.log(randomUnique(0, 10, 11));