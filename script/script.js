console.log("Helló")
let talalat=0
const baseAudio = new Audio("./img/robbanas.wav")
function boom(){
    const a= baseAudio.cloneNode()
    a.volume=.1
    a.play()
}

function ufoKeszites(){
const ufo = document.createElement("img")
ufo.src="./img/UFO.gif"

document.body.appendChild(ufo)

const maxTop = window.innerHeight- 300;
// console.log(maxTop,";",ufo.height)
ufo.style.top=Math.random()*maxTop+"px"
ufo.style.left="0px"
ufo.addEventListener("click", robban)
ufo.addEventListener("mouseleave", szerelmes )
ufo.addEventListener("mouseenter", sir )
}

function sir(){
    this.src="./img/UFO-cry.gif"
}

function szerelmes(e){
     e.currentTarget.src="./img/UFO-kissy.gif"
}

function mozgat(e){
   document.querySelectorAll("img").forEach(
    (ufo)=>{
        const left = parseInt(ufo.style.left)
        // console.log("ufo:", ufo)
        // console.log("left:", left)
        ufo.style.left=left+10+"px"
        
        if (parseInt(ufo.style.left)>window.innerWidth)
        {
            ufo.remove()
        }
        // console.log("(parseInt(ufo.style.left)",parseInt(ufo.style.left))
        if (parseInt(ufo.style.left)>(window.innerWidth*2/3))
        {
             ufo.src="./img/UFO-sleep.gif"
        }
        document.querySelector("h1").innerHTML=talalat
    }
   ) 
}

function robban(event){
    const ufo= event.currentTarget;
    const robbanas = document.createElement("img")
    robbanas.style.left=ufo.style.left
    robbanas.style.top=ufo.style.top
    robbanas.style.width="300px"
    robbanas.src="./img/bang.gif"
    ufo.replaceWith(robbanas)
    boom()

    document.querySelector("h1").innerHTML=talalat++
    setTimeout(
        ()=> robbanas.remove(), 750
    )

}


setInterval(ufoKeszites,1000)
setInterval(mozgat, 100 )