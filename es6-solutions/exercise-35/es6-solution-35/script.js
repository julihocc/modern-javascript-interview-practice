

const table = document.querySelector('table');
const btn = document.getElementById('btn')
const rows = table.getElementsByTagName('tr')


const swap = (xp, yp) => {
    // console.log('swapping')
    const temp = rows[xp].innerHTML;
    // console.log('temp',temp)
    rows[xp].innerHTML = rows[yp].innerHTML;
    rows[yp].innerHTML = temp;
    // console.log('arr',rows)
}

const getAge = (row) => {
    const age = row.getElementsByTagName('td')[1];
    return age.textContent;
}
function bubbleSort( )
{
    // console.log(Array.from(rows).map(getAge));
    const n = rows.length;
    let i, j;
    for (i = 1; i < n; i++)
    {
        for (j = 1; j < n-i; j++)
        {
            // console.log(i,j)
            const age1 = getAge(rows[j]);
            const age2 = getAge(rows[j+1]);
            // console.log(age1,age2)
            if ( age1 > age2)
            {
                swap(j,j+1);
            }
        }

    }
}

btn.addEventListener('click', event=>{
    event.preventDefault()
    bubbleSort()
})
