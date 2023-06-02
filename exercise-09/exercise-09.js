const fibo_memo = n => {

    const memo = {}

    const fibo = n => {
        if(n in memo){
            // console.log(n, memo, memo[n])
            return memo[n]
        } else {
            if(n<=1) {
                memo[n] = 1
            } else {
                memo[n] = fibo(n-1)+fibo(n-2)
            }
            // console.log(n, memo, memo[n])
            return memo[n]
        }
    }

    return fibo(n)
}


for(let i=0; i<=10; i++){
    console.log(i, fibo_memo(i))
}