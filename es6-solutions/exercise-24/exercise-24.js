const fromRemove = (arr,...args) => {
    return arr.filter(item => !args.includes(item))
}

const arr = [1,2,3,4,1,2,3,4,5,6]
const result = fromRemove(arr, 2,4,6)
console.log(result)