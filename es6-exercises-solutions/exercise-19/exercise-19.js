const match = (char1, char2) => {
    if (char1 === "*" || char1 === char2) return true
    return false
}

const find = (pattern, text) => {
    const firstChar = pattern[0]
    console.log(firstChar);
    const whereIsFirstChar = text
        .split("")
        .map((c,i) => {
         if(match(firstChar, c)){
             return i
         } return -1
        })
        .filter( v => v>=0)
    console.log(whereIsFirstChar);
    for(const position of whereIsFirstChar){
        const subtext = text.substring(position, position+pattern.length)
        console.log(subtext)
        let ok = true
        for(const index in pattern){
            if(index>=subtext.length) {
                ok = ok && false
            } else {
                const char1 = pattern[index]
                const char2 = subtext[index]
                if(match(char1, char2)){
                    ok = ok && true
                } else {
                    ok = ok && false
                }
            }
        }
        if(ok) return position
    }
    return -1
}

const pattern = "a*c"
const string = "xyzabcdeac"

const output = find(pattern, string)
console.log(output)