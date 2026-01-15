console.log("Helló")


function ufoKeszites(){
const ufo = document.createElement("img")
ufo.src="./img/UFO.gif"

document.body.appendChild(ufo)

const maxTop = window.innerHeight- 300;
// console.log(maxTop,";",ufo.height)
ufo.style.top=Math.random()*maxTop+"px"
ufo.style.left="0px"
ufo.addEventListener("click", robban)
}

function mozgat(){
   document.querySelectorAll("img").forEach(
    (ufo)=>{
        const left = parseInt(ufo.style.left)
        console.log("ufo:", ufo)
        console.log("left:", left)
        ufo.style.left=left+10+"px"
        
        if (parseInt(ufo.style.left)>window.innerWidth)
        {
            ufo.remove()
        }
        document.querySelector("h1").innerHTML=document.querySelectorAll("img").length
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

    setTimeout(
        ()=> robbanas.remove(), 750
    )

}


setInterval(ufoKeszites,1000)
setInterval(mozgat, 100 )