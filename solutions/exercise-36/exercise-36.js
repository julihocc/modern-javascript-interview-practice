const myPowerFn = (base) => {
    return (exponent) => {
        return base ** exponent;
    };
}

const n = myPowerFn(3);
console.log(n(2));