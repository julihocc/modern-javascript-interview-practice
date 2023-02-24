const container = document.getElementById("container")
const box = document.getElementById("box")
let repeater

const moveLeft = () => {
    repeater = setInterval(() => {
        const left = parseInt(window.getComputedStyle(box).left, 10)
        const newpos = (500 + left - 1)%500
        box.style.left = newpos + "px"
        // console.log("go "+left+" "+newpos)
    } , 10)
}

container.addEventListener("mouseenter", moveLeft)

container.addEventListener('mouseleave', ()=> {
    clearInterval(repeater)
})