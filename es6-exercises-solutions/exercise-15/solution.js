var foo = /** @class */ (function () {
    function foo() {
    }
    foo.prototype.bar = function () {
        console.log("bar");
    };
    foo.prototype.test = function () {
        console.log("test");
    };
    return foo;
}());
var f = new foo();
f.bar();
//# sourceMappingURL=solution.js.map
f.test();