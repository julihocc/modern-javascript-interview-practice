const intersect = (arr0, arr1) => {
    const intersection = []
    for(const num of arr0){
        if(arr1.includes(num)){
            intersection.push(num)
            // let index = arr1.indexOf(num)
            // delete arr1[index]
        }
    }
    return Array.from(intersection)
}

const arr0 = [2,3,5,3]
const arr1 = [3,4,3,5,3,6,8]
console.log(intersect(arr0, arr1))