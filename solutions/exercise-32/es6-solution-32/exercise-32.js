function myLog() {
    return { // we are returning an object, let say X...
        bar: 'bar',
        foo: 'foo',
        prop: function () {
            const self = this; // because prop is a property of X, this points to X and so self=this=X
            console.log(self.bar); // thus self.bar = 'bar'
            console.log(this.foo); // and this.foo = 'foo'
            (function() { // now we invoke an IIFE
                // because of the closure, self remains equal to X
                // however now, inside the IIFE, this points to the global object
                console.log(self.bar); // then self.bar remains as 'bar'
                console.log(this.foo); // but now this.foo is undefined
            })();
        }
    };
}
const obj = myLog();
obj.prop();