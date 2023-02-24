const table = document.querySelector('table');
const trs = table.querySelectorAll('tr');

const directory = new Set();
const record = {};

for (let i = 1; i < trs.length; i++) {
    const tr = trs[i];
    const tds = tr.querySelectorAll('td');
    const td = tds[tds.length - 1];
    const index = parseInt(td.textContent);
    directory.add(index);
    if (!(index in record)) {
        record[index] = [];
    }
    record[index].push(tr);
    tr.remove();
}

const sorted = Array.from(directory).sort((a, b) => a - b);
console.log(sorted);

for (let i = 0; i < sorted.length; i++) {
    const index = sorted[i];
    const trs = record[index];
    for (let j = 0; j < trs.length; j++) {
        const tr = trs[j];
        table.appendChild(tr);
    }
}
