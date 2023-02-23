var foo =(function(){
    this.privateFun = function() {
        console.log("Hi");
    }
    return {
        'bar': function(){
            console.log('Hello');
        },
        'test': function(){
            privateFun();
        }
    }
})()

foo.bar()
foo.test()
try{
    foo.privateFun()
} catch (e) {
    console.log(e)
}
