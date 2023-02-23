const insert = (string, word) => {
    const array = string.split(" ")
    console.log(array)
    const middle = array.length/2
    console.log(middle)
    array.splice(middle, 0, word)
    console.log(array)
    const end =array.length
    array.splice(end, 0, word)
    console.log(array)
    return array
}

insert("January February March January February March", "April")

