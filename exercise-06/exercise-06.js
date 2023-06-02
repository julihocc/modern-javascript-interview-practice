
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