const fromRemove = (arr,...args) => {
    const output = []
    while(arr.length >0){
        const first = arr.shift()
        if(!args.includes(first)){
            output.push(first)
        }
    }
    return output
}

const arr = [1,2,3,4,1,2,3,4,5,6]
const result = fromRemove(arr, 2,4,6)
console.log(result)