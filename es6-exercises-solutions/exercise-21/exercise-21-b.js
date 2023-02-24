`
In a boolean context, an empty array is consider a truthy value
`
if([]) console.log("array is true")

`
But within the context of weak comparision, it's not equal to true
`
if([]==true) console.log("array == true")