const rows = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

const inSameRow = (char1, char2) => {
    for (let row of rows){
        if (row.includes(char1)){
            return row.includes(char2);
        }
    }
}

const check = (password) => {
    let i = 0;
    const stack = [];
    while (i < password.length){
        let char1 = password[i];
        console.log('char1: ', char1, i);
        stack.push(char1);
        console.log(stack);
        i = i + 1;
        while (i < password.length){
            let char2 = password[i];
            console.log('char2: ', char2, i);
            if (inSameRow(char1, char2)){
                stack.push(char2);
                console.log(stack);
                if(stack.length >= 4){
                    return false
                }
                i++;
            } else {
                stack.length = 0;
                break;
            }
        }
    }
    return true;
}

console.log(check('1234'))
console.log(check('qwert'))
console.log(check('asdfg'))
console.log(check('1234567890'));
console.log(check('qweasdzxc'))
