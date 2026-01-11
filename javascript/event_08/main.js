// as well as we can target the class and then on that array of the class 
// item we can perform an action

// let list = document.querySelectorAll(".s");
// console.log(list);

// list.forEach((item,index)=>{
//     item.addEventListener("click",(e)=>{
//         e.preventDefault()
//         alert(` you click the fuking item on the fucking index :-> ${index}`)
//     })
// })

// we can use the event to triger an specific action like when mouse hover over the item and 
// when someone click the item
// that modern aproach we are not allow use this function beacause it is limited in the porparty 
// and have issues with it so the best code the eventlistner which only give the onclick but also have 
// more features in it and less bugy

// bugy an programing prephase an fucking intreduced in late 1870s and then pupularized in 1947 by
// idiot working on computer it stop due to bug 

// let first = document.querySelector("#first").onclick = () => (alert("hello world"))

// .addEventListener('Event',(EventObject)=>{
//     // code
// })
// let li = document.querySelector("li")
// li.addEventListener('click',(e)=>{

//     //     console.log(e);

// // 🔹 event.type
// //     Tells which event occurred

//     // console.log(e.type); // "click"
//     // to find the exact elemen whcih is triggerred event
//     // console.log(e.target);
//     // console.log(e.currentTarget);
//   const circle = document.getElementById('circle');
//     li.innerText = `${e.type} \n ${e.innerText}`
// },false)

// atachevent use early in internat explorear
// jquery use onclick

// their are two type of tracking one is bubling and other is 
// captureing b use bottom to top and the capture use top to bottom

// document.querySelector("ul")
// .addEventListener('click',(e)=>{
//     e.target.remove()
// })

let ul  = document.querySelector("#con")
ul.addEventListener('click',(e)=>{
    e.preventDefault()
    if (e.target.tagName == "IMG") {
        
        e.target.remove()
    }
    
})

// ul.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//         e.preventDefault();
//         e.currentTarget.remove()
//     })
// })

// document.querySelector('li').addEventListener('click',(e)=>{
//     console.log("click child");
//     e.stopPropagation(); // will stop futher bublling 
// })
