const testArray = [21, 0, 4, 5, 0, 22, 0, 0, 3]

function solution(arr) {
    let insertPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos += 1;
        }
    }
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos += 1;
    }
}

solution(testArray)
console.log(testArray)
