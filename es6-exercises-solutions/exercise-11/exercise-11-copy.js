const sameProperties = (obj1, obj2) => {
    const prop1 = new Set(Object.getOwnPropertyNames(obj1))
    console.log(prop1);
    const prop2 = new Set(Object.getOwnPropertyNames(obj2))
    console.log(prop2);
    return new Set(
        [...prop1].filter(x=>prop2.has(x))
    )
}

const testObj1 = {"a": 1, "b": 2, "c": 3}
const testObj2 = {"a": 11, "b": 22, "d": 4}

const output = sameProperties(testObj1, testObj2)
console.log(output);


