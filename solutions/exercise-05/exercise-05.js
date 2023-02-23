Array.prototype.duplicate = function() {
    const self = this
    return self.concat(self)
}

const input = [1,2,3,4]
console.log(input.duplicate())