const includesArray = (arr) => {
    const types = arr.map(item => {
        return Array.isArray(item)
    })

    const output = types.reduce(
        (acc, curr) => acc || curr, false
    )

    return output
}

const input = [1,2,3,[4,5,[6,7],10,[11,[12,13]]],8,9]

// console.log(includesArray(input))

const recursion = (array, result) => {
    for(let x of array){
        if(Array.isArray(x)){
            let flatten = flat(x, [])
            for(let y of flatten){
                result.push(y)
            }
        } else {
            result.push(x)
        }
    }
    return result
}

const flat = (array) => {
    return recursion(array, [])
}

console.log(flat(input))