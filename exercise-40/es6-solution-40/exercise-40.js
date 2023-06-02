const find = (arr) => {
    let output = new Set();
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let x = -arr[i] - arr[j];
            if (arr.includes(x)) {
                let newTriple = [arr[i], arr[j], x];
                newTriple.sort();
                output.add(JSON.stringify(newTriple));
            }
        }
    }
    return output;
}

const testArr = [3, 2, 1, 0, -3, 2, 2, -2];
const output = find(testArr);
console.log(output);