var candidate = {
    name: {
        firstname: 'John',
        lastname: 'Galt',
        phone: '123-456-7890'
    }
}

candidate.printName = function (){
    const fullName = `${this.name.firstname} ${this.name.lastname}`
    return fullName
}

const info = document.getElementsByClassName("info")

// info[1].children[0].textContent = candidate.name.firstname
// info[1].children[1].textContent = candidate.printName()

const candidateInfo = info[info.length - 1].firstChild
candidateInfo.textContent = candidate.printName()