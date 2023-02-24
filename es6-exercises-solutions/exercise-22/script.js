const container = document.getElementById("container")
const clickme = document.getElementById("clickme")

clickme.counter = 0 

clickme.addEventListener("click", ()=>{
    clickme.counter++
    console.log(clickme.counter)
    if(clickme.counter%2==0){
        container.style.backgroundColor = "blue"
    } else {
        container.style.backgroundColor = "red"
    }
})
