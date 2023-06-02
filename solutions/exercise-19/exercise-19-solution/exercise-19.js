const matchChar = (char1, char2) => {
    if (char1 === "*" || char1 === char2) return true
    return false
}

const matchPhrase = (pattern, phrase) => {
    const n = pattern.length
    const m = phrase.length
    for (let i = 0; i < n; i++) {
        if (i >= m) return false
        if (!matchChar(pattern[i], phrase[i])) return false
    }
    return true
}

const find = (pattern, text) => {
    const n = pattern.length
    const m = text.length
    for (let i = 0; i <= m - n; i++) {
        if (matchPhrase(pattern, text.slice(i, i + n))) return true
    }
    return false
}

const pattern = "a*c"
const string = "xyzabcdeac"

const output = find(pattern, string)
console.log(output)