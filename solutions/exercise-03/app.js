const intersect = (arr0, arr1) => {
    const intersection = []
    for(const num of arr0){
        if(arr1.includes(num)){
            intersection.push(num)
        }
    }
    return intersection
}

const arr0 = [2,3,5,3]
const arr1 = [3,4,3,5,3,6,8]
console.log(intersect(arr0, arr1))