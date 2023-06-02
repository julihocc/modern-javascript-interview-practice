const table = document.querySelector('table');
const btn = document.getElementById('btn');
const rows = Array.from(table.getElementsByTagName('tr'));

const swap = (xp, yp) => {
    const temp = rows[xp].innerHTML;
    rows[xp].innerHTML = rows[yp].innerHTML;
    rows[yp].innerHTML = temp;
};

const getAge = (row) => {
    const age = row.getElementsByTagName('td')[1];
    return parseInt(age.textContent);
};

function bubbleSort() {
    const n = rows.length;
    let i, j;
    for (i = 1; i < n; i++) {
        for (j = 1; j < n - i; j++) {
            const age1 = getAge(rows[j]);
            const age2 = getAge(rows[j + 1]);
            if (age1 > age2) {
                swap(j, j + 1);
            }
        }
    }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    bubbleSort();
});
