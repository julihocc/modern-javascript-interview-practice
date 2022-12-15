// In both cases, the respective function fn is never invoked,
// so this.foo is not printed in console.


function foo1(){
    var fn = function(){
        console.log(this.foo);
    };
    return { foo:'bar' };
}
function foo2(){
    var fn = function(){
        console.log(this.foo);
    };
    return { foo:'baz' };
}
console.log(foo1()); // { foo: 'bar' }
console.log(foo2()); // { foo: 'baz' }
