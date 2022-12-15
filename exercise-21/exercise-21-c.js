`
In the context of the event loop, every call to log is placed in the 
callback queue. Since the timeout is the same in every case, we obtain
the counters in the expected order as if they were logged synchronously.
`
for(let i=0; i<5; ++i){
    setTimeout(function () {
        console.log("counter: ", i)
    }, 100)
}