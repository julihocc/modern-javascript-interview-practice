

const ball = document.getElementById('ball')
// console.log(ball)

const oneDelay = 100
const renderBall = (pos, counter) => {

    setTimeout(() => {
        const height = 100-10*pos
        // console.log('height', height)
        const prevBall = document.getElementById('ball')
        if(prevBall) {
            prevBall.remove()
        }
        const ball = document.createElement('span')
        ball.id = 'ball'
        ball.className = 'dot'
        ball.style.top = `${height}px`
        // document.body.appendChild(ball)
        document.body.appendChild(ball)
    }, counter*oneDelay)

    return counter+1
}

const upward = (upto, counter) => {
    for(let pos=1; pos<=upto-1; pos++){
        counter = renderBall(pos, counter)
    }
    return counter
}
const downward = (from, counter) => {
    for(let pos=from; pos>=0; pos--){
        counter = renderBall(pos, counter)
    }
    return counter
}

let counter = 0
for(let peak=10; peak>=0; peak--){
    if(peak<10) {
        counter = upward(peak, counter)
    }
    if(peak>0) {
        counter = downward(peak, counter)
    }
    counter++
}