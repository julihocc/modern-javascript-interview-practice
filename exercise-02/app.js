String.prototype.reverse = function () {
    const self = this
    let output = ""
    for (char of self){
        output = char + output
    }
    return output
}

// const  outputReverse = "hello world".reverse()
// console.log(outputReverse)

String.prototype.reverseWords = function () {
    const self = this+" "
    let bag = []
    let temp = ""
    for(char of self){
        // console.log(char)
        if(char!=" "){
            // console.log(char)
            temp = temp + char
            // console.log(temp)
        } else {
            // console.log(temp)
            temp = temp.reverse()
            // console.log(temp)
            bag.push(temp)
            // console.log(bag)
            temp = ""
        }
    }
    let output = ""
    for(word of bag){
        output = output + word + " "
    }
    return output.trim()
}

const outputReverseWords = "hello world".reverseWords()
console.log(outputReverseWords)