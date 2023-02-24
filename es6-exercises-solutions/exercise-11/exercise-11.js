const testObj1 = {"a": 1, "b": 2, "c": 3}
const testObj2 = {"a": 11, "b": 22, "d": 4}

const difference = (obj1, obj2) => {
    let prop1 = new Set(Object.getOwnPropertyNames(obj1))
    let prop2 = new Set(Object.getOwnPropertyNames(obj2))
    let difference = new Set()
    for (let prop of prop1) {
        if (!prop2.has(prop)) {
            difference.add(prop)
        }
    }
    for (let prop of prop2) {
        if (!prop1.has(prop)) {
            difference.add(prop)
        }
    }
    return difference
}

const output = difference(testObj1, testObj2)
console.log(output);
