function removeElements(array, elementsToRemove) {
    for (let i = 0; i < array.length; i++) {
        if (elementsToRemove.includes(array[i])) {
            array.splice(i, 1);
            i--;  // to avoid skipping an element
        }
    }
}

const arr = [1,2,3,4,1,2,3,4,5,6]
const toRemove = [2,4,6]
removeElements(arr, toRemove)
console.log(arr)
