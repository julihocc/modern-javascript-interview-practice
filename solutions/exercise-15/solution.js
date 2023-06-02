const foo = (function() {
        function privateMethod() {
            console.log('this is a private method')
        }

        return {
            bar: function () {
                console.log('this is a public method')
                privateMethod()
            },
            test: function (){
                console.log('this is another public method')
                privateMethod()
            }
        }
    }
)()

foo.bar()
foo.test()
try {
    foo.privateMethod()
} catch (e) {
    console.error("privateMethod is not accessible outside foo")
}
