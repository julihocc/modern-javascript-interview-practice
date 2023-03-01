
const testArray = [21,0,4,5,0,22,0,0,3]

function swap(arr, xp, yp)
{
    const temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

// https://www.geeksforgeeks.org/bubble-sort/
// An optimized version of Bubble Sort
function bubbleSortModified( arr) {
    const n = arr.length;
    let i, j;
    for (i = 0; i < n-1; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {
            if (arr[j] > arr[j+1] && arr[j+1] === 0)
            {
                swap(arr,j,j+1);

            }
        }

    }
}

bubbleSortModified(testArray)
console.log(testArray)