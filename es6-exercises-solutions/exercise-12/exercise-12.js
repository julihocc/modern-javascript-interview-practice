

class DateTime extends Date {
    constructor() {
        super()
    }
    get prop() {
        return this._prop
    }
    set prop(value) {
        this._prop = value
    }
}
console.log(DateTime)
const dateTime = new DateTime()
dateTime.prop = 0
console.log(dateTime)
dateTime.prop = 1
console.log(dateTime)
