const downward = (from) => {
    for(let pos=from; pos>=0; pos--){
        console.log(pos)
    }
}

const upward = (upto) => {
    for(let pos=1; pos<=upto-1; pos++){
        console.log(pos)
    }
}

for(let peak=10; peak>=0; peak--){
    if(peak!=10) upward(peak)
    if(peak!=0) downward(peak)
}