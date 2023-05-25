String.prototype.exclamation = function () {
    // console.log(this);
    return `${this}!`;
}

console.log('hello'.exclamation());
console.log('hello world'.exclamation());

const add = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

console.log(add(2, 5))
console.log(add(7, 11))
console.log(add(12, 8, 5, 6))
console.log(add(1))
console.log(add())
