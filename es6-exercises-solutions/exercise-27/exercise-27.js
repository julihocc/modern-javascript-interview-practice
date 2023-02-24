const obj1 = [] // the shorthand for creating an empty array
console.log(obj1, typeof obj1, obj1.constructor)
const obj2 = {} // the shorthand for creating an empty object
console.log(obj2, typeof obj2, obj2.constructor)

// When doing [...args]+ [...others], it returns a string concatenating every element of args and others
// Thus []+[] is just an empty string
console.log(obj1+obj1==="")

// When trying to 'add' an empty array with an empty object, an empty string is joined with
// the stringification of an empty object "[object Object]"
console.log([]+{}==="[object Object]")
console.log({}+[]==="[object Object]")

// Finally, when adding an empty object twice, it's just like concatenating both stringifications
console.log({}+{}==="[object Object][object Object]")
