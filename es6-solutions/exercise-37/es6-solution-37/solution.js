String.prototype.exclamation = function (){
    // console.log(this);
    return `${this}!`;
}

console.log('hello'.exclamation());
console.log('hello world'.exclamation());

const add =(...args) => {
    if (args.length>0){
        return args.reduce((a,b) => a + b);
    } else {
        console.error('Not enough arguments');
        return null
    }
}

console.log(add(2,5))
console.log(add(7,11))
console.log(add(12, 8, 5, 6))
console.log(add(1))
console.log(add())
