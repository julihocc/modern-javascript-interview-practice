const nextDay = day => {
    const tomorrow = day.setDate(day.getDate()+1)
    return new Date(tomorrow)
}

const today = new Date()
console.log(today)

const tomorrow = nextDay(today)
console.log(tomorrow)