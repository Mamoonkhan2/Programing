let h1    = document.querySelector("h1");
let start = document.querySelector("#start"); 
let stops  = document.querySelector("#stop");
let body = document.querySelector("body");
let interval;

let randomcolor = ()=>{
    let a = "0123456789ABCDEF"
    let c = "#";
    for (let i = 0; i < 6; i++) {
        c += a[ Math.floor(Math.random()*16)];        
    }
    return c;
}

let startChanginColor = ()=>{
    if(!interval){
        interval = setInterval(changeMe,1000)
    }
    console.log("start");
    
}
function changeMe() {
    body.style.backgroundColor =randomcolor()
    console.log(randomcolor());
    
}
let stopChanginColor = ()=>{
   clearInterval(interval);
   console.log("stoped");
   interval = null
}
stops
.addEventListener('click',stopChanginColor)
start
.addEventListener('click',startChanginColor)
    
