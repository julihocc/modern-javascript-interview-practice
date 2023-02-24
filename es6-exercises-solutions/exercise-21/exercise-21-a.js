`
it throws an error, namely 'Reference Error: bar is not defined'
because bar is defined throught var in the IIFE scope
but we were trying to call this in a global scope
`
var foo = "hello";
(function (){
    var bar = "World";
})();
try {
    console.log(foo + bar)
} catch(error){
    console.log(error)
}