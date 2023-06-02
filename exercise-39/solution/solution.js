const rows = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
const reversedRows = ['0987654321', 'poiuytrewq', 'lkjhgfdsa', 'mnbvcxz'];

function fourOrMoreConsecutiveCharacters(word) {
    if (word.length >= 4){
        for (let i = 0; i < word.length; i++) {
            if (i <= word.length - 4) {
                let subWord = word.substring(i, i + 4)
                if (rows.some(row => row.includes(subWord))) {
                    return true
                }
            }
            if (i >= 3) {
                let subWord = word.substring(i - 3, i+1)
                if (reversedRows.some(row => row.includes(subWord))) {
                    return true
                }
            }
        }
    }
    return false
}


console.log(fourOrMoreConsecutiveCharacters('1234'))
console.log(fourOrMoreConsecutiveCharacters('qwert'))
console.log(fourOrMoreConsecutiveCharacters('asdfg'))
console.log(fourOrMoreConsecutiveCharacters('1234567890'));
console.log(fourOrMoreConsecutiveCharacters('qweasdzxc'))
console.log(fourOrMoreConsecutiveCharacters('132374'))
console.log(fourOrMoreConsecutiveCharacters('fdsa'))
