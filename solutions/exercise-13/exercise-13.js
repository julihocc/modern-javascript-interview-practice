
Date.prototype.nextDay = function () {
    const tomorrow = this.setDate(this.getDate()+1)
    return new Date(tomorrow)
}

const today = new Date()
console.log(today)
console.log(today.nextDay())