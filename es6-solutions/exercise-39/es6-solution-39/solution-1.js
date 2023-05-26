const rows = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

const consecutiveCharacters = (char1, char2) => {
    for (let row of rows){
        if (row.includes(char1)){
            let index1 = row.indexOf(char1);
            let nextChar = row[index1 + 1];
            if (nextChar === char2){
                return true;
            }
        }
    }
    return false;
}

const fourOrMoreConsecutiveCharacters = (password) => {

    const recursion = (password, index, count) => {
        if (index === password.length - 1){
            return count >= 4;
        }
        if (consecutiveCharacters(password[index], password[index + 1])){
            count++;
        } else {
            count = 1;
        }
        return recursion(password, index + 1, count);
    }

    return recursion(password, 0, 1);
}

console.log(fourOrMoreConsecutiveCharacters('1234'))
console.log(fourOrMoreConsecutiveCharacters('qwert'))
console.log(fourOrMoreConsecutiveCharacters('asdfg'))
console.log(fourOrMoreConsecutiveCharacters('1234567890'));
console.log(fourOrMoreConsecutiveCharacters('qweasdzxc'))
console.log(fourOrMoreConsecutiveCharacters('132374'))
console.log(fourOrMoreConsecutiveCharacters('fdsa'))
