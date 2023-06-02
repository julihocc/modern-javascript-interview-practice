const rows = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

function countOccurrencesInRows(word) {
    const counts = [0,0, 0, 0];
    for (let char in word){
        for (let i= 0; i < rows.length; i++){
            if (rows[i].includes(word[char])){
                counts[i]++;
            }
        }
    }
    return counts;
}

function fourOrMoreConsecutiveCharacters(password) {
    const counts = countOccurrencesInRows(password);
    for (let count of counts){
        if (count >= 4){
            return true;
        }
    }
    return false;
}

console.log(fourOrMoreConsecutiveCharacters('1234'))
console.log(fourOrMoreConsecutiveCharacters('qwert'))
console.log(fourOrMoreConsecutiveCharacters('asdfg'))
console.log(fourOrMoreConsecutiveCharacters('1234567890'));
console.log(fourOrMoreConsecutiveCharacters('qweasdzxc'))
console.log(fourOrMoreConsecutiveCharacters('132374'))
console.log(fourOrMoreConsecutiveCharacters('fdsa'))
