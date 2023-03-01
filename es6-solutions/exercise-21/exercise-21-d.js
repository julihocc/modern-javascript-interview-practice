`
Since we deleted thr propiety from our object, this is not defined anymore, 
so we get undefined.
`
var obj = {
    prop: {}
};

delete obj.prop;
console.log(obj.prop);