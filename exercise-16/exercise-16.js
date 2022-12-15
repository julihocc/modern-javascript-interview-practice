var candidate = {
    name: {
        firstname: 'John',
        lastname: 'Galt',
        phone: '123-456-7890'
    }
}

console.log(candidate)

candidate.printName = function (){
    // console.log(this)
    const fullName = `${this.name.firstname} ${this.name.lastname}`
    // console.log(fullName)
    return fullName
}

console.log(candidate.printName())