
const arr = [21,0,4,5,0,22,0,0,3]

const reorder = arr => {
    let output
    if(arr.length <= 1){
        // console.log('case base')
        output = arr
    } else {
        const first = arr.shift()
        // console.log(first, arr)
        if(first===0){
            // console.log('case 0')
            output = reorder(arr).concat([first])
        } else {
            // console.log('case 1')
            output = [first].concat(reorder(arr))
        }
    }
    // console.log("-> ", output, output.constructor)
    return output
}

console.log(reorder(arr))