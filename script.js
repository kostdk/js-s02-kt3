let div_point = document.querySelector(".point")
let div_slidecontainer = document.querySelector(".slider")

console.log(div_slidecontainer)

let isMove = false
div_point.addEventListener('mousedown',() =>{
    isMove = true
    
})
div_point.addEventListener('mouseup', ()=>{
    isMove = false
})
div_slidecontainer.addEventListener('mouseup', ()=>{
    isMove = false
})

div_slidecontainer.addEventListener('mousemove', (p) => {
    if (isMove){
    moveElem(p)
    }
})

function moveElem(p){ 
    p.preventDefault()
    pos_x = p.clientX - div_slidecontainer.clientWidth/2 -5 +'px'

    
    if (p.clientX > div_slidecontainer.clientWidth) {
        pos_x = div_slidecontainer.clientWidth
    }
    div_point.style.left = pos_x
    

    let output = document.querySelector(".val");
    console.log(output)
    let value =  div_slidecontainer.clientWidth / 100
    output.innerHTML = Math.floor(p.clientX / value);

}