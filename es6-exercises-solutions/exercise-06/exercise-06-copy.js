// const insert = (string, word='April') => {
//     const array = string.split(" ")
//     // console.log(array)
//     const middle = array.length/2
//     // console.log(middle)
//     array.splice(middle, 0, word)
//     // console.log(array)
//     const end =array.length
//     array.splice(end, 0, word)
//     // console.log(array)
//     return array
// }
//
// console.log(insert("January February March January February March"))

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const insert = (str) => {
    const words = str.split(" ")
    // console.log(words)
    const output = []
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i]
        // console.log('currentWord', currentWord)
        const nextWord = words[i + 1]
        // console.log('nextWord', nextWord)
        const monthIndex = months.indexOf(currentWord)
        const nextMonth = monthIndex < 11 ? months[monthIndex + 1] : months[0]
        // console.log('nextMonth', nextMonth)
        output.push(currentWord)
        if (nextWord !== nextMonth) {
            output.push(nextMonth)
        }
    }
    return output.join(" ")
}

str = "January February March January February March"
console.log(insert(str))