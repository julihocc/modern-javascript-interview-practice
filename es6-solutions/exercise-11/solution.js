const testObj1 = {"a": 1, "b": 2, "c": 3, "e": 5}
const testObj2 = {"a": 11, "b": 22, "d": 4, "e": 5}

const difference = (obj1, obj2) => {
    let difference = new Set()
    for (let prop in obj1) {
        if (obj2[prop] === undefined || obj1[prop] !== obj2[prop]) {
            const obj = {
                [prop]: [obj1[prop], obj2[prop]]
            }
            difference.add(JSON.stringify(obj))
        }
    }
    for (let prop in obj2) {
        if (obj1[prop] === undefined || obj1[prop] !== obj2[prop]) {
            const obj = {
                [prop]: [obj1[prop], obj2[prop]]
            }
            difference.add(JSON.stringify(obj))
        }
    }
    return difference
}

const output = difference(testObj1, testObj2)
console.log(output);
