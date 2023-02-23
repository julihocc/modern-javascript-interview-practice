// Although func1 and func2 return objects with similar properties
// consider than indeed the respective outputs are pointing to
// two different locations in the heap, and thus they are not
// the same object

function func1() { return { prop:"foo"}; }
function func2() { return { prop:'foo'}; }

const obj1 = func1()
const obj2 = func2()

console.log(obj1===obj2) // false

// let's change the value of property in obj1
obj1.prop = "baz"
console.log(obj1.prop) // baz

// however, obj2.prop remains the same
console.log(obj2.prop)