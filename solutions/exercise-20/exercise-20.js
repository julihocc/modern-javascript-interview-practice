`
foo is an empty array (length === 0) and we push 2 elements,
so its length at the end should be 2
`

var foo = [];
foo.push(1);
foo.push(2);

console.log(foo.length===2)