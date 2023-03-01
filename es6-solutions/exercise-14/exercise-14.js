const check = (...args) => {
    for(const arg of args){
        if(arg===2){
            return true
        }
    }
    return false
}

console.log(check(1,2))
console.log(check("hola", 1))