let Dates = new Date()
let clock = document.querySelector("#clock")

let divDate = document.querySelector("#Date")
divDate.innerHTML = `<h3>${Dates.toLocaleDateString()}</h3>`
let h = ()=> {
    setInterval(()=>{
    let date = new Date();
    let time = date.toLocaleTimeString("default",{
        'minute': 'numeric',
        'hour':"numeric",
        'second':'numeric'
    })
    clock.innerHTML = `<h3>${time}</h3>`
},2000)
}
h()
