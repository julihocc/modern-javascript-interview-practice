const  DateTime = {}
console.log(DateTime)

global.modifyDateTime = function(prop, descriptor){
    Object.defineProperty(DateTime, prop, descriptor)
}

modifyDateTime('prop', {value:0, writable:true, enumerable:true})
console.log(DateTime)

modifyDateTime('prop', {value:1, writable:true, enumerable:true})
console.log(DateTime)

